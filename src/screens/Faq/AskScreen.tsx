import { SpinnerButton } from "@components";
import { Box, Input, Text } from "@elements";
import { makeStyles, useTheme } from "@lib/theme";
import React, { useState } from "react";

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing.md,
    flex: 1,
  },
  group: {
    marginBottom: theme.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.sm,
  },
  button: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

export default function AskScreen() {
  const [loading, setLoading] = useState(false);

  const styles = useStyles();
  const theme = useTheme();

  const ask = () => {
    setLoading(true);
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.group}>
        <Text variant="h4" style={styles.label}>
          Uw naam
        </Text>
        <Box flexDirection="row">
          <Input placeholder="Jan Modaal" />
        </Box>
      </Box>
      <Box style={styles.group}>
        <Text variant="h4" style={styles.label}>
          Uw vraag
        </Text>
        <Input placeholder="Stel hier uw vraag..." multiline />
      </Box>
      <SpinnerButton
        style={styles.button}
        text="Vraag verzenden"
        isLoading={loading}
        onPress={ask}
      />
    </Box>
  );
}
