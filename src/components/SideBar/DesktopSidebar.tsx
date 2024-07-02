import { useGetMicrocredentialsContent } from '@/services/microcredentials';
import { useBearStore } from '@/store/micro';
import Loading from '@/svg/loading';
import { useSearchParams } from 'next/navigation';
import Module from '../CoursePage/Module';

type Props = {};

function SidebarDesktop({}: Props) {
  const params = useSearchParams();
  const token = useBearStore((state) => state.token);

  const microcredential = params.get('microcredential');
  const {
    data: microcredentialsData,
    isLoading,
    error,
  } = useGetMicrocredentialsContent(token, microcredential);

  return (
    <aside className="w-full h-[100vh]  border-r border-gray-500 font-sans overflow-y-scroll">
      <div className="h-full px-3 pt-32 flex flex-col">
        <h3 className="mx-3 text-sm font-semibold text-primary fixed top-8">
          Course Content
        </h3>
        {isLoading ? (
          <div className="h-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="mx-3 flex flex-col space-y-10">
            {microcredentialsData &&
              microcredentialsData.modules.map((moduleData: any) => (
                <Module
                  key={moduleData.module.id}
                  title={moduleData.module.title}
                  cours={moduleData.cours}
                  hasQuiz={moduleData.quizz !== undefined}
                  quizId={moduleData.quizz?._id}
                />
              ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default SidebarDesktop;
