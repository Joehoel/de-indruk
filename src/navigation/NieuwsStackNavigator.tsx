import { BERICHT_SCREEN_OPTIONS } from "@constants/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { StackNavigationOptions } from "@react-navigation/stack";
import { BerichtScreen, NieuwsScreen } from "@screens";
import type { NieuwsStackList } from "@typings/navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator<NieuwsStackList>();

const OPTIONS: StackNavigationOptions = { headerShown: false };

export default function NieuwsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nieuws" options={OPTIONS} component={NieuwsScreen} />
      <Stack.Screen
        name="Bericht"
        options={BERICHT_SCREEN_OPTIONS}
        component={BerichtScreen}
        sharedElements={route => {
          const { bericht } = route.params;

          return [
            {
              id: `bericht.${bericht.id}.image`,
              animation: "fade",
              resize: "clip",
            },
            {
              id: `bericht.${bericht.id}.title`,
              animation: "fade",
              resize: "clip",
            },
            {
              id: `bericht.${bericht.id}.date`,
              animation: "fade",
              resize: "clip",
            },
          ];
        }}
      />
    </Stack.Navigator>
  );
}
