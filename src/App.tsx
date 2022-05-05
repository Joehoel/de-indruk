/* eslint-disable react/style-prop-object */
import useColorScheme from "@hooks/useColorScheme";
import theme from "@lib/theme";
import BottomTabNavigator from "@navigation/BottomTabNavigator";
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    // const loading = useCachedResources();
    const colorScheme = useColorScheme();

    // if (loading) {
    //     return null;
    // }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer
                theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <SafeAreaProvider>
                    <BottomTabNavigator />
                    <StatusBar style="auto" />
                </SafeAreaProvider>
            </NavigationContainer>
        </ThemeProvider>
    );
}
