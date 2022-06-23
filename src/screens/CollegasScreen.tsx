import { collegas } from "@constants/collegas";
import { Box, Text } from "@elements";
import { SearchLayout } from "@layout";
import { makeStyles } from "@lib/theme";
import { Avatar } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { AlphabetList } from "react-native-section-alphabet-list";

const useStyles = makeStyles(theme => ({
  list: {
    paddingHorizontal: theme.spacing.md,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontFamily: theme.textVariants.semibold.fontFamily,
    lineHeight: 25,
  },
  name: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: "Gilroy-Regular",
  },
  index: {
    // width: 100,
    // zIndex: 100,
    // backgroundColor: "red",
  },
}));

const data = collegas.map(c => ({
  key: c.id,
  value: `${c.user.firstName} ${c.user.lastName}`,
}));

export default function CollegasScreen() {
  const styles = useStyles();
  const [query, setQuery] = useState<string>("");

  return (
    <SearchLayout
      query={query}
      setQuery={setQuery}
      title="Collega's"
      placeholder="Zoek collega's..."
      padding={false}
    >
      <AlphabetList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => (
          <Box width="100%" backgroundColor="gray1" height={1} />
        )}
        SectionSeparatorComponent={() => (
          <Box width="100%" backgroundColor="gray1" height={1} />
        )}
        renderCustomSectionHeader={({ title }) => (
          <Box backgroundColor="background" paddingVertical="xs">
            <Text style={styles.title}>{title}</Text>
          </Box>
        )}
        renderCustomItem={({ key, value }) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const collega = collegas.find(c => c.id === key)!;

          return (
            <Box flexDirection="row" alignItems="center" paddingVertical="xs">
              <Avatar source={{ uri: collega?.user.img }} rounded />
              <Box marginLeft="xs">
                <Text style={styles.name}>
                  {collega.user.firstName}{" "}
                  <Text variant="semibold">{collega.user.lastName}</Text>
                </Text>
                <Text
                  fontSize={14}
                  lineHeight={14}
                  fontFamily="Gilroy-Medium"
                  opacity={0.5}
                >
                  {collega.job}
                </Text>
              </Box>
            </Box>
          );
        }}
        indexLetterStyle={styles.index}
      />
      <StatusBar style="dark" />
    </SearchLayout>
  );
}
