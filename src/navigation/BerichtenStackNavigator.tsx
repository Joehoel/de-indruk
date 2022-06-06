import { BERICHT_SCREEN_OPTIONS } from "@constants/constants";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BerichtScreen, BerichtenScreen } from "@screens";
import type { BerichtenStackList } from "@typings/navigation";

const Stack = createNativeStackNavigator<BerichtenStackList>();

const OPTIONS: NativeStackNavigationOptions = { headerShown: false };

export default function BerichtenStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Berichten"
        options={OPTIONS}
        component={BerichtenScreen}
      />
      <Stack.Screen
        name="Bericht"
        options={BERICHT_SCREEN_OPTIONS}
        component={BerichtScreen}
      />
    </Stack.Navigator>
  );
}
