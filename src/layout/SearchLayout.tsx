import { useThemeMode } from "@rneui/themed";
import { ReactNode, SetStateAction } from "react";
import { Platform, StyleSheet, View } from "react-native";
import SearchBar from "react-native-platform-searchbar";

const styles = StyleSheet.create({
    search: {
        padding: 10,
    },
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
                value={query}
                placeholder="Zoek..."
                onChangeText={(text: string) => setQuery(text)}
                style={styles.search}
            />
            {children}
        </View>
    );
}
