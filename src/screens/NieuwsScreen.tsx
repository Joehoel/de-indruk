import { LaatsteBerichten } from "@components";
import { berichten } from "@constants/berichten";
import { Box, List, Pill, Text } from "@elements";
import { SearchLayout } from "@layout";
import { makeStyles } from "@lib/theme";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView } from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";

const useStyles = makeStyles(theme => ({
  container: {
    paddingHorizontal: theme.spacing.md,
    marginTop: -theme.spacing.md,
  },
  categories: { flexDirection: "row", flexWrap: "wrap" },
}));

export default function NieuwsScreen() {
  const styles = useStyles();
  const [query, setQuery] = useState<string>("");

  return (
    <SearchLayout
      query={query}
      setQuery={setQuery}
      title="Nieuws"
      placeholder="Zoek berichten..."
      scroll
    >
      {/* <ScrollView style={styles.container}> */}
      <List title="Categorieën">
        <Box style={styles.categories}>
          <Pill text="🏢 Kantoor" />
          <Pill text="💪🏻 Teambuilding" />
          <Pill text="📈 Productiviteit" />
          <Pill text="💸 Targets" />
          <Pill text="+5" />
        </Box>
      </List>

      <LaatsteBerichten berichten={berichten} />
      {/* </ScrollView> */}
      <StatusBar style="dark" />
    </SearchLayout>
  );
}
