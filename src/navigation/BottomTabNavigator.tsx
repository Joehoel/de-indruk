import TabItem from "@components/TabItem";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar, useTheme } from "@rneui/themed";
import KoppelingenScreen from "@screens/Koppelingen";
import ProfielScreen from "@screens/ProfielScherm";
import type { BottomTabList } from "@typings/navigation";
import { View } from "react-native";
import ActueelStackNavigator from "./ActueelTabNavigator";
import ContactenTabNavigator from "./ContactenTabNavigator";
import FaqTabNavigator from "./FaqTabNavigator";

const Tab = createBottomTabNavigator<BottomTabList>();

export default function BottomTabNavigator() {
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="ActueelTabs"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: theme.colors.black,
            }}
        >
            <Tab.Screen
                name="ActueelTabs"
                options={{
                    title: "Actueel",
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabItem focused={focused}>
                            <FontAwesome
                                name="newspaper-o"
                                size={size}
                                color={color}
                            />
                        </TabItem>
                    ),
                }}
                component={ActueelStackNavigator}
            />
            <Tab.Screen
                name="ContactenTabs"
                options={{
                    title: "Contacten",
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabItem focused={focused}>
                            <Feather name="users" size={size} color={color} />
                        </TabItem>
                    ),
                }}
                component={ContactenTabNavigator}
            />
            <Tab.Screen
                name="FaqTabs"
                options={{
                    title: "Faq",
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabItem focused={focused}>
                            <Ionicons
                                name="chatbox-ellipses-outline"
                                size={size}
                                color={color}
                            />
                        </TabItem>
                    ),
                }}
                component={FaqTabNavigator}
            />
            <Tab.Screen
                name="Koppelingen"
                options={{
                    title: "Koppelingen",
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabItem focused={focused}>
                            <Ionicons
                                name="md-git-network-outline"
                                size={size}
                                color={color}
                            />
                        </TabItem>
                    ),
                }}
                component={KoppelingenScreen}
            />
            <Tab.Screen
                name="Profiel"
                options={{
                    title: "Mijn ...",
                    tabBarIcon: ({ focused, color, size }) => (
                        <View
                            style={{
                                borderWidth: 3,
                                borderRadius: 50,
                                borderColor: focused ? "blue" : color,
                            }}
                        >
                            <Avatar
                                rounded
                                source={{
                                    uri: "https://avatars.githubusercontent.com/u/31251240?s=400&u=54c0df6f19ffa5e937cd0d4dce274c280a402d61&v=4",
                                }}
                            />
                        </View>
                    ),
                }}
                component={ProfielScreen}
            />
        </Tab.Navigator>
    );
}
