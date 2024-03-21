import CoursLayout from '@/components/layouts/coursLayout';
import QuizInstructions from '@/components/quizInstruction';
import QuizInstruction from '@/components/quizInstruction';
import { useGetQuizz } from '@/services/quizzeServices';
import { useBearStore } from '@/store/micro';
import Loading from '@/svg/loading';
import { useSearchParams } from 'next/navigation';
import { ReactElement } from 'react';

export default function Page() {
  const params = useSearchParams();
  const quizId = params.get('quiz');
  const token = useBearStore((state) => state.token);
  const { data, isLoading, error } = useGetQuizz(token, quizId);
  console.log('cours', data);

  return (
    <div className="pt-20 pb-5 px-5 bg-black h-[100dvh] text-white text-5xl overflow-y-scroll flex flex-col space-y-10 items-center">
      {isLoading ? (
        <div className="h-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <QuizInstructions
          name={data.name}
          instructions={data.instructions}
          duration={data.duration}
          champScore={data.champScore}
        />
      )}
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <CoursLayout>{page}</CoursLayout>;
};
