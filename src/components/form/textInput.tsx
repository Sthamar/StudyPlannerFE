import { TextInput } from "@mantine/core";
import { FormInputProps } from "./type";

export function InputText<T>({ id, label, placeholder, form, w, h, type }: FormInputProps<T>) {
  return (
    <TextInput
      w={w}
      h={h}
      label={label}
      type={type}
      placeholder={placeholder}
      {...form.getInputProps(id as string)}
      styles={(theme) => ({
        root: {
          marginBottom: theme.spacing.md,
        },
        input: {
          backgroundColor: theme.other.background, // brand[0] — light blue
          borderColor: theme.other.border.default, // brand[3]
          color: theme.other.text.primary, // brand[9] — deep blue
          fontFamily: theme.fontFamily,
          fontSize: theme.fontSizes.md,
          padding: "10px 14px",

          "&::placeholder": {
            color: theme.other.text.muted, // brand[7]
          },

          "&:focus": {
            borderColor: theme.other.border.strong, // brand[6]
            boxShadow: `0 0 0 2px ${theme.colors.brand[2]}`, // brand[2]
          },
        },
        label: {
          color: theme.other.text.secondary, // brand[8]
          fontFamily: theme.headings.fontFamily,
          fontSize: theme.fontSizes.sm,
          fontWeight: 500,
          marginBottom: 4,
        },
        error: {
          color: theme.other.error.text, // red-700
          fontSize: theme.fontSizes.sm,
          marginTop: 4,
        },
      })}
    />
  );
}
