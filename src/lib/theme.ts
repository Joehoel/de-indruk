import { createTheme, useTheme as useReTheme } from "@shopify/restyle";
import type { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import palette from "./palette";

const { width } = Dimensions.get("screen");

export const isSmall = width <= 375;

export type Theme = typeof theme;

export const theme = createTheme({
  breakpoints: {},
  colors: {
    ...palette,
    text: palette.darkBlue1,
    background: palette.white,
  },
  borderRadii: {
    none: 0,
    xs: 15,
    sm: 21,
    md: 24,
  },
  spacing: {
    none: 0,
    xs: 15,
    sm: 21,
    md: 24,
  },
  zIndices: {},
  cardVariants: {},
  textVariants: {
    defaults: {
      color: "text",
    },
    semibold: {
      fontFamily: "Gilroy-SemiBold",
      color: "text",
    },
    bold: {
      fontFamily: "Gilroy-Bold",
      color: "text",
    },
    title: {
      fontSize: 32,
      lineHeight: 40,
      fontFamily: "Gilroy-SemiBold",
      color: "text",
    },
    h1: {
      fontSize: 40,
      fontFamily: "Gilroy-Medium",
      color: "text",
    },
    h2: {
      fontSize: 26,
      fontFamily: "Gilroy-SemiBold",
      lineHeight: 32,
    },
    h3: {
      fontSize: 22,
      lineHeight: 27,
      fontFamily: "Gilroy-SemiBold",
      color: "text",
    },
    h4: {
      fontSize: 18,
      fontFamily: "Gilroy-SemiBold",
      lineHeight: 18,
      color: "text",
    },
    h5: {
      fontSize: 18,
      fontFamily: "Gilroy-Bold",
      lineHeight: 18,
    },
    h6: {
      fontFamily: "Gilroy-Medium",
      fontSize: 18,
      lineHeight: 18,
    },
    muted: {
      fontFamily: "Gilroy-SemiBold",
      fontSize: 15,
      lineHeight: 18,
      color: "text",
      opacity: 0.3,
    },
    body: {
      fontFamily: "SFNS-Display-Regular",
      fontSize: 18,
      lineHeight: 32,
      color: "body",
    },
    back: {
      fontFamily: "Gilroy-SemiBold",
      fontSize: 16,
      lineHeight: 20,
      color: "white",
    },
    // defaults: {
    //     color: "black",
    // },
    // // bold: {},
    // body: {
    //     fontSize: 16,
    // },
    // small: {
    //     fontSize: 14,
    //     color: "primary",
    // },
    // h2: {
    //     fontSize: 23,
    //     fontWeight: "bold",
    //     color: "primary",
    // },
    // h4: {
    //     fontWeight: "bold",
    //     fontSize: 14,
    //     color: "primary",
    // },
  },
});

// export const darkTheme: Theme = {
//     ...theme,
//     colors: {
//         ...theme.colors,
//         text: palette.white,
//         background: palette.black,
//     },
// };
export const useTheme = () => useReTheme<Theme>();

// type NamedStyles<T> = {
//     [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
// };

export type Color = { [C in keyof Theme["colors"]]: string };

export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles: (theme: Theme) => T | T
  ) =>
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
