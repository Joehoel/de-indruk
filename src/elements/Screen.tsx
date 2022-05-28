import { makeStyles } from "@lib/theme";
import type { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "./Box";

const useStyles = makeStyles(theme => ({
    screen: {
        padding: theme.spacing.md,
    },
}));

interface ScreenProps {
    children?: ReactNode;
}

export default function Screen({ children }: ScreenProps) {
    const styles = useStyles();

    return <Box style={styles.screen}>{children}</Box>;
}
