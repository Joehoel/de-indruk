import Box from "@elements/Box";
import Text from "@elements/Text";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";
import type { Bericht } from "@typings";
import { Image, TouchableOpacity } from "react-native";

interface BerichtCardProps {
  bericht: Bericht;
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
  icon: {
    opacity: 1 - theme.textVariants.muted.opacity,
    marginRight: 6,
  },
}));

export default function BerichtCard({ bericht }: BerichtCardProps) {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <TouchableOpacity style={{ marginBottom: 16, flexDirection: "row" }}>
      <Image source={{ uri: bericht.image }} style={styles.image} />
      <Box style={styles.content}>
        <Text variant="h3" style={styles.header} numberOfLines={1}>
          {bericht.title}
        </Text>
        <Box flexDirection="row">
          <FontAwesomeIcon
            icon={faCalendar}
            size={15}
            color={theme.colors.text}
            style={styles.icon}
          />
          <Text variant="muted">
            {Intl.DateTimeFormat("nl-NL", {
              dateStyle: "long",
            }).format(bericht.date)}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
