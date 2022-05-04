import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import theme from "@lib/theme";
import useCachedResources from "@hooks/useCachedResources";
import useColorScheme from "@hooks/useColorScheme";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
    const loading = useCachedResources();
    const colorScheme = useColorScheme();

    if (loading) {
        return null;
    }

    console.log("Hello World");

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer
                theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <BottomTabNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}
