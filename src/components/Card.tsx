import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles } from "@lib/theme";
import type { ViewStyle } from "react-native";
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

import Text from "./Text";

const useStyles = makeStyles(theme => ({
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.spacing.md,
    // maxHeight: 141,
    maxWidth: 163,
    padding: 21,
  },
  icon: {
    marginTop: 23,
    marginBottom: 25,
    marginHorizontal: 44.5,
  },
}));

interface CardProps {
  text: string;
  icon: IconProp;
  color: string;
  style?: ViewStyle;
  onPress?: () => void;
}

export default function Card({ text, icon, color, style, onPress }: CardProps) {
  const styles = useStyles();
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      <FontAwesomeIcon
        icon={icon}
        size={32}
        color="white"
        style={styles.icon}
      />
      <Text color="white" variant="h4" textAlign="center">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
