import "react-native-get-random-values";

import { randUser } from "@ngneat/falso";
import { AlphabetList } from "react-native-section-alphabet-list";
import type { GestureResponderEvent } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import SearchLayout from "@layout/SearchLayout";
import { useState } from "react";
import { Text, useTheme } from "@rneui/themed";

const contacten = randUser({ length: 200 }).map(user => ({
    key: user.id,
    value: `${user.firstName} ${user.lastName}`,
}));

const styles = StyleSheet.create({
    item: {
        paddingLeft: 25,
        paddingVertical: 10,
    },
});

export default function ContactgegevensScreen() {
    const { theme } = useTheme();

    const [query, setQuery] = useState<string>("");

    const handlePress = (e: GestureResponderEvent) => {
        // TODO: Make this
    };

    return (
        <SearchLayout query={query} setQuery={setQuery}>
            <AlphabetList
                scrollEventThrottle={16}
                data={contacten}
                renderCustomSectionHeader={({ title }) => (
                    <View
                        style={{
                            alignSelf: "flex-start",
                            backgroundColor: theme.colors.primary,
                            paddingLeft: 15,
                            paddingRight: 10,
                            paddingVertical: 5,
                            borderTopRightRadius: 7,
                            borderBottomRightRadius: 7,
                            marginVertical: 10,
                        }}
                    >
                        <Text style={{ color: theme.colors.white }}>
                            {title}
                        </Text>
                    </View>
                )}
                renderCustomItem={item => (
                    <TouchableOpacity onPress={handlePress} style={styles.item}>
                        {/* <Avatar source={ite} /> */}
                        <Text>{item.value}</Text>
                    </TouchableOpacity>
                )}
            />
        </SearchLayout>
    );
}
