import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import Navigator from "./src/navigation/Navigator";

export default function App() {
    const theme = extendTheme({
        colors: {
            white: "#ffffff",
            whiteTint: "#fefefe",
            lightGray: "#ccc",
            yellow: "#FBC000",
            mudYellow: "#666804",
            yellowTint: "#EAEB5E",
            purple: "#5641BE",
            lightPurple: "#EEECF8",
            red: "#FF0000",
            lightBlue: "#2f95dc",
        },
    });

    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
