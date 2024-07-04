import CoursDescription from '@/components/CoursePage/CoursDescription';
import VideoPlayer from '@/components/CoursePage/VideoPlayer';
import CoursLayout from '@/components/Layouts/CoursLayout';
import {
  useGetCoursDescription,
  getPlaybackId,
} from '@/services/coursServices';
import { useBearStore } from '@/store/micro';
import Loading from '@/svg/loading';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';
import notf from '../../../public/notff.svg';

export default function Page() {
  const params = useSearchParams();
  const coursId = params.get('cours');

  const token = useBearStore((state) => state.token);
  const {
    data: description,
    isLoading,
    error,
  } = useGetCoursDescription(token, coursId);
  console.log(description);

  const [playbackId, setPlaybackId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaybackId = async () => {
      try {
        if (description && description.video) {
          const id = await getPlaybackId(description.video);
          setPlaybackId(id);
        }
      } catch (error) {
        console.error('Error fetching playback ID:', error);
      }
    };

    if (!isLoading && !error && description) {
      fetchPlaybackId();
    }
  }, [description, isLoading, error]);

  return (
    <div className="pt-20 pb-5 px-5 bg-black h-[100vh] text-white text-5xl overflow-y-scroll flex flex-col space-y-10 items-center">
      <div className="w-full md:w-4/6 flex flex-col space-y-5">
        {isLoading ? (
          <div className="h-screen flex justify-center items-center">
            <Loading />
          </div>
        ) : error ? (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="w-fit">
              <Image src={notf} alt="not found" width={400} height={400} />
            </div>
            <p className="w-2/3 md:w-1/2 text-center max-md:text-2xl">
              Error loading course. Please try again later.
            </p>
          </div>
        ) : !description ? (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="w-fit">
              <Image src={notf} alt="not found" width={400} height={400} />
            </div>
            <p className="w-2/3 md:w-1/2 text-center max-md:text-3xl">
              The course cannot be found or the data is empty.
            </p>
          </div>
        ) : (
          <>
            {playbackId ? (
              <VideoPlayer videoId={playbackId} />
            ) : (
              <p>Loading video player...</p>
            )}
            <CoursDescription
              title={description.title}
              content={description.description}
            />
          </>
        )}
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <CoursLayout>{page}</CoursLayout>;
};
