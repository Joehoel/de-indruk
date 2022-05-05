import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@rneui/themed";
import BerichtScreen from "@screens/Actueel/BerichtScreen";
import { ActueelStackList } from "@typings/navigation";
import ActueelTabNavigator from "./ActueelTabNavigator";

const Stack = createNativeStackNavigator<ActueelStackList>();

export default function ActueelStackNavigator() {
    const { theme } = useTheme();

    return (
        <Stack.Navigator
            initialRouteName="ActueelTabs"
            screenOptions={{
                headerBackTitle: "Overzicht",
                headerTintColor: theme.colors.primary,
            }}
        >
            <Stack.Screen
                name="ActueelTabs"
                options={{ title: "Actueel" }}
                component={ActueelTabNavigator}
            />
            <Stack.Screen
                name="Bericht"
                options={{ title: "Berichten" }}
                component={BerichtScreen}
            />
        </Stack.Navigator>
    );
}
