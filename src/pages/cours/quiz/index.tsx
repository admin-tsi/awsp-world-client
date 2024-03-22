import CoursLayout from '@/components/layouts/coursLayout';
import QuizComponent from '@/components/quizComponent';
import QuizInstructions from '@/components/quizInstruction';
import { useGetQuizz } from '@/services/quizzeServices';
import { useBearStore } from '@/store/micro';
import Loading from '@/svg/loading';
import { useSearchParams } from 'next/navigation';
import { ReactElement, useState } from 'react';

export default function Page() {
  const params = useSearchParams();
  const quizId = params.get('quiz');
  const token = useBearStore((state) => state.token);
  const { data: quizData, isLoading, error } = useGetQuizz(token, quizId);
  const [start, setStart] = useState(false);
  const handleStartQuiz = () => {
    setStart(true);
  };

  return (
    <div className="pt-20 pb-5 px-5 bg-black h-[100dvh] text-white text-5xl overflow-y-scroll flex flex-col space-y-10 items-center">
      {!start ? (
        isLoading ? (
          <div className="h-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <QuizInstructions
            name={quizData.name}
            instructions={quizData.instructions}
            duration={quizData.duration}
            champScore={quizData.champScore}
            onStartQuiz={handleStartQuiz}
          />
        )
      ) : (
        <div className="h-full flex flex-col items-center justify-start pt-10 w-full">
          <QuizComponent
            questions={quizData.questions}
            quizzId={quizData._id}
          />
        </div>
      )}
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <CoursLayout>{page}</CoursLayout>;
};
