import { LaatsteBerichten } from "@components";
import { berichten } from "@constants/berichten";
import { List, Text } from "@elements";
import { SearchLayout } from "@layout";
import { useState } from "react";

export default function NieuwsScreen() {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchLayout
      query={query}
      setQuery={setQuery}
      title="Nieuws"
      placeholder="Zoek berichten..."
    >
      <List title="Categorieën">
        <Text>List</Text>
      </List>

      <LaatsteBerichten berichten={berichten} />
    </SearchLayout>
  );
}
