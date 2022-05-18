import Box from "@components/Box";
import Input from "@components/Input";
import SpinnerButton from "@components/SpinnerButton";
import Text from "@components/Text";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { makeStyles, useTheme } from "@lib/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "@rneui/themed";
import { Message } from "@services/Message";
import type { ProfielStackNavigationProp } from "@typings/navigation";
import { useState } from "react";
import { ScrollView, TextInput } from "react-native";

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
    textarea: {
        minHeight: 100,
        textAlignVertical: "top",
    },
    datepicker: {
        flex: 1,
    },
    save: {
        margin: theme.spacing.md,
    },
}));

export default function ProfielBewerkenScreen() {
    const navigation = useNavigation<ProfielStackNavigationProp>();
    const [loading, setLoading] = useState(false);

    const styles = useStyles();
    const theme = useTheme();

    const save = () => {
        setLoading(true);
        navigation.navigate("Profiel");
        Message.success("Profiel bijgewerkt");
    };

    return (
        <ScrollView>
            <Box style={styles.hero}>
                <Avatar
                    rounded
                    size={100}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/31251240?s=400&u=54c0df6f19ffa5e937cd0d4dce274c280a402d61&v=4",
                    }}
                >
                    <Avatar.Accessory size={25} />
                </Avatar>
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
                    <Input
                        placeholder="06 12345678"
                        dataDetectorTypes="phoneNumber"
                        autoCompleteType="tel"
                        value="06 24852983"
                        keyboardType="phone-pad"
                    />
                </Box>
                <Box style={styles.item}>
                    <Box style={styles.icon}>
                        <Feather name="mail" color="white" size={18} />
                    </Box>
                    <Input
                        placeholder="john@example.com"
                        dataDetectorTypes="all"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        value="jmkuijper@outlook.com"
                    />
                </Box>
                <Box style={styles.item}>
                    <Box style={styles.icon}>
                        <FontAwesome
                            name="birthday-cake"
                            color="white"
                            size={18}
                        />
                    </Box>
                    <Box style={styles.datepicker}>
                        <DateTimePicker
                            value={new Date(2003, 0, 19)}
                            mode="date"
                            display="spinner"
                            textColor={theme.colors.text}
                        />
                    </Box>
                </Box>
                <Box style={styles.item}>
                    <Box style={styles.icon}>
                        <AntDesign name="contacts" color="white" size={18} />
                    </Box>
                    <Input
                        numberOfLines={10}
                        multiline
                        placeholder="Biografie..."
                        underlineColorAndroid="transparent"
                        value="19, HBO-ICT"
                    />
                </Box>
                <SpinnerButton
                    isLoading={loading}
                    onPress={save}
                    text="Opslaan"
                    style={styles.save}
                />
            </Box>
        </ScrollView>
    );
}
