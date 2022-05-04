import SearchLayout from "@layout/SearchLayout";
import { Text } from "@rneui/themed";
import { useState } from "react";

export default function FaqScreen() {
    const [query, setQuery] = useState<string>("");

    return (
        <SearchLayout query={query} setQuery={setQuery}>
            <Text>Faq</Text>
        </SearchLayout>
    );
}
