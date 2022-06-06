import { BERICHT_SCREEN_OPTIONS } from "@constants/constants";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BerichtScreen, NieuwsScreen } from "@screens";
import type { NieuwsStackList } from "@typings/navigation";

const Stack = createNativeStackNavigator<NieuwsStackList>();

const OPTIONS: NativeStackNavigationOptions = { headerShown: false };

export default function NieuwsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nieuws" options={OPTIONS} component={NieuwsScreen} />
      <Stack.Screen
        name="Bericht"
        options={BERICHT_SCREEN_OPTIONS}
        component={BerichtScreen}
      />
    </Stack.Navigator>
  );
}
