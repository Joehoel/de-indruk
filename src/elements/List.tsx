import { makeStyles } from "@lib/theme";
import type { ReactNode, ReactNodeArray } from "react";
import Box from "./Box";
import Text from "./Text";

const useStyles = makeStyles(() => ({
  title: {
    marginTop: 44,
  },
  list: { marginTop: 18 },
}));

interface ListProps {
  title: string;
  children: ReactNode | ReactNodeArray;
}

export default function List({ title, children }: ListProps) {
  const styles = useStyles();

  return (
    <Box style={styles.title}>
      <Text variant="h2">{title}</Text>

      <Box style={styles.list}>{children}</Box>
    </Box>
  );
}
