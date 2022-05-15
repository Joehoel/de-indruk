/* eslint-disable react/style-prop-object */
import useCachedResources from "@hooks/useCachedResources";
import useColorScheme from "@hooks/useColorScheme";
import { theme, darkTheme } from "@lib/theme";
import BottomTabNavigator from "@navigation/BottomTabNavigator";
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider as RestyleProvider } from "@shopify/restyle";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    }

    return (
        <RestyleProvider theme={theme}>
            <ThemeProvider>
                <NavigationContainer>
                    <SafeAreaProvider>
                        <BottomTabNavigator />
                        <StatusBar style="auto" />
                    </SafeAreaProvider>
                </NavigationContainer>
            </ThemeProvider>
        </RestyleProvider>
    );
}
