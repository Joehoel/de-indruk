import { SearchLayout } from "@layout";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function CollegasScreen() {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchLayout
      query={query}
      setQuery={setQuery}
      title="Collega's"
      placeholder="Zoek collega's..."
    >
      <StatusBar style="dark" />
    </SearchLayout>
  );
}
