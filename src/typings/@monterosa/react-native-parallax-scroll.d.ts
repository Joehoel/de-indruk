// TODO: Add all types
declare module "@monterosa/react-native-parallax-scroll" {
  import type { Ref } from "react";
  import type React from "react";
  import type { ViewStyle } from "react-native";

  declare const ParallaxScroll: React.FunctionComponent<{
    style?: ViewStyle;
    width?: number;
    height?: number;
    innerRef?: Ref;
    scrollStyle?: ViewStyle;
    headerHeight?: number;
    renderHeader?: ({
      width,
      height,
      animatedValue,
    }: {
      width: number;
      height: number;
      animatedValue: any;
    }) => JSX.Element;
    onHeaderFixed?: () => void;
    isHeaderFixed?: boolean;
    parallaxHeight?: number;
    useNativeDriver?: boolean;
    scrollableComponent?: () => JSX.Element;
    isBackgroundScalable?: boolean;
    headerBackgroundColor?: string;
    contentContainerStyle?: ViewStyle;
    headerFixedTransformY?: number;
    onChangeHeaderVisibility?: () => void;
    renderParallaxBackground?: ({
      width,
      height,
      animatedValue,
    }: {
      width: number;
      height: number;
      animatedValue: any;
    }) => JSX.Element;
    renderBackgroundPlaceholder?: ({
      height,
      animatedValue,
    }: {
      height: number;
      animatedValue: any;
    }) => JSX.Element;
    fadeOutParallaxBackground?: boolean;
    fadeOutParallaxForeground?: boolean;
    backgroundScale?: number;
    backgroundScaleOrigin?: "center" | "top";
    parallaxBackgroundScrollSpeed?: number;
    parallaxForegroundScrollSpeed?: number;
  }>;
  export default ParallaxScroll;
}
