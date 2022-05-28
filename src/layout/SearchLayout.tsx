import { Box, Text } from "@elements";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";
import type { ReactNode, SetStateAction } from "react";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing.md,
  },
  search: {
    borderRadius: 33,
    backgroundColor: theme.colors.gray3,
    paddingVertical: 21,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  input: {
    ...theme.textVariants.h5,
  },
  cancel: {
    color: theme.colors.primary,
  },
}));

interface SearchLayoutProps {
  title?: string;
  placeholder?: string;
  children: ReactNode;
  setQuery: React.Dispatch<SetStateAction<string>>;
  query: string;
}

export default function SearchLayout({
  title,
  placeholder,
  children,
  setQuery,
  query,
}: SearchLayoutProps) {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      {title && <Text variant="title">{title}</Text>}
      <Box style={styles.search}>
        <TextInput
          value={query}
          style={styles.input}
          onChangeText={value => setQuery(value)}
          placeholder={placeholder ?? "Zoek..."}
          placeholderTextColor="#9EA0B4"
        />
        <FontAwesomeIcon
          icon={faSearch}
          size={22}
          color={theme.colors.darkBlue2}
        />
      </Box>
      {children}
    </SafeAreaView>
  );
}
