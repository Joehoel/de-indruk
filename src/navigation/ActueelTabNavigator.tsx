import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ActueelScreen from "@screens/Actueel/ActueelScreen";
import BijeenkomstenScreen from "@screens/Actueel/BijeenkomstenScreen";

export type ActueelTabList = {
    Actueel: undefined;
    Bijeenkomsten: undefined;
};

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
            <Tab.Screen name="Actueel" component={ActueelScreen} />
            <Tab.Screen name="Bijeenkomsten" component={BijeenkomstenScreen} />
        </Tab.Navigator>
    );
}
