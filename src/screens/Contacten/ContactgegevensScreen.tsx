import { Box, Text } from "@elements";
import { SearchLayout } from "@layout";
import { makeStyles } from "@lib/theme";
import { randUser } from "@ngneat/falso";
import { useState } from "react";
import type { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import "react-native-get-random-values";
import { AlphabetList } from "react-native-section-alphabet-list";

const contacten = randUser({ length: 200 }).map(user => ({
  key: user.id,
  value: `${user.firstName} ${user.lastName}`,
}));

const useStyles = makeStyles(theme => ({
  header: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 5,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    marginVertical: 10,
  },
  item: {
    paddingLeft: 25,
    paddingVertical: 10,
  },
}));

export default function ContactgegevensScreen() {
  const styles = useStyles();

  const [query, setQuery] = useState<string>("");

  const handlePress = (e: GestureResponderEvent) => {
    // TODO: Make this
  };

  return (
    <SearchLayout query={query} setQuery={setQuery}>
      <AlphabetList
        scrollEventThrottle={16}
        data={contacten}
        renderCustomSectionHeader={({ title }) => (
          <Box style={styles.header}>
            <Text color="white">{title}</Text>
          </Box>
        )}
        renderCustomItem={item => (
          <TouchableOpacity onPress={handlePress} style={styles.item}>
            {/* <Avatar source={ite} /> */}
            <Text>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </SearchLayout>
  );
}
