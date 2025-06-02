import { Checkbox } from "@mantine/core";
import { FormInputProps } from "./type";

export function InputCheckbox<T>({ id, label, form }: FormInputProps<T>) {
  return (
    <Checkbox
      label={label}
      {...form.getInputProps(id as string, { type: "checkbox" })}
      styles={(theme) => ({
        root: {
          display: "flex",
          alignItems: "center",
          marginBottom: theme.spacing.md,
        },
        input: {
          backgroundColor: theme.other.background, // brand[0]
          borderColor: theme.other.border.default, // brand[3]
          color: theme.other.text.primary, // brand[9]

          "&:hover": {
            borderColor: theme.other.border.strong, // brand[6]
          },

          "&:checked": {
            backgroundColor: theme.colors.brand[5], // brand[5]
            borderColor: theme.colors.brand[6], // brand[6]
          },

          "&:focus": {
            boxShadow: `0 0 0 2px ${theme.colors.brand[2]}`, // brand[2]
            borderColor: theme.colors.brand[6], // brand[6]
          },
        },
        label: {
          color: theme.other.text.secondary, // brand[8]
          fontFamily: theme.headings.fontFamily,
          fontSize: theme.fontSizes.sm,
          marginLeft: theme.spacing.sm,
        },
      })}
    />
  );
}
