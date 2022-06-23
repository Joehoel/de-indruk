import { BackButton } from "@components";
import type { StackNavigationOptions } from "@react-navigation/stack";

export const BERICHT_SCREEN_OPTIONS: StackNavigationOptions = {
  // headerShadowVisible: false,
  // headerTransparent: true,
  headerTitle: "",

  // headerBlurEffect: "systemUltraThinMaterialDark",
  headerLeft: ({ label, canGoBack }) =>
    canGoBack && <BackButton label={label} />,
};
