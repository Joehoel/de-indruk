import { Box, Text } from "@elements";
import { makeStyles } from "@lib/theme";

const useStyles = makeStyles(theme => ({
  berichten: {},
}));

export default function BerichtenScreen() {
  const styles = useStyles();

  return (
    <Box style={styles.berichten}>
      <Text>Berichten</Text>
    </Box>
  );
}
