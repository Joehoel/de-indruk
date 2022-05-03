import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AskScreen from "@screens/Faq/AskScreen";
import FaqScreen from "@screens/Faq/FaqScreen";

export type FaqTabList = {
    Faq: undefined;
    Ask: undefined;
};

const Tab = createMaterialTopTabNavigator<FaqTabList>();

export default function FaqTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: "none",
                },
            }}
        >
            <Tab.Screen
                name="Faq"
                options={{ title: "Veelgestelde vragen" }}
                component={FaqScreen}
            />
            <Tab.Screen
                name="Ask"
                options={{ title: "Zelf een vraag stellen" }}
                component={AskScreen}
            />
        </Tab.Navigator>
    );
}
