import { DefaultNavigatorOptions, DefaultRouterOptions } from "@react-navigation/native";
import { extendTheme } from "native-base";

export const theme = extendTheme({
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
