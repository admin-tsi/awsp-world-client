import fetcher from '@/utils/fetcher';
import useSWR from 'swr';

export const useGetMicrocredentials = (token: any) => {
  const { data, isLoading, error } = useSWR(
    ['/manages/user', token],
    ([url, token]) => fetcher(url, token),
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, error };
};

export const useGetMicrocredentialsContent = (
  token: any,
  microcredentialId: any
) => {
  const { data, isLoading, error } = useSWR(
    [`/microcredentials/${microcredentialId}`, token],
    ([url, token]) => fetcher(url, token),
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, error };
};
