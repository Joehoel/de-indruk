import type { ComponentProps, ComponentType, ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

type Options = {
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
    hidden?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
};

export const withBadge = <T extends ComponentType>(
    value: number | string,
    options: Options = {}
) => {
    return (Component: T) => {
        return (props: ComponentProps<T>) => {
            return <Component {...props} />;
        };
    };
};
