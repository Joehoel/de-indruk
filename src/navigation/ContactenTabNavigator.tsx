import { useTheme } from "@lib/theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ContactgegevensScreen from "@screens/Contacten/ContactgegevensScreen";
import JubileaScreen from "@screens/Contacten/JubileaScreen";
import type { ContactenTabList } from "@typings/navigation";

const Tab = createMaterialTopTabNavigator<ContactenTabList>();

export default function ContactenTabNavigator() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: "none",
                },
                tabBarIndicatorStyle: {
                    borderBottomColor: theme.colors.primary,
                    borderBottomWidth: 2,
                },
                tabBarStyle: {
                    backgroundColor: theme.colors.secondary,
                },
                tabBarActiveTintColor: theme.colors.primary,
            }}
        >
            <Tab.Screen
                name="Contactgegevens"
                component={ContactgegevensScreen}
            />
            <Tab.Screen name="Jubilea" component={JubileaScreen} />
        </Tab.Navigator>
    );
}
