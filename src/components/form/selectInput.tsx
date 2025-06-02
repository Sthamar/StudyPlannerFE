import { Select } from "@mantine/core";
import { FormInputProps } from "./type";

type FormSelectProps<T> = FormInputProps<T> & {
  data: { value: string; label: string }[];
};

export function InputSelect<T>({ id, label, placeholder, form, data, w, h }: FormSelectProps<T>) {
  return (
    <Select
      w={w}
      h={h}
      label={label}
      placeholder={placeholder}
      data={data}
      {...form.getInputProps(id as string)}
      styles={(theme) => ({
        root: {
          marginBottom: theme.spacing.md,
        },
        input: {
          backgroundColor: theme.other.background, // brand[0]
          borderColor: theme.other.border.default, // brand[3]
          color: theme.other.text.primary, // brand[9]
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
        dropdown: {
          backgroundColor: theme.other.background, // brand[0]
          borderColor: theme.other.border.light, // brand[2]
        },
        item: {
          fontSize: theme.fontSizes.sm,
          color: theme.other.text.primary, // brand[9]

          "&[data-selected]": {
            backgroundColor: theme.colors.brand[1], // brand[1]
            color: theme.other.text.secondary, // brand[8]
          },

          "&[data-hovered]": {
            backgroundColor: theme.colors.brand[2], // brand[2]
          },
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
