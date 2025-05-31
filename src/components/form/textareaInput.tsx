import { Textarea } from "@mantine/core";
import { FormInputProps } from "./type";

export function InputTextarea<T>({ id, label, placeholder, form }: FormInputProps<T>) {
  return <Textarea label={label} placeholder={placeholder} {...form.getInputProps(id as string)} />;
}
