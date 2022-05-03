import SearchLayout from "@layout/SearchLayout";
import { Box, Text } from "native-base";
import { useState } from "react";

export default function JubileaScreen() {
    const [query, setQuery] = useState<string>("");

    return (
        <SearchLayout query={query} setQuery={setQuery}>
            <Text>Jubilea</Text>
        </SearchLayout>
    );
}
