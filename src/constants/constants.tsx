import { BackButton } from "@components";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const BERICHT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerTransparent: true,
  headerTitle: "",
  headerBlurEffect: "systemUltraThinMaterialDark",
  headerBackTitle: "Dashboard",
  headerLeft: ({ label, canGoBack }) =>
    canGoBack && <BackButton label={label} />,
};
