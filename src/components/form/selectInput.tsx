import { Select } from "@mantine/core";
import { FormInputProps } from "./type";

type FormSelectProps<T> = FormInputProps<T> & {
  data: { value: string; label: string }[];
};

export function InputSelect<T>({ id, label, placeholder, form, data }: FormSelectProps<T>) {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      data={data}
      {...form.getInputProps(id as string)}
    />
  );
}
