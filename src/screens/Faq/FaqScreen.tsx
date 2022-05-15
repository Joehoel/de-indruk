import Question from "@components/Question";
import SearchLayout from "@layout/SearchLayout";
import { makeStyles, Text, useTheme } from "@rneui/themed";
import type { QuestionType } from "@typings";
import React, { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { FlatList, TouchableOpacity, View } from "react-native";
import spacing from "@constants/spacing";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import Separator from "@components/Separator";

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
    },
    content: { paddingBottom: spacing.lg },
    container: {
        paddingHorizontal: spacing.md,
        height: "100%",
    },
    sectionContainer: {
        borderBottomColor: theme.colors?.grey4,
        borderBottomWidth: 2,
    },
}));

export default function FaqScreen() {
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
                            <Feather name="minus" size={20} />
                        ) : (
                            <Feather name="plus" size={20} />
                        )}
                    </View>
                )}
                renderContent={({ answer }) => (
                    <View style={styles.content}>
                        <Text>{answer}</Text>
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
