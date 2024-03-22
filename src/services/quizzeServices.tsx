import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { axiosInstance } from './axiosInstance';

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
