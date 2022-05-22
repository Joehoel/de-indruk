import BerichtCard from "@components/BerichtCard";
import Box from "@components/Box";
import Card from "@components/Card";
import Text from "@components/Text";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
    faBell,
    faCircle,
    faMessage,
    faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";
import { Avatar, Badge } from "@rneui/themed";
import type { Bericht } from "@typings";
import { useMemo, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const useStyles = makeStyles(theme => ({
    container: {
        paddingHorizontal: theme.spacing.md,
        // paddingBottom: theme.spacing.md,
    },
    header: {
        marginBottom: theme.spacing.xs,
        backgroundColor: theme.colors.background,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    hello: {
        marginBottom: 29,
    },
    latest: {
        marginTop: 44,
    },
    berichten: { marginTop: 18 },
}));
//  marginBottom = "xs";
//  alignItems = "center";
//  flexDirection = "row";
//  justifyContent = "flex-end";

const berichten: Bericht[] = [
    {
        title: "Mountainbike 12 mei",
        date: new Date(),
        image: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwb767bf6f/images/plp/Mountain/canyon-trail-bikes-world-1.jpg?sw=632&sh=650&sm=cut",
    },
    {
        title: "Mountainbike 12 mei",
        date: new Date(),
        image: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwb767bf6f/images/plp/Mountain/canyon-trail-bikes-world-1.jpg?sw=632&sh=650&sm=cut",
    },
    {
        title: "Mountainbike 12 mei",
        date: new Date(),
        image: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwb767bf6f/images/plp/Mountain/canyon-trail-bikes-world-1.jpg?sw=632&sh=650&sm=cut",
    },
    {
        title: "Mountainbike 12 mei",
        date: new Date(),
        image: "https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Library-Sites-canyon-shared/default/dwb767bf6f/images/plp/Mountain/canyon-trail-bikes-world-1.jpg?sw=632&sh=650&sm=cut",
    },
];

export default function DashboardScreen() {
    const [height, setHeight] = useState<number>();

    const styles = useStyles();
    const theme = useTheme();

    const spacing = 16;
    const columns = 2;

    const cards: { text: string; icon: IconProp; color: string }[] = useMemo(
        () => [
            { text: "Nieuws", icon: faMessage, color: theme.colors.primary },
            { text: "Collega's", icon: faCircle, color: theme.colors.tertiary },
            {
                text: "FAQ",
                icon: faQuestionCircle,
                color: theme.colors.secondary,
            },
        ],
        [theme.colors.primary, theme.colors.secondary, theme.colors.tertiary]
    );

    return (
        <ScrollView
            style={styles.container}
            // showsVerticalScrollIndicator={false}
            bounces={false}
        >
            <FlatList
                ListHeaderComponent={
                    <>
                        <SafeAreaView edges={["top"]} style={styles.header}>
                            <Box>
                                <FontAwesomeIcon
                                    icon={faBell}
                                    size={20}
                                    color={theme.colors.darkBlue2}
                                    style={{ opacity: 0.8 }}
                                />
                                <Badge
                                    value="1"
                                    containerStyle={{
                                        position: "absolute",
                                        left: 10,
                                        bottom: 10,
                                    }}
                                    badgeStyle={{
                                        backgroundColor: theme.colors.primary,
                                    }}
                                />
                            </Box>
                            <Avatar
                                containerStyle={{ marginLeft: 20 }}
                                rounded
                                size={48}
                                source={{
                                    uri: "https://avatars.githubusercontent.com/u/31251240?s=400&u=54c0df6f19ffa5e937cd0d4dce274c280a402d61&v=4",
                                }}
                            />
                        </SafeAreaView>
                        <Box style={styles.hello}>
                            <Text variant="h1">
                                Hello,{"\n"}
                                <Text variant="semibold">Andreas 👋🏻</Text>
                            </Text>
                        </Box>
                    </>
                }
                ListFooterComponent={
                    <Box style={styles.latest}>
                        <Text variant="h2">Laatste Berichten</Text>

                        <Box style={styles.berichten}>
                            {berichten?.map(bericht => (
                                <BerichtCard
                                    key={bericht.title}
                                    bericht={bericht}
                                />
                            ))}
                        </Box>
                    </Box>
                }
                scrollEnabled={false}
                numColumns={columns}
                data={cards}
                keyExtractor={(item, index) => `${item.text}-${index}`}
                renderItem={({ item, index }) => {
                    return (
                        <Card
                            text={item.text}
                            color={item.color}
                            icon={item.icon}
                            style={{
                                marginBottom: spacing,
                                marginLeft: index % columns !== 0 ? spacing : 0,
                            }}
                        />
                    );
                }}
            />
        </ScrollView>
    );
}
