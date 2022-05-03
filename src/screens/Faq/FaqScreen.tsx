import SearchLayout from "@layout/SearchLayout";
import { Box, Text } from "native-base";
import { useState } from "react";

export default function FaqScreen() {
    const [query, setQuery] = useState<string>("");

    return (
        <SearchLayout query={query} setQuery={setQuery}>
            <Text>Faq</Text>
        </SearchLayout>
    );
}
