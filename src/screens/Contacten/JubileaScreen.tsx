import { Text } from "@elements";
import { SearchLayout } from "@layout";
import { useState } from "react";

export default function JubileaScreen() {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchLayout query={query} setQuery={setQuery}>
      <Text>Jubilea</Text>
    </SearchLayout>
  );
}
