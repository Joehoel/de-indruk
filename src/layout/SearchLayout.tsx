import { Box, Text } from "@elements";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import type { ReactNode, SetStateAction } from "react";
import { useRef } from "react";
import { Keyboard, TextInput, TouchableOpacity } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing.md,
  },
  wrapper: {
    marginTop: -theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
  },
  header: {
    backgroundColor: theme.colors.background,
    zIndex: 100,
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottomLeftRadius: theme.borderRadii.md,
    borderBottomRightRadius: theme.borderRadii.md,
  },
  search: {
    borderRadius: 33,
    backgroundColor: theme.colors.gray3,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  input: {
    ...theme.textVariants.h6,
    paddingVertical: 21,
    flex: 1,
    marginRight: 10,
  },
  cancel: {
    color: theme.colors.primary,
  },
}));

interface SearchLayoutProps {
  title?: string;
  placeholder?: string;
  children: ReactNode;
  setQuery: React.Dispatch<SetStateAction<string>>;
  query: string;
  scroll?: boolean;
  padding?: boolean;
}

export default function SearchLayout({
  title,
  placeholder,
  children,
  setQuery,
  query,
  scroll = false,
  padding = true,
}: SearchLayoutProps) {
  const styles = useStyles();
  const theme = useTheme();
  // TODO: test if this works
  const height = useBottomTabBarHeight();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });

  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 10],
      [0, 0.18],
      Extrapolation.CLAMP
    );

    return {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: opacity,
      shadowRadius: 1.0,
      elevation: 1,
    };
  });

  const inputRef = useRef<TextInput>(null);

  return (
    <SafeAreaView
      style={[styles.container, { marginBottom: height + theme.spacing.md }]}
    >
      <Animated.View style={[styles.header, style]}>
        {title && <Text variant="title">{title}</Text>}
        <Box style={styles.search}>
          <TextInput
            value={query}
            style={styles.input}
            ref={inputRef}
            onChangeText={value => setQuery(value)}
            placeholder={placeholder ?? "Zoek..."}
            placeholderTextColor="#9EA0B4"
          />
          <TouchableOpacity
            onPress={() => {
              // TODO: Search
              Keyboard.dismiss();
            }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              size={22}
              color={theme.colors.darkBlue2}
            />
          </TouchableOpacity>
        </Box>
      </Animated.View>

      {!scroll ? (
        <Box style={padding ? styles.wrapper : null}>{children}</Box>
      ) : (
        <Animated.ScrollView
          style={styles.wrapper}
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
        >
          {children}
        </Animated.ScrollView>
      )}
    </SafeAreaView>
  );
}
