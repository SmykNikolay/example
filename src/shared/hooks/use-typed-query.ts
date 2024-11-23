
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export function useTypedQuery<
  TQueryFnData = unknown,
  TError = AxiosError,
  TData = TQueryFnData,
  TQueryKey extends [string, ...unknown[]] = [string, ...unknown[]]
>(
  queryKey: TQueryKey,
  queryFn: () => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >
) {
  return useQuery({
    queryKey,
    queryFn,
    ...options,
  });
}