// TODO: Add all types
declare module "react-native-parallax-scroll-view" {
  import type React from "react";
  import type { ScrollResponderEvent, ViewStyle } from "react-native";

  declare const ParralaxScrollView: React.FunctionComponent<{
    /**
     * The color of the header background. (Defaults to #000)
     */
    backgroundColor?: string;
    contentBackgroundColor?: string;
    parallaxHeaderHeight: number;
    /**
     * The speed factor that the background moves at relative to the foreground. Defaults to 5.
     */
    backgroundScrollSpeed?: number;
    fadeOutForeground?: boolean;
    stickyHeaderHeight?: number;
    contentContainerStyle?: ViewStyle;
    outputScaleValue?: number;
    scrollEvent?: (e: ScrollResponderEvent) => void;
    renderForeground?: () => JSX.Element;
    renderBackground?: () => JSX.Element;
    renderContentBackground?: () => JSX.Element;
    renderFixedHeader?: () => JSX.Element;
    renderScrollComponent?: () => JSX.Element;
    /**
     * Render sticky header
     */
    renderStickyHeader?: () => JSX.Element;
  }>;
  export default ParralaxScrollView;
}
