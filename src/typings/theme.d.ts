/* eslint-disable @typescript-eslint/no-empty-interface */
export * from "@rneui/themed";

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module "@rneui/themed" {
    export interface Colors {
        // TODO: Implement
        text: string;
    }

    export interface FullTheme {
        colors: RecursivePartial<Colors>;
    }
}
