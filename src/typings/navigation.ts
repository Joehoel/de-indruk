import type {
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ItemType } from "@typings";

// Tabs op de Actueel pagina
export type ActueelTabList = {
  Actueel: undefined;
  Bijeenkomsten: undefined;
};

export type ActueelStackList = {
  ActueelTabs: NavigatorScreenParams<ActueelTabList> | undefined;
  Bericht: { item: ItemType };
};

export type ProfielStackList = {
  Profiel: undefined;
  ProfielBewerken: undefined;
};
export type ProfielStackNavigationProp = NavigationProp<ProfielStackList>;

// Utility type om het gebruik van `useNavigation` makkelijker te maken
export type BerichtScreenNavigationProp = NavigationProp<ActueelStackList>;
export type BerichtScreenProps = NativeStackScreenProps<
  ActueelStackList,
  "Bericht"
>;

// Alle tabs die zichtbaar zijn in de bottom bar
export type BottomTabList = {
  Dashboard: undefined;
  Nieuws: undefined;
  Collegas: undefined;
  Berichten: undefined;
  ActueelStack: NavigatorScreenParams<ActueelStackList> | undefined;
  ContactenTabs: NavigatorScreenParams<ContactenTabList> | undefined;
  FaqTabs: NavigatorScreenParams<FaqTabList>;
  Koppelingen: undefined;
  ProfielStack: undefined;
};

// Alle tabbladen binnen de contacten view
export type ContactenTabList = {
  Contactgegevens: undefined;
  Jubilea: undefined;
};

// Alle tabbladen binnen de FAQ view
export type FaqTabList = {
  Faq: undefined;
  Ask: undefined;
};
