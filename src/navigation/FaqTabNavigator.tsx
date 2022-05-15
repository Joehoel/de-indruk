import { useTheme } from "@lib/theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AskScreen from "@screens/Faq/AskScreen";
import FaqScreen from "@screens/Faq/FaqScreen";
import type { FaqTabList } from "@typings/navigation";

const Tab = createMaterialTopTabNavigator<FaqTabList>();

export default function FaqTabNavigator() {
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
