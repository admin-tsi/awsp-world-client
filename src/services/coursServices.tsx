import fetcher from '@/utils/fetcher';
import useSWR from 'swr';

export const useGetCoursDescription = (token: any, coursId: any) => {
  const { data, isLoading, error } = useSWR(
    [`/courses/${coursId}`, token],
    ([url, token]) => fetcher(url, token),
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, error };
};
