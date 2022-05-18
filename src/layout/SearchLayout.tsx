import spacing from "@constants/spacing";
import { makeStyles } from "@lib/theme";
import { useThemeMode } from "@rneui/themed";
import type { ReactNode, SetStateAction } from "react";
import { Platform, StyleSheet, View } from "react-native";
import SearchBar from "react-native-platform-searchbar";

const useStyles = makeStyles(theme => ({
    search: {
        padding: spacing.sm,
    },
    cancel: {
        color: theme.colors.primary,
    },
}));

interface SearchLayoutProps {
    children: ReactNode;
    setQuery: React.Dispatch<SetStateAction<string>>;
    query: string;
}

export default function SearchLayout({
    children,
    setQuery,
    query,
}: SearchLayoutProps) {
    const styles = useStyles();

    return (
        <View>
            <SearchBar
                value={query}
                placeholder="Zoek..."
                onChangeText={(text: string) => setQuery(text)}
                style={styles.search}
                cancelTextStyle={styles.cancel}
            />
            {children}
        </View>
    );
}
