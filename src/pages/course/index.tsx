import CoursDescription from '@/components/CoursePage/coursDescription';
import VideoPlayer from '@/components/CoursePage/videoPlayer';
import CoursLayout from '@/components/Layouts/CoursLayout';
import { useGetCoursDescription } from '@/services/coursServices';
import { useBearStore } from '@/store/micro';
import Loading from '@/svg/loading';
import { useSearchParams } from 'next/navigation';
import { ReactElement } from 'react';

export default function Page() {
  const params = useSearchParams();
  const coursId = params.get('cours');
  const token = useBearStore((state) => state.token);
  const {
    data: description,
    isLoading,
    error,
  } = useGetCoursDescription(token, coursId);

  return (
    <div className="pt-20 pb-5 px-5 bg-black h-[100dvh] text-white text-5xl overflow-y-scroll flex flex-col space-y-10 items-center">
      {!isLoading && <VideoPlayer />}
      <div className="w-full md:w-4/6 flex flex-col space-y-5">
        {isLoading ? (
          <div className="h-screen flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          description && (
            <CoursDescription
              title={description.title}
              content={description.description}
            />
          )
        )}{' '}
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <CoursLayout>{page}</CoursLayout>;
};
