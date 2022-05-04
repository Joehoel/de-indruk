import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ActueelScreen from "@screens/Actueel/ActueelScreen";
import BerichtScreen from "@screens/Actueel/BerichtScreen";
import type { ActueelStackNavigatorList } from "@typings/navigation";

const Stack = createNativeStackNavigator<ActueelStackNavigatorList>();

export default function ActueelStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Actueel">
            <Stack.Screen name="Actueel" component={ActueelScreen} />
            <Stack.Screen name="Bericht" component={BerichtScreen} />
        </Stack.Navigator>
    );
}
