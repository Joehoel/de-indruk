import type { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import type {
    CompositeNavigationProp,
    NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { Item } from "./Item";

// TODO: Add comments

export type ActueelTabList = {
    ActueelStack: undefined;
    Bijeenkomsten: undefined;
};

export type ActueelStackNavigatorList = {
    Actueel: undefined;
    Bericht: { item: Item };
};

export type BerichtScreenNavigationProp = CompositeNavigationProp<
    NativeStackNavigationProp<ActueelStackNavigatorList, "Bericht">,
    MaterialBottomTabNavigationProp<ActueelTabList>
>;

export type BottomTabList = {
    ActueelTabs: NavigatorScreenParams<ActueelTabList> | undefined;
    ContactenTabs: NavigatorScreenParams<ContactenTabList> | undefined;
    FaqTabs: NavigatorScreenParams<FaqTabList>;
    Koppelingen: undefined;
    Profiel: undefined;
};

export type ContactenTabList = {
    Contactgegevens: undefined;
    Jubilea: undefined;
};

export type FaqTabList = {
    Faq: undefined;
    Ask: undefined;
};
