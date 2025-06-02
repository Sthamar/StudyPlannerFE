import { UseFormReturnType } from "@mantine/form";

export type FormInputProps<T> = {
  id: keyof T;
  label?: string;
  placeholder?: string;
  form: UseFormReturnType<T>;
  w?: React.CSSProperties["width"];
  h?: React.CSSProperties["height"];
  type?:string;
};
