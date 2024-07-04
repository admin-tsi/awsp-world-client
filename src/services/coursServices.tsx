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

export const getPlaybackId = async (
  assetId: string
): Promise<string | null> => {
  try {
    const response = await fetch(`/api/status?assetId=${assetId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch asset status');
    }

    const data = await response.json();

    if (
      data.asset &&
      data.asset.playback_ids &&
      data.asset.playback_ids.length > 0
    ) {
      return data.asset.playback_ids[0].id;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting playback ID:', error);
    throw new Error('Failed to fetch playback ID');
  }
};
