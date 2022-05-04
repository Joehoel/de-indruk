export * from "@rneui/themed";

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module "@rneui/themed" {
    export interface Colors {
        // TODO: Implement
    }

    export interface FullTheme {
        colors: RecursivePartial<Colors>;
    }
}
