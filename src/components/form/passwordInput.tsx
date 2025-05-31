import { PasswordInput } from "@mantine/core";
import { FormInputProps } from "./type";
export function InputPassword<T>({ id, label, placeholder, form }: FormInputProps<T>) {
  return (
    <PasswordInput label={label} placeholder={placeholder} {...form.getInputProps(id as string)} />
  );
}
