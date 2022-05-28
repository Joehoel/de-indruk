import LaatsteBerichten from "@components/LaatsteBerichten";
import { berichten } from "@constants/berichten";
import List from "@elements/List";
import Text from "@elements/Text";
import SearchLayout from "@layout/SearchLayout";
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
