import { Text } from "@elements";
import { makeStyles } from "@lib/theme";
import type { TouchableHighlightProps } from "react-native";
import { ActivityIndicator, TouchableHighlight } from "react-native";

interface SpinnerButtonProps extends TouchableHighlightProps {
  text: string;
  isLoading: boolean;
}

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.md,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: theme.borderRadii.xs,
  },
  text: {
    color: theme.colors.white,
  },
}));

export default function SpinnerButton({
  onPress,
  text,
  isLoading,
  style,
  ...props
}: SpinnerButtonProps) {
  const styles = useStyles();

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.button, style]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableHighlight>
  );
}
