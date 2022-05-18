import { Entypo } from "@expo/vector-icons";
import { makeStyles, useTheme } from "@lib/theme";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfielBewerkenScreen from "@screens/Profiel/ProfielBewerkenScreen";
import ProfielScreen from "@screens/Profiel/ProfielScreen";
import type {
    ProfielStackList,
    ProfielStackNavigationProp,
} from "@typings/navigation";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";

const useStyles = makeStyles(theme => ({
    menu: { marginTop: theme.spacing.xl },
}));

const Stack = createNativeStackNavigator<ProfielStackList>();

export default function ProfielStackNavigator() {
    const navigation = useNavigation<ProfielStackNavigationProp>();
    const styles = useStyles();

    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const hideMenu = () => setMenuOpen(false);

    const showMenu = () => setMenuOpen(true);

    const edit = () => {
        navigation.navigate("ProfielBewerken");
        hideMenu();
    };

    const logout = () => {
        hideMenu();
    };

    return (
        <Stack.Navigator
            initialRouteName="Profiel"
            screenOptions={{
                headerTintColor: theme.colors.primary,
            }}
        >
            <Stack.Screen
                name="Profiel"
                component={ProfielScreen}
                options={{
                    headerRight: () => (
                        <Menu
                            style={styles.menu}
                            visible={menuOpen}
                            anchor={
                                <TouchableOpacity onPress={showMenu}>
                                    <Entypo
                                        name="dots-three-vertical"
                                        color={theme.colors.primary}
                                        size={18}
                                    />
                                </TouchableOpacity>
                            }
                            onRequestClose={hideMenu}
                        >
                            <MenuItem onPress={edit}>Profiel bewerken</MenuItem>
                            <MenuItem onPress={logout}>Uitloggen</MenuItem>
                        </Menu>
                    ),
                }}
            />
            <Stack.Screen
                name="ProfielBewerken"
                options={{ title: "Profiel bewerken" }}
                component={ProfielBewerkenScreen}
            />
        </Stack.Navigator>
    );
}
