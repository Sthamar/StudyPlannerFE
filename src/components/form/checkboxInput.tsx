import { Checkbox } from "@mantine/core";
import { FormInputProps } from "./type";

export function InputCheckbox<T>({ id, label, form }: FormInputProps<T>) {
  return <Checkbox label={label} {...form.getInputProps(id as string, { type: "checkbox" })} />;
}
