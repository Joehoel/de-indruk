import { createTheme } from "@rneui/themed";

const theme = createTheme({
    lightColors: {
        primary: "blue",
        secondary: "#7F8CD020",
    },
    Text: {
        h4Style: {
            fontWeight: "bold",
            color: "blue",
        },
    },
});

export default theme;
