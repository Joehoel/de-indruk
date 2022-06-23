import { makeStyles } from "@lib/theme";
import { useState } from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import Box from "./Box";
import Text from "./Text";

const useStyles = makeStyles(theme => ({
  pill: {
    backgroundColor: theme.colors.gray3,
    borderRadius: theme.spacing.md,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 6,
    marginBottom: 8,
  },
  active: {
    backgroundColor: `${theme.colors.gray2}80`,
  },
}));

interface PillProps {
  text: string;
  onPress?: () => void;
}

export default function Pill({ text, onPress }: PillProps) {
  const styles = useStyles();
  const [active, setActive] = useState(false);

  return (
    <TouchableHighlight
      underlayColor={styles.active.backgroundColor}
      style={[styles.pill, active ? styles.active : null]}
      onPress={() => {
        if (onPress) {
          onPress();
        }

        setActive(v => !v);
      }}
    >
      <Text variant="semibold" fontSize={16} lineHeight={20}>
        {text}
      </Text>
    </TouchableHighlight>
  );
}
