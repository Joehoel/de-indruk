import type { Bericht } from "./global";

export type BerichtParams = { bericht: Bericht };

export type WithBericht<Screens extends Record<string, unknown> | undefined> =
  Screens & {
    Bericht: BerichtParams;
  };

export type DashboardStackList = WithBericht<{
  Dashboard: undefined;
}>;

export type NieuwsStackList = WithBericht<{
  Nieuws: undefined;
}>;

export type CollegasStackList = WithBericht<{
  Collegas: undefined;
}>;

export type BerichtenStackList = WithBericht<{
  Berichten: undefined;
}>;

// Alle tabs die zichtbaar zijn in de bottom bar
export type BottomTabList = {
  DashboardStack: DashboardStackList;
  NieuwsStack: NieuwsStackList;
  CollegasStack: CollegasStackList;
  BerichtenStack: BerichtenStackList;
};

export type BottomTabListItem = keyof BottomTabList;
