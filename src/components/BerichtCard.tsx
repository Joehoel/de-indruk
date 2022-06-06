import { Box, Text } from "@elements";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";
import type { Bericht } from "@typings/global";
import { Image, TouchableOpacity } from "react-native";
import Date from "./Date";

interface BerichtCardProps {
  bericht: Bericht;
  onPress: () => void;
}

const useStyles = makeStyles(theme => ({
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: theme.spacing.xs,
  },
  content: { paddingVertical: 16, width: "70%" },
  header: {
    marginBottom: 12,
  },
}));

export default function BerichtCard({ bericht, onPress }: BerichtCardProps) {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginBottom: 16, flexDirection: "row" }}
    >
      <Image source={{ uri: bericht.image }} style={styles.image} />
      <Box style={styles.content}>
        <Text variant="h4" style={styles.header} numberOfLines={1}>
          {bericht.title}
        </Text>
        <Date date={bericht.date} />
      </Box>
    </TouchableOpacity>
  );
}
