import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import theme from "@lib/theme";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        </ThemeProvider>
    );
}
