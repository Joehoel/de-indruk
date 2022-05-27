/* eslint-disable react/style-prop-object */
import useCachedResources from "@hooks/useCachedResources";
import { useTheme, theme as reTheme } from "@lib/theme";
import BottomTabNavigator from "@navigation/BottomTabNavigator";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { ThemeProvider as RestyleProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
            <StatusBar
              //   style="dark"
              translucent
              backgroundColor={theme.colors.background}
            />
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeProvider>
    </RestyleProvider>
  );
}
