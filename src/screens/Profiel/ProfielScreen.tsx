import { Box, Text } from "@elements";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { makeStyles } from "@lib/theme";
import { Avatar } from "@rneui/themed";

const useStyles = makeStyles(theme => ({
  hero: {
    alignItems: "center",
    marginVertical: theme.spacing.md,
  },
  name: {
    marginTop: theme.spacing.md,
  },
  subtitle: {
    marginTop: theme.spacing.xs,
  },
  icon: {
    width: 35,
    height: 35,
    backgroundColor: theme.colors?.primary,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing.md,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: theme.spacing.md,
    borderBottomColor: theme.colors.gray1,
    borderBottomWidth: 2,
    paddingVertical: theme.spacing.sm,
  },
}));

export default function ProfielScreen() {
  const styles = useStyles();

  return (
    <Box>
      <Box style={styles.hero}>
        <Avatar
          rounded
          size={100}
          source={{
            uri: "https://avatars.githubusercontent.com/u/31251240?s=400&u=54c0df6f19ffa5e937cd0d4dce274c280a402d61&v=4",
          }}
        />
        <Text variant="h2" style={styles.name}>
          Joel Kuijper
        </Text>
        <Text variant="muted" style={styles.subtitle}>
          Developer
        </Text>
      </Box>
      <Box>
        <Box style={styles.item}>
          <Box style={styles.icon}>
            <FontAwesome name="phone" color="white" size={18} />
          </Box>
          <Text variant="muted">0624852983</Text>
        </Box>
        <Box style={styles.item}>
          <Box style={styles.icon}>
            <Feather name="mail" color="white" size={18} />
          </Box>
          <Text variant="muted">jmkuijper@outlook.com</Text>
        </Box>
        <Box style={styles.item}>
          <Box style={styles.icon}>
            <FontAwesome name="birthday-cake" color="white" size={18} />
          </Box>
          <Text variant="muted">19 Januari 2003</Text>
        </Box>
        <Box style={styles.item}>
          <Box style={styles.icon}>
            <AntDesign name="contacts" color="white" size={18} />
          </Box>
          <Box>
            <Text variant="h4">Biografie</Text>
            <Text variant="muted">19, HBO-ICT</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
