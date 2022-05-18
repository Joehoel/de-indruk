import Box from "@components/Box";
import Card from "@components/Card";
import Screen from "@components/Screen";
import Text from "@components/Text";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
    faCircle,
    faMessage,
    faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "@lib/theme";
import { Avatar } from "@rneui/themed";
import { useMemo } from "react";
import { FlatList } from "react-native";

export default function DashboardScreen() {
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
        <Screen>
            <Box marginBottom="xs" alignItems="flex-end">
                <Avatar
                    rounded
                    size={48}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/31251240?s=400&u=54c0df6f19ffa5e937cd0d4dce274c280a402d61&v=4",
                    }}
                />
            </Box>

            <Box>
                <Text variant="h1">
                    Hello,{"\n"}
                    <Text variant="semibold">Andreas 👋🏻</Text>
                </Text>
            </Box>

            <FlatList
                contentContainerStyle={{
                    marginTop: 29,
                }}
                numColumns={columns}
                data={cards}
                renderItem={({ item, index }) => {
                    return (
                        <Card
                            key={`${item.text}-${index}`}
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
        </Screen>
    );
}
