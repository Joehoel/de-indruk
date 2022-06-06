/* eslint-disable react/style-prop-object */
import { Date, ShareButton } from "@components";
import { Box, Text } from "@elements";
import { makeStyles, useTheme } from "@lib/theme";
import { useNavigationState } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Bericht } from "@typings/global";
import type { WithBericht, DashboardStackList } from "@typings/navigation";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { Dimensions, Image, View } from "react-native";
import ParralaxScrollView from "react-native-parallax-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const HEADER_HEIGHT = 390;

const useStyles = makeStyles(theme => ({
  container: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -32,
    padding: theme.spacing.md,
    paddingTop: 44,
    zIndex: 10,
  },
  bericht: {},
  image: {
    height: HEADER_HEIGHT,
    width,
  },
}));

type BerichtScreenProps = NativeStackScreenProps<DashboardStackList, "Bericht">;

export default function BerichtScreen({
  route,
  navigation,
}: BerichtScreenProps) {
  const { bericht } = route.params;

  const { routeNames, index } = useNavigationState(state => state);
  const routeName = routeNames[index];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ShareButton
          content={{
            title: bericht.title,
            message: `${bericht.title}\n\n ${bericht.text}`,
          }}
        />
      ),
    });
  }, [bericht.text, bericht.title, navigation, route.name, routeName]);

  const theme = useTheme();
  const styles = useStyles();

  return (
    <ParralaxScrollView
      parallaxHeaderHeight={HEADER_HEIGHT}
      contentBackgroundColor={theme.colors.background}
      contentContainerStyle={styles.container}
      backgroundColor={theme.colors.background}
      renderForeground={() => (
        <View>
          <Image
            source={{ uri: bericht.image }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      )}
    >
      <StatusBar style="light" />
      <Box style={styles.bericht}>
        <Date date={bericht.date} />
        <Text variant="h2" marginTop="md">
          {bericht.title}
        </Text>
        <Text variant="body" marginTop="md">
          {bericht.text}
        </Text>
      </Box>
    </ParralaxScrollView>
  );
}
