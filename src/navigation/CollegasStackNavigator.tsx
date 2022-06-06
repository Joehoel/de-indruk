import { BERICHT_SCREEN_OPTIONS } from "@constants/constants";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BerichtScreen, CollegasScreen } from "@screens";
import type { CollegasStackList } from "@typings/navigation";

const Stack = createNativeStackNavigator<CollegasStackList>();

const OPTIONS: NativeStackNavigationOptions = { headerShown: false };

export default function CollegasStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Collegas"
        options={OPTIONS}
        component={CollegasScreen}
      />
      <Stack.Screen
        name="Bericht"
        options={BERICHT_SCREEN_OPTIONS}
        component={BerichtScreen}
      />
    </Stack.Navigator>
  );
}
