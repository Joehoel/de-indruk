import Koppeling from "@components/Koppeling";
import Separator from "@components/Separator";
import spacing from "@constants/spacing";
import { makeStyles } from "@lib/theme";
import type { KoppelingType } from "@typings";
import { FlatList, View } from "react-native";

const koppelingen: KoppelingType[] = [
    {
        title: "youForce",
        description: "Salarisadministratie & Rooster",
        url: "https://example.com",
    },
    {
        title: "Sonneburgh",
        description: "Wie, wat & waar over Sonneburgh",
        url: "https://example.com",
    },
    {
        title: "Werken bij Sonneburgh",
        description: "Vacatures voor medewerkers & vrijwilligers",
        url: "https://example.com",
    },
    {
        title: "Handboek",
        description: "Sonneburgh intranet",
        url: "https://example.com",
    },
];

export default function KoppelingenScreen() {
    return (
        <FlatList
            data={koppelingen}
            keyExtractor={item => `${item.title}`}
            renderItem={({ item }) => <Koppeling koppeling={item} />}
            ItemSeparatorComponent={() => <Separator />}
        />
    );
}