import type { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import type {
    CompositeNavigationProp,
    NavigationProp,
    NavigatorScreenParams,
} from "@react-navigation/native";
import type {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";
import type { Item } from "./Item";

// Tabs op de Actueel pagina
export type ActueelTabList = {
    Actueel: undefined;
    Bijeenkomsten: undefined;
};

export type ActueelStackList = {
    ActueelTabs: NavigatorScreenParams<ActueelTabList> | undefined;
    Bericht: { item: Item };
};

// Utility type om het gebruik van `useNavigation` makkelijker te maken
export type BerichtScreenNavigationProp = NavigationProp<ActueelStackList>;
export type BerichtScreenProps = NativeStackScreenProps<
    ActueelStackList,
    "Bericht"
>;

// Alle tabs die zichtbaar zijn in de bottom bar
export type BottomTabList = {
    ActueelStack: NavigatorScreenParams<ActueelStackList> | undefined;
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
