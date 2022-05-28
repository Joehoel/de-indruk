import { makeStyles } from "@lib/theme";
import Box from "./Box";

const useStyles = makeStyles(theme => ({
  separator: {
    height: 2,
    marginHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.gray1,
  },
}));

export default function Separator() {
  const styles = useStyles();

  return <Box style={styles.separator} />;
}
