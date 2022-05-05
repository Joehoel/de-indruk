import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@rneui/themed";
import ActueelScreen from "@screens/Actueel/ActueelScreen";
import BijeenkomstenScreen from "@screens/Actueel/BijeenkomstenScreen";
import type { ActueelTabList } from "@typings/navigation";

const Tab = createMaterialTopTabNavigator<ActueelTabList>();

export default function ActueelTabNavigator() {
    const { theme } = useTheme();

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
                name="Actueel"
                options={{ title: "Actueel" }}
                component={ActueelScreen}
            />
            <Tab.Screen name="Bijeenkomsten" component={BijeenkomstenScreen} />
        </Tab.Navigator>
    );
}
