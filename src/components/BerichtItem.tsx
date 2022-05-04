import { useNavigation } from "@react-navigation/native";
import { Text } from "@rneui/themed";
import type { Item } from "@typings/Item";
import type { BerichtScreenNavigationProp } from "@typings/navigation";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
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

interface BerichtItemProps {
    item: Item;
}

export default function BerichtItem({ item }: BerichtItemProps) {
    const navigation = useNavigation<BerichtScreenNavigationProp>();

    const handlePress = () => {
        navigation.navigate("Bericht", { item });
    };

    return (
        <TouchableOpacity style={styles.item} onPress={handlePress}>
            <View style={styles.content}>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
