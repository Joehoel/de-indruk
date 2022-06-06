/* eslint-disable react/style-prop-object */
import { BERICHT_SCREEN_OPTIONS } from "@constants/constants";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BerichtScreen, DashboardScreen } from "@screens";
import type { DashboardStackList } from "@typings/navigation";

const Stack = createNativeStackNavigator<DashboardStackList>();

const OPTIONS: NativeStackNavigationOptions = { headerShown: false };

export default function DashboardStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={OPTIONS}
        component={DashboardScreen}
      />
      <Stack.Screen
        name="Bericht"
        options={BERICHT_SCREEN_OPTIONS}
        component={BerichtScreen}
      />
    </Stack.Navigator>
  );
}
