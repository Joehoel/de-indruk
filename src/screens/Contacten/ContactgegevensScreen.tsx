import "react-native-get-random-values";

import { randUser } from "@ngneat/falso";
import { Avatar, Box, Text } from "native-base";
import { AlphabetList } from "react-native-section-alphabet-list";
import { GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";
import SearchLayout from "@layout/SearchLayout";
import { useState } from "react";

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
                    <Box
                        style={{
                            alignSelf: "flex-start",
                            backgroundColor: "blue",
                            paddingLeft: 15,
                            paddingRight: 10,
                            paddingVertical: 5,
                            borderTopRightRadius: 7,
                            borderBottomRightRadius: 7,
                            marginVertical: 10,
                        }}
                    >
                        <Text style={{ color: "white" }}>{title}</Text>
                    </Box>
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
