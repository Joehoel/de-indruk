import { Box, Text } from "@elements";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import type { ReactNode, SetStateAction } from "react";
import { ScrollView, TextInput } from "react-native";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
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
    paddingVertical: 21,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  input: {
    ...theme.textVariants.h6,
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

  // const y = useSharedValue(0);

  // const style = useAnimatedStyle(() => {
  //   return {
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 1,
  //     },
  //     shadowOpacity: 0.18,
  //     shadowRadius: 1.0,

  //     elevation: 1,
  //   };
  // });

  return (
    <SafeAreaView
      style={[styles.container, { marginBottom: height + theme.spacing.md }]}
    >
      <Box style={[styles.header]}>
        {title && <Text variant="title">{title}</Text>}
        <Box style={styles.search}>
          <TextInput
            value={query}
            style={styles.input}
            onChangeText={value => setQuery(value)}
            placeholder={placeholder ?? "Zoek..."}
            placeholderTextColor="#9EA0B4"
          />
          <FontAwesomeIcon
            icon={faSearch}
            size={22}
            color={theme.colors.darkBlue2}
          />
        </Box>
      </Box>

      {!scroll ? (
        <Box style={padding ? styles.wrapper : null}>{children}</Box>
      ) : (
        <ScrollView style={styles.wrapper}>{children}</ScrollView>
      )}
    </SafeAreaView>
  );
}
