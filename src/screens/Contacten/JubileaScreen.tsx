import Text from "@components/Text";
import SearchLayout from "@layout/SearchLayout";
import { useState } from "react";

export default function JubileaScreen() {
    const [query, setQuery] = useState<string>("");

    return (
        <SearchLayout query={query} setQuery={setQuery}>
            <Text>Jubilea</Text>
        </SearchLayout>
    );
}
