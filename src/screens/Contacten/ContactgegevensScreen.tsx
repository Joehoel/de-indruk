import "react-native-get-random-values";

import { randUser } from "@ngneat/falso";
import { AlphabetList } from "react-native-section-alphabet-list";
import type { GestureResponderEvent } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import SearchLayout from "@layout/SearchLayout";
import { useState } from "react";
import { makeStyles } from "@lib/theme";
import Text from "@components/Text";
import Box from "@components/Box";

const contacten = randUser({ length: 200 }).map(user => ({
    key: user.id,
    value: `${user.firstName} ${user.lastName}`,
}));

const useStyles = makeStyles(theme => ({
    header: {
        alignSelf: "flex-start",
        backgroundColor: theme.colors.primary,
        paddingLeft: 15,
        paddingRight: 10,
        paddingVertical: 5,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        marginVertical: 10,
    },
    item: {
        paddingLeft: 25,
        paddingVertical: 10,
    },
}));

export default function ContactgegevensScreen() {
    const styles = useStyles();

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
                    <Box style={styles.header}>
                        <Text color="white">{title}</Text>
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
