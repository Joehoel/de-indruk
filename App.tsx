import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import { theme } from "./src/theme";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
