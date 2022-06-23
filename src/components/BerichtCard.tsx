/* eslint-disable no-return-assign */
import { Box, Text } from "@elements";
import { makeStyles, useTheme } from "@lib/theme";
import type { Bericht } from "@typings/global";
import { Image, TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
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
      <SharedElement id={`bericht.${bericht.id}.image`}>
        <Image source={{ uri: bericht.image }} style={styles.image} />
      </SharedElement>
      <Box style={styles.content}>
        <SharedElement id={`bericht.${bericht.id}`}>
          <SharedElement id={`bericht.${bericht.id}.title`}>
            <Text variant="h4" style={styles.header} numberOfLines={1}>
              {bericht.title}
            </Text>
          </SharedElement>

          <SharedElement id={`bericht.${bericht.id}.date`}>
            <Date date={bericht.date} />
          </SharedElement>
        </SharedElement>
      </Box>
    </TouchableOpacity>
  );
}
