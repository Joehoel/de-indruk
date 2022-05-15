import { useTheme } from "@lib/theme";
import type { ReactNode } from "react";
import { View } from "react-native";

interface TabItemProps {
    focused: boolean;
    children: ReactNode;
}

export default function TabItem({ children, focused }: TabItemProps) {
    const theme = useTheme();

    return (
        <View
            style={{
                borderBottomColor: focused
                    ? theme.colors.primary
                    : "transparent",
                borderBottomWidth: 3,
                padding: 3,
            }}
        >
            {children}
        </View>
    );
}
