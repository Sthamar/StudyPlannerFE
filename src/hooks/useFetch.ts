"use client";
import cax from "@/libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Method = "get" | "post" | "patch" | "put" | "delete";

interface FetchOptions<TData, TResponse> {
  enabled?: boolean;
  noAuth?: boolean;
  searchParams?: string;
  onSuccess?: (data: TResponse) => void;
  onError?: (err: AxiosError<TResponse>) => void;
}

export function useFetch<TMethod extends Method, TData = any, TResponse = any>(
  method: TMethod,
  url: string,
  options?: FetchOptions<TData, TResponse>,
) {
  const { noAuth, enabled = true, searchParams, onSuccess, onError } = options || {};
  const requestUrl = url.includes("?") || url.endsWith("/") ? url : `${url}/`;

  const apiClient = cax(noAuth ? null : undefined);

  if (method === "get") {
    return useQuery<TResponse, AxiosError<TResponse>>({
      queryKey: [requestUrl, searchParams],
      queryFn: async () => {
        const res = await apiClient.get<TResponse>(
          requestUrl + (searchParams ? `?${searchParams}` : ""),
        );
        return res.data;
      },
      enabled,
      onSuccess,
      onError,
    } as import("@tanstack/react-query").UseQueryOptions<
      TResponse,
      AxiosError<TResponse>,
      TResponse,
      readonly unknown[]
    >);
  }

  return useMutation<TResponse, AxiosError<TResponse>, TData>({
    mutationKey: [requestUrl],
    mutationFn: async (data: TData) => {
      const res = await apiClient[method]<TResponse>(requestUrl, data);
      return res.data;
    },
    onSuccess,
    onError,
  });
}
