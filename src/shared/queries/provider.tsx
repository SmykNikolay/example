import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, ReactNode } from 'react';

interface IQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetch on window focus
      retry: 1, // Number of retries before failing
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export const QueryProvider: FC<IQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};