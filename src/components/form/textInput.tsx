import { TextInput } from "@mantine/core";
import { FormInputProps } from "./type";

export function InputText<T>({ id, label, placeholder, form }: FormInputProps<T>) {
  return (
    <TextInput label={label} placeholder={placeholder} {...form.getInputProps(id as string)} />
  );
}
