import type { ReactNode } from "react";

// TODO: Add all types
declare module "react-native-alphabetlistview" {
  import type React from "react";

  declare function SelectableSectionsListView<T>(): React.FunctionComponent<{
    data: T;
    hideSectionList?: boolean;
    cell: ReactNode;
    sectionHeaderHeight: number;
    cellHeight: number;
    getSectionTitle?: (...args: any[]) => string;
    getSectionListTitle?: (...args: any[]) => string;
    onCellSelect?: () => void;
  }>;
  export default SelectableSectionsListView;
}
