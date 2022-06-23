/* eslint-disable no-return-assign */
/* eslint-disable react/style-prop-object */
import { Date, ShareButton } from "@components";
import { Box, Text } from "@elements";
import { makeStyles, useTheme } from "@lib/theme";
import { useNavigationState } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { DashboardStackList } from "@typings/navigation";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import ParralaxScrollView from "react-native-parallax-scroll-view";
import Animated, {
  FadeIn,
  FadeInDown,
  SlideInDown,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

const { width } = Dimensions.get("window");

const HEADER_HEIGHT = 390;

const useStyles = makeStyles(theme => ({
  container: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -32,
    padding: theme.spacing.md,
    // backgroundColor: "red",
    paddingTop: 44,
    zIndex: 100,
  },
  bericht: {
    marginTop: -32,
    paddingTop: 44,
    padding: theme.spacing.md,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: theme.colors.white,
  },
  image: {
    height: HEADER_HEIGHT,
    width,
    zIndex: -1,
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

  const theme = useTheme();
  const styles = useStyles();
  const scrollY = useSharedValue(0);
  const margin = useSharedValue(-32);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      marginTop: -32,
      // marginTop: withTiming(margin.value, { duration: 500 }),
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      // transform: [{ translateY: withTiming(0, { duration: 1000 }) }],
      padding: theme.spacing.md,
      backgroundColor: theme.colors.white,
      paddingTop: 44,
      zIndex: 100,
    };
  });

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
  }, [
    bericht.text,
    bericht.title,
    navigation,
    route.name,
    routeName,
    scrollY.value,
  ]);

  return (
    <View style={StyleSheet.absoluteFill}>
      <ParralaxScrollView
        parallaxHeaderHeight={HEADER_HEIGHT}
        contentBackgroundColor={theme.colors.background}
        // contentContainerStyle={animatedStyles}
        // contentContainerStyle={styles.container}
        backgroundColor={theme.colors.background}
        scrollEvent={e => {
          // @ts-ignore
          scrollY.value = e.nativeEvent.contentOffset.y;
        }}
        renderForeground={() => (
          <SharedElement id={`bericht.${bericht.id}.image`}>
            <Image
              source={{ uri: bericht.image }}
              resizeMode="cover"
              style={styles.image}
            />
          </SharedElement>
        )}
      >
        {/* <SharedElement id={`bericht.${bericht.id}`}> */}
        <Animated.View
          entering={SlideInDown.delay(220)
            .duration(400)
            .overshootClamping(1000)}
          style={animatedStyles}
        >
          {/* <Animated.View style={styles.bericht}> */}
          <SharedElement id={`bericht.${bericht.id}.date`}>
            <Date date={bericht.date} />
          </SharedElement>
          <SharedElement id={`bericht.${bericht.id}.title`}>
            <Text variant="h2" marginTop="md">
              {bericht.title}
            </Text>
          </SharedElement>
          <Text variant="body" marginTop="md">
            {bericht.text}
          </Text>
        </Animated.View>
        {/* </SharedElement> */}
      </ParralaxScrollView>
      <StatusBar style="dark" />
    </View>
  );
}
