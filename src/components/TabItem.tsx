import Box from "@elements/Box";
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
    <Box flexDirection="column" alignItems="center">
      {children}
      <View
        style={{
          backgroundColor: focused ? theme.colors.primary : "transparent",
          width: 5,
          height: 5,
          position: "absolute",
          borderRadius: 5,
          bottom: -10,
        }}
      />
    </Box>
  );
}
