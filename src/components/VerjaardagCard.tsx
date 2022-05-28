import Box from "@elements/Box";
import Text from "@elements/Text";
import { makeStyles } from "@lib/theme";
import { Avatar } from "@rneui/themed";
import type { Verjaardag } from "@typings";
import { TouchableOpacity } from "react-native";

interface VerjaardagCardProps {
  verjaardag: Verjaardag;
}

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    // paddingVertical: 16
    marginLeft: theme.spacing.xs,
  },
  header: {
    marginBottom: 4,
  },
}));

export default function VerjaardagCard({ verjaardag }: VerjaardagCardProps) {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.container}>
      <Avatar rounded source={{ uri: verjaardag.user.img }} size={40} />

      <Box style={styles.content}>
        <Text variant="h3" style={styles.header}>
          {verjaardag.user.firstName} {verjaardag.user.lastName}
        </Text>
        <Text variant="muted">
          {Intl.DateTimeFormat("nl-NL", {
            dateStyle: "long",
          }).format(verjaardag.date)}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
