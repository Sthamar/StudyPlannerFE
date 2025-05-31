// hooks/useSmartForm.ts
import { useForm, zodResolver } from "@mantine/form";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useFetch } from "./useFetch";

interface UseSmartFormProps<T> {
  id?: string;
  mode: "create" | "edit";
  url: string;
  validationSchema?: z.Schema<T>;
  initialValues?: Partial<T>;
  transformEditData?: (data: T) => Partial<T>;
  transformSubmitData?: (data: Partial<T>) => unknown;
  submitMethod?: "post" | "patch";
  disableGet?: boolean;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
}

export function useSmartForm<T extends Record<string, any>>({
  id,
  mode,
  url,
  validationSchema,
  initialValues = {},
  transformEditData,
  transformSubmitData,
  submitMethod = "patch",
  disableGet = false,
  onSuccess,
  onError,
}: UseSmartFormProps<T>) {
  const params = useParams();

  const isEdit = mode === "edit" && !disableGet && !!id;
  const fullUrl = `${url}${isEdit ? `/${id}` : ""}`;

  const [submitter, setSubmitter] = useState<HTMLElement | null>(null);

  const form = useForm<T>({
    initialValues: initialValues as T,
    validate: validationSchema ? zodResolver(validationSchema) : undefined,
  });

  const editData = useFetch<"get", Response>("get", url, {
    enabled: isEdit,
  });

  const formMutate = useFetch<"post" | "patch", Partial<T>>(isEdit ? submitMethod : "post", url, {
    onSuccess: (res) => {
      onSuccess?.(res);
    },
    onError: (err) => {
      onError?.(err);
    },
  });

  useEffect(() => {
    if (isEdit && editData.data?.data) {
      const incoming = transformEditData
        ? transformEditData(editData.data.data)
        : editData.data.data;

      form.setValues(incoming as T);
    }
  }, [editData.data?.data, isEdit]);

  const handleSubmit = (values: typeof form.values) => {
    const finalData = transformSubmitData ? transformSubmitData(values) : values;
    if (typeof (formMutate as any).mutate === "function") {
      (formMutate as any).mutate(finalData);
    }
  };

  return {
    form,
    handleSubmit: form.onSubmit(handleSubmit),
    isLoading: (editData as any)?.isFetching ?? false,
    setSubmitter,
  };
}
