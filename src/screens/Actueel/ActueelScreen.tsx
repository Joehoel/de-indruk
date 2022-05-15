import "react-native-get-random-values";

import BerichtItem from "@components/BerichtItem";
import SearchLayout from "@layout/SearchLayout";
import {
    randImg,
    randJobTitle,
    randPost,
    randRecentDate,
    randTextRange,
} from "@ngneat/falso";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";

const items = Array.from({ length: 20 }).map(i => ({
    date: randRecentDate().toLocaleDateString(),
    text: randTextRange({ min: 1000, max: 10000 }),
    title: randJobTitle(),
    image: randImg(),
}));

// const items: Item[] = [
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
//     {
//         date: "2 mei 2022",
//         tags: ["nieuws"],
//         title: "Nieuwsbrief Sonneburgh april 2022",
//     },
// ];

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
                    renderItem={({ item }) => <BerichtItem item={item} />}
                />
            </KeyboardAvoidingView>
        </SearchLayout>
    );
}
