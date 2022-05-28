import { makeStyles } from "@lib/theme";
import type { TextInputProps } from "react-native";
import { TextInput } from "react-native";

const useStyles = makeStyles(theme => ({
  input: {
    borderColor: theme.colors.primary,
    borderRadius: theme.spacing.xs,
    borderWidth: 1,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    // paddingVertical: theme.spacing.md,
    color: theme.colors.primary,
    flex: 1,
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: "top",
    paddingTop: theme.spacing.md,
  },
}));

type InputProps = TextInputProps;

export default function Input({ style, ...props }: InputProps) {
  const styles = useStyles();

  return (
    <TextInput
      style={[
        styles.input,
        props.multiline ? styles.textarea : undefined,
        style,
      ]}
      {...props}
    />
  );
}
