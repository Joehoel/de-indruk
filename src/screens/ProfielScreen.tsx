import Box from "@components/Box";
import Text from "@components/Text";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { makeStyles } from "@lib/theme";
import { Avatar } from "@rneui/themed";
import type { ReactNode } from "react";

const useStyles = makeStyles(theme => ({
    hero: {
        alignItems: "center",
        marginVertical: theme.spacing.lg,
    },
    name: {
        marginTop: theme.spacing.md,
    },
    subtitle: {
        marginTop: theme.spacing.xs,
    },
    icon: {
        width: 35,
        height: 35,
        backgroundColor: theme.colors?.primary,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginRight: theme.spacing.md,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: theme.spacing.md,
        borderBottomColor: theme.colors.gray,
        borderBottomWidth: 2,
        paddingVertical: theme.spacing.sm,
    },
}));

export default function ProfielScreen() {
    const styles = useStyles();

    return (
        <Box>
            <Box style={styles.hero}>
                <Avatar
                    rounded
                    size={100}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/31251240?s=400&u=54c0df6f19ffa5e937cd0d4dce274c280a402d61&v=4",
                    }}
                />
                <Text variant="h2" style={styles.name}>
                    Joel Kuijper
                </Text>
                <Text variant="small" style={styles.subtitle}>
                    Developer
                </Text>
            </Box>
            <Box>
                <Box style={styles.item}>
                    <Box style={styles.icon}>
                        <FontAwesome name="phone" color="white" size={18} />
                    </Box>
                    <Text variant="small">0624852983</Text>
                </Box>
            </Box>
        </Box>
    );
}
