import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ActueelScreen from "@screens/Actueel/ActueelScreen";
import BijeenkomstenScreen from "@screens/Actueel/BijeenkomstenScreen";
import type { ActueelTabList } from "@typings/navigation";

const Tab = createMaterialTopTabNavigator<ActueelTabList>();

export default function ActueelStackNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: "none",
                },
            }}
        >
            <Tab.Screen name="ActueelStack" component={ActueelStackNavigator} />
            <Tab.Screen name="Bijeenkomsten" component={BijeenkomstenScreen} />
        </Tab.Navigator>
    );
}
