import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { axiosInstance } from './axiosInstance';

export const useGetQuizz = (
  token: string | null,
  quizzId: string | null,
  microId: string | null
) => {
  const shouldFetch = token && quizzId && microId;

  const {
    data,
    isValidating: isLoading,
    error,
  } = useSWR(
    shouldFetch
      ? [`/manages/credantials/${microId}/quizz/${quizzId}`, token]
      : null,
    ([url, token]) => fetcher(url, token as string),
    {
      revalidateOnFocus: false,
    }
  );

  return { data, isLoading, error };
};

export const submitQuizz = async (token: string, answer: any) => {
  try {
    const response = await axiosInstance.post('/answers/save-answer', answer, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la soumission du quiz :', error);
    throw error;
  }
};
