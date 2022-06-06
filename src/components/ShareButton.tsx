import { faArrowUpFromSquare } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles } from "@lib/theme";
import type { ShareContent } from "react-native";
import { Share, TouchableOpacity } from "react-native";

const useStyles = makeStyles(theme => ({
  button: { padding: 5 },
}));

export default function ShareButton({ content }: { content: ShareContent }) {
  const styles = useStyles();

  return (
    <TouchableOpacity
      onPress={() => Share.share(content)}
      style={styles.button}
    >
      <FontAwesomeIcon icon={faArrowUpFromSquare} size={21} color="white" />
    </TouchableOpacity>
  );
}
