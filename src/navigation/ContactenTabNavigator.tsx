import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ContactgegevensScreen from "@screens/Contacten/ContactgegevensScreen";
import JubileaScreen from "@screens/Contacten/JubileaScreen";

export type ContactenTabList = {
    Contactgegevens: undefined;
    Jubilea: undefined;
};

const Tab = createMaterialTopTabNavigator<ContactenTabList>();

export default function ContactenTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: "none",
                },
            }}
        >
            <Tab.Screen name="Contactgegevens" component={ContactgegevensScreen} />
            <Tab.Screen name="Jubilea" component={JubileaScreen} />
        </Tab.Navigator>
    );
}
