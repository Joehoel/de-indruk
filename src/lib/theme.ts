import { createTheme, useTheme as useReTheme } from "@shopify/restyle";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Dimensions } from "react-native";
import palette from "./palette";

const { width } = Dimensions.get("screen");

export const isSmall = width <= 375;

export type Theme = typeof theme;

export const theme = createTheme({
    breakpoints: {},
    colors: {
        ...palette,
        text: palette.black,
        background: palette.lightGray,
    },
    borderRadii: {
        none: 0,
        xs: 5,
    },
    spacing: {
        none: 0,
        xs: 5,
        sm: 10,
        md: 15,
        lg: 20,
        xl: 40,
        "2xl": 80,
        "3xl": 100,
    },
    zIndices: {},
    textVariants: {
        defaults: {},
        // bold: {},
        body: {
            fontSize: 16,
        },
        small: {
            fontSize: 14,
            color: "primary",
        },
        h2: {
            fontSize: 23,
            fontWeight: "bold",
            color: "primary",
        },
    },
});

export const darkTheme: Theme = {
    ...theme,
    colors: {
        ...theme.colors,
        text: palette.white,
        background: palette.black,
    },
};
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
    <T extends NamedStyles<T>>(styles: (theme: Theme) => NamedStyles<T>) =>
    () => {
        const currentTheme = useTheme();
        return styles(currentTheme);
    };

// import { createTheme, ThemeConsumer } from "@rneui/themed";

// const theme = createTheme({
//     lightColors: {
//         primary: "blue",
//         secondary: "#7F8CD020",
//         text: "black",
//     },
//     darkColors: {
//         text: "white",
//     },
//     Text: {
//         h4Style: {
//             fontWeight: "bold",
//         },
//     },
// });

// export default theme;
