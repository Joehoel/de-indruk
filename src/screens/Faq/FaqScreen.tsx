import Text from "@components/Text";
import spacing from "@constants/spacing";
import { Feather } from "@expo/vector-icons";
import SearchLayout from "@layout/SearchLayout";
import { makeStyles, useTheme } from "@lib/theme";
import type { QuestionType } from "@typings";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";

const questions: QuestionType[] = [
    {
        question: "Wat gebeurt er met de AB-er op alle locaties?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius provident blanditiis velit non exercitationem iure molestiae unde, nisi saepe nesciunt facilis placeat perferendis culpa sunt eaque itaque deleniti, voluptates architecto, ad numquam nihil quibusdam nemo! Labore facere soluta obcaecati incidunt debitis necessitatibus error iste, quasi distinctio? Dolorem animi quisquam fugit.",
    },
    {
        question: "Wat gebeurt er met de AB-er op alle locaties?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius provident blanditiis velit non exercitationem iure molestiae unde, nisi saepe nesciunt facilis placeat perferendis culpa sunt eaque itaque deleniti, voluptates architecto, ad numquam nihil quibusdam nemo! Labore facere soluta obcaecati incidunt debitis necessitatibus error iste, quasi distinctio? Dolorem animi quisquam fugit.",
    },
    {
        question: "Wat gebeurt er met de AB-er op alle locaties?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius provident blanditiis velit non exercitationem iure molestiae unde, nisi saepe nesciunt facilis placeat perferendis culpa sunt eaque itaque deleniti, voluptates architecto, ad numquam nihil quibusdam nemo! Labore facere soluta obcaecati incidunt debitis necessitatibus error iste, quasi distinctio? Dolorem animi quisquam fugit.",
    },
    {
        question: "Wat gebeurt er met de AB-er op alle locaties?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius provident blanditiis velit non exercitationem iure molestiae unde, nisi saepe nesciunt facilis placeat perferendis culpa sunt eaque itaque deleniti, voluptates architecto, ad numquam nihil quibusdam nemo! Labore facere soluta obcaecati incidunt debitis necessitatibus error iste, quasi distinctio? Dolorem animi quisquam fugit.",
    },
    {
        question: "Wat gebeurt er met de AB-er op alle locaties?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius provident blanditiis velit non exercitationem iure molestiae unde, nisi saepe nesciunt facilis placeat perferendis culpa sunt eaque itaque deleniti, voluptates architecto, ad numquam nihil quibusdam nemo! Labore facere soluta obcaecati incidunt debitis necessitatibus error iste, quasi distinctio? Dolorem animi quisquam fugit.",
    },
    {
        question: "Wat gebeurt er met de AB-er op alle locaties?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius provident blanditiis velit non exercitationem iure molestiae unde, nisi saepe nesciunt facilis placeat perferendis culpa sunt eaque itaque deleniti, voluptates architecto, ad numquam nihil quibusdam nemo! Labore facere soluta obcaecati incidunt debitis necessitatibus error iste, quasi distinctio? Dolorem animi quisquam fugit.",
    },
    {
        question: "Wat gebeurt er met de AB-er op alle locaties?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius provident blanditiis velit non exercitationem iure molestiae unde, nisi saepe nesciunt facilis placeat perferendis culpa sunt eaque itaque deleniti, voluptates architecto, ad numquam nihil quibusdam nemo! Labore facere soluta obcaecati incidunt debitis necessitatibus error iste, quasi distinctio? Dolorem animi quisquam fugit.",
    },
];

const useStyles = makeStyles(theme => ({
    header: {
        paddingVertical: spacing.md,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    question: {
        fontWeight: "bold",
        fontSize: 14,
        width: "70%",
        color: theme.colors?.primary,
    },
    answer: {
        color: theme.colors.tertiary,
    },
    content: { paddingBottom: spacing.lg },
    container: {
        paddingHorizontal: spacing.md,
        height: "100%",
    },
    sectionContainer: {
        borderBottomColor: theme.colors?.tertiary,
        borderBottomWidth: 1,
    },
}));

export default function FaqScreen() {
    const theme = useTheme();
    const styles = useStyles();

    const [query, setQuery] = useState<string>("");
    const [activeSections, setActiveSections] = useState<number[]>([]);

    const handleChange = (sections: number[]) => {
        setActiveSections(sections);
    };

    return (
        <SearchLayout query={query} setQuery={setQuery}>
            <Accordion
                sections={questions}
                renderHeader={({ question }, _, active) => (
                    <View style={styles.header}>
                        <Text style={styles.question}>{question}</Text>
                        {active ? (
                            <Feather
                                name="minus"
                                size={20}
                                color={theme.colors.primary}
                            />
                        ) : (
                            <Feather
                                name="plus"
                                size={20}
                                color={theme.colors.primary}
                            />
                        )}
                    </View>
                )}
                renderContent={({ answer }) => (
                    <View style={styles.content}>
                        <Text style={styles.answer}>{answer}</Text>
                    </View>
                )}
                expandMultiple
                containerStyle={styles.container}
                activeSections={activeSections}
                onChange={handleChange}
                touchableComponent={TouchableOpacity}
                sectionContainerStyle={styles.sectionContainer}
                renderAsFlatList
            />
        </SearchLayout>
    );
}
