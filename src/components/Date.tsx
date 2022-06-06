import { Box, Text } from "@elements";
import { faCalendar } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";

const useStyles = makeStyles(theme => ({
  icon: {
    opacity: 1 - theme.textVariants.muted.opacity,
    marginRight: 6,
  },
}));

export default function Date({ date }: { date: Date }) {
  const theme = useTheme();
  const styles = useStyles();

  return (
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
        }).format(date)}
      </Text>
    </Box>
  );
}
