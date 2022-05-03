import SearchLayout from "@layout/SearchLayout";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Box, FlatList, KeyboardAvoidingView, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface Item {
    date: string;
    tags: string[];
    title: string;
    icon?: string;
}

const items: Item[] = [
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
    { date: "2 mei 2022", tags: ["nieuws"], title: "Nieuwsbrief Sonneburgh april 2022" },
];

const styles = StyleSheet.create({
    search: {
        padding: 10,
    },
    item: {
        padding: 10,
    },
    content: {
        flexDirection: "column",
        flex: 1,
    },
    title: { fontWeight: "700", marginTop: 5 },
    date: {
        fontWeight: "500",
    },
});

export default function ActueelScreen() {
    const [query, setQuery] = useState<string>("");
    const [refreshing, setRefreshing] = useState(false);
    const height = useBottomTabBarHeight();

    const handleRefresh = () => {
        // TODO: Logica om nieuws op te halen
        // console.log("Refresh");
    };

    return (
        <SearchLayout query={query} setQuery={setQuery}>
            <KeyboardAvoidingView>
                <FlatList
                    data={items}
                    onRefresh={handleRefresh}
                    refreshing={refreshing}
                    keyExtractor={(item, index) => `${item.date}-${index}`}
                    contentContainerStyle={{ paddingBottom: height }}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.item}>
                            <Box style={styles.content}>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.title}>{item.title}</Text>
                            </Box>
                        </TouchableOpacity>
                    )}
                />
            </KeyboardAvoidingView>
        </SearchLayout>
    );
}
