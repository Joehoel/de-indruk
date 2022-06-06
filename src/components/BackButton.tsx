import { Text } from "@elements";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles } from "@lib/theme";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

type BackButtonProps = { label?: string };

const useStyles = makeStyles(theme => ({
  back: { flexDirection: "row", alignItems: "flex-end" },
}));

export default function BackButton({ label }: BackButtonProps) {
  const navigation = useNavigation();
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
      <FontAwesomeIcon color="white" size={21} icon={faAngleLeft} />
      <Text variant="back">{label ?? "Terug"}</Text>
    </TouchableOpacity>
  );
}
