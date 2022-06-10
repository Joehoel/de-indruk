import { makeStyles } from "@lib/theme";
import { TouchableOpacity } from "react-native";
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
}));

interface PillProps {
  text: string;
  onPress?: () => void;
}

export default function Pill({ text, onPress }: PillProps) {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.pill} onPress={onPress}>
      <Text variant="semibold" fontSize={16} lineHeight={20}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
