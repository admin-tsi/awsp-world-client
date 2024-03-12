import { axiosInstance } from '@/services/axiosInstance';

const fetcher = async (url: string, token: string): Promise<any> => {
  try {
    const response = await axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export default fetcher;
