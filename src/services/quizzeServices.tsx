import fetcher from '@/utils/fetcher';
import useSWR from 'swr';

export const useGetQuizz = (token: any, quizzId: any) => {
  const { data, isLoading, error } = useSWR(
    [`/quizzes/${quizzId}`, token],
    ([url, token]) => fetcher(url, token),
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, error };
};
