import CoursDescription from '@/components/cours_page/coursDescription';
import VideoPlayer from '@/components/cours_page/videoPlayer';
import CoursLayout from '@/components/layouts/coursLayout';
import CoursDescriptionSkeleton from '@/components/skeleton/coursDescriptionSkeleton';
import { useGetCoursDescription } from '@/services/coursServices';
import { useBearStore } from '@/store/micro';
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
      <VideoPlayer />
      <div className="w-full md:w-4/6 flex flex-col space-y-5">
        {isLoading ? (
          <CoursDescriptionSkeleton />
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
