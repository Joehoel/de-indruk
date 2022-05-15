// TODO: Add all types
declare module "react-native-alphabetlistview" {
    import React from "react";

    declare function AlphabetListView<T>(): React.FunctionComponent<{
        data: T;
        hideSectionList: boolean;
        getSectionTitle: (...args: any[]) => string;
        getSectionListTitle: (...args: any[]) => string;
        onCellSelect: () => void;
    }>;
    export default AlphabetListView;
}
