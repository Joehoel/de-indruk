import TabItem from "@components/TabItem";
import {
  faBullhorn,
  faCommentsAlt,
  faGrid2,
  faUsers,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useTheme } from "@lib/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "@screens/DashboardScreen";
import NieuwsScreen from "@screens/NieuwsScreen";
import type { BottomTabList } from "@typings/navigation";

const Tab = createBottomTabNavigator<BottomTabList>();

const ICON_SIZE = 22;

export default function BottomTabNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="ActueelStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: theme.spacing.md,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabItem focused={focused}>
              <FontAwesomeIcon icon={faGrid2} size={ICON_SIZE} color={color} />
            </TabItem>
          ),
        }}
        component={DashboardScreen}
      />
      <Tab.Screen
        name="Nieuws"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabItem focused={focused}>
              <FontAwesomeIcon
                icon={faBullhorn}
                size={ICON_SIZE}
                color={color}
              />
            </TabItem>
          ),
        }}
        component={NieuwsScreen}
      />
      <Tab.Screen
        name="Collegas"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabItem focused={focused}>
              <FontAwesomeIcon icon={faUsers} size={ICON_SIZE} color={color} />
            </TabItem>
          ),
        }}
        component={NieuwsScreen}
      />
      <Tab.Screen
        name="Berichten"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabItem focused={focused}>
              <FontAwesomeIcon
                icon={faCommentsAlt}
                size={ICON_SIZE}
                color={color}
              />
            </TabItem>
          ),
        }}
        component={NieuwsScreen}
      />
      {/* <Tab.Screen
                name="ActueelStack"
                options={{
                    title: "Actueel",
                    headerShown: false,
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
                name="ProfielStack"
                options={{
                    headerShown: false,
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
                component={ProfielStackNavigator}
            /> */}
    </Tab.Navigator>
  );
}
