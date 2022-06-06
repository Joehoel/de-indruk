/* eslint-disable react/style-prop-object */
import { useTheme, theme as reTheme } from "@lib/theme";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { ThemeProvider as RestyleProvider } from "@shopify/restyle";
import { StatusBar, setStatusBarBackgroundColor } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const theme = useTheme();

  if (!isLoadingComplete) {
    return null;
  }

  const navigationTheme: typeof DefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.white,
      primary: theme.colors.primary,
    },
  };

  return (
    <RestyleProvider theme={reTheme}>
      <ThemeProvider>
        <NavigationContainer theme={navigationTheme}>
          <SafeAreaProvider>
            <BottomTabNavigator />
            <StatusBar style="dark" animated />
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeProvider>
    </RestyleProvider>
  );
}
