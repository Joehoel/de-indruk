/* eslint-disable react/style-prop-object */
import { BERICHT_SCREEN_OPTIONS } from "@constants/constants";
import type { StackNavigationOptions } from "@react-navigation/stack";
import type { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import { BerichtScreen, DashboardScreen } from "@screens";
import type { DashboardStackList } from "@typings/navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator<DashboardStackList>();

const OPTIONS: StackNavigationOptions = { headerShown: false };

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
        sharedElements={route => {
          const { bericht } = route.params;

          return [
            {
              id: `bericht.${bericht.id}.image`,
              animation: "move",
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
            // {
            //   id: `bericht.${bericht.id}`,
            //   animation: "fade",
            //   resize: "none",
            // },
          ];
        }}
      />
    </Stack.Navigator>
  );
}
