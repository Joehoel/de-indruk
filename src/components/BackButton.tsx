import { Text } from "@elements";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

type BackButtonProps = { label?: string };

const useStyles = makeStyles(theme => ({
  back: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingLeft: theme.spacing.xs,
  },
}));

export default function BackButton({ label }: BackButtonProps) {
  const navigation = useNavigation();
  const styles = useStyles();
  const theme = useTheme();

  return (
    <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
      <FontAwesomeIcon color={theme.colors.text} size={21} icon={faAngleLeft} />
      <Text variant="back" color="text">
        {label ?? "Terug"}
      </Text>
    </TouchableOpacity>
  );
}
