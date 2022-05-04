import type { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import type {
    CompositeNavigationProp,
    NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { Item } from "./Item";

// Tabs op de Actueel pagina
export type ActueelTabList = {
    ActueelStack: undefined;
    Bijeenkomsten: undefined;
};

// Schermen binnen de actueel tab zodat je van een item in de actueel view naar een bericht kan gaan
export type ActueelStackNavigatorList = {
    Actueel: undefined;
    Bericht: { item: Item };
};

// Utility type om het gebruik van `useNavigation` makkelijker te maken
export type BerichtScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<ActueelStackNavigatorList, "Bericht">,
    MaterialBottomTabNavigationProp<ActueelTabList>
>;

// Alle tabs die zichtbaar zijn in de bottom bar
export type BottomTabList = {
    ActueelTabs: NavigatorScreenParams<ActueelTabList> | undefined;
    ContactenTabs: NavigatorScreenParams<ContactenTabList> | undefined;
    FaqTabs: NavigatorScreenParams<FaqTabList>;
    Koppelingen: undefined;
    Profiel: undefined;
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
