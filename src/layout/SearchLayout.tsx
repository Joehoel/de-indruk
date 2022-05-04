import { SearchBar, useThemeMode } from "@rneui/themed";
import { ReactNode, SetStateAction } from "react";
import { Platform, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    search: {},
});

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
    const mode = useThemeMode();

    return (
        <View>
            <SearchBar
                platform={Platform.OS === "ios" ? "ios" : "android"}
                lightTheme={mode === "light"}
                value={query}
                placeholder="Zoek..."
                onChangeText={(text: string) => setQuery(text)}
                style={styles.search}
            />
            {children}
        </View>
    );
}
