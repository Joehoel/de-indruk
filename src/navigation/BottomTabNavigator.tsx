import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import KoppelingenScreen from "@screens/Koppelingen";
import ProfielScreen from "@screens/ProfielScherm";
import { Feather, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Avatar } from "native-base";
import ActueelStackNavigator, { ActueelTabList } from "./ActueelTabNavigator";
import ContactenTabNavigator, { ContactenTabList } from "./ContactenTabNavigator";
import FaqTabNavigator, { FaqTabList } from "./FaqTabNavigator";

export type BottomTabList = {
    ActueelTabs: NavigatorScreenParams<ActueelTabList> | undefined;
    ContactenTabs: NavigatorScreenParams<ContactenTabList> | undefined;
    FaqTabs: NavigatorScreenParams<FaqTabList>;
    Koppelingen: undefined;
    Profiel: undefined;
};

const Tab = createBottomTabNavigator<BottomTabList>();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator initialRouteName="ActueelTabs" screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen
                name="ActueelTabs"
                options={{
                    title: "Actueel",
                    tabBarIcon: () => <FontAwesome name="newspaper-o" size={25} />,
                }}
                component={ActueelStackNavigator}
            />
            <Tab.Screen
                name="ContactenTabs"
                options={{
                    title: "Contacten",
                    tabBarIcon: () => <Feather name="users" size={25} />,
                }}
                component={ContactenTabNavigator}
            />
            <Tab.Screen
                name="FaqTabs"
                options={{
                    title: "Faq",
                    tabBarIcon: () => <Ionicons name="chatbox-ellipses-outline" size={25} />,
                }}
                component={FaqTabNavigator}
            />
            <Tab.Screen
                name="Koppelingen"
                options={{
                    title: "Koppelingen",
                    tabBarIcon: () => <Ionicons name="md-git-network-outline" size={25} />,
                }}
                component={KoppelingenScreen}
            />
            <Tab.Screen
                name="Profiel"
                options={{
                    title: "Mijn ...",
                    tabBarIcon: () => (
                        <Avatar
                            source={{
                                uri: "https://avatars.githubusercontent.com/u/31251240?s=400&u=54c0df6f19ffa5e937cd0d4dce274c280a402d61&v=4",
                            }}
                            width={25}
                            height={25}
                        />
                    ),
                }}
                component={ProfielScreen}
            />
        </Tab.Navigator>
    );
}
