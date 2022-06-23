import { BERICHT_SCREEN_OPTIONS } from "@constants/constants";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { StackNavigationOptions } from "@react-navigation/stack";
import { BerichtScreen, CollegasScreen } from "@screens";
import type { CollegasStackList } from "@typings/navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator<CollegasStackList>();

const OPTIONS: StackNavigationOptions = { headerShown: false };

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
        sharedElements={route => {
          const { bericht } = route.params;

          return [
            { id: `bericht.${bericht.id}.image`, animation: "move" },
            { id: `bericht.${bericht.id}.title`, animation: "fade" },
            { id: `bericht.${bericht.id}.date`, animation: "fade" },
          ];
        }}
      />
    </Stack.Navigator>
  );
}
