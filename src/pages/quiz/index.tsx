import CoursLayout from '@/components/Layouts/CoursLayout';
import QuizComponent from '@/components/QuizPage/QuizComponent';
import QuizInstructions from '@/components/QuizPage/QuizInstruction';
import { useGetQuizz } from '@/services/quizServices';
import { useBearStore } from '@/store/micro';
import Loading from '@/svg/loading';
import { useSearchParams } from 'next/navigation';
import { ReactElement, useState } from 'react';

export default function Page() {
  const params = useSearchParams();
  const searchParams = useSearchParams();
  const quizId = params.get('quiz');
  const token = useBearStore((state) => state.token);
  const microcredential = searchParams.get('microcredential');
  const {
    data: quizData,
    isLoading,
    error,
  } = useGetQuizz(token, quizId, microcredential);

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
            name={quizData?.quizz?.name}
            instructions={quizData?.quizz?.instructions}
            duration={quizData?.quizz?.duration}
            champScore={quizData?.quizz?.champScore}
            status={quizData?.quizz_status}
            quizzReviewDate={quizData?.quizz_review_date}
            onStartQuiz={handleStartQuiz}
          />
        )
      ) : (
        <div className="h-full flex flex-col items-center justify-start pt-10 w-full">
          {quizData && (
            <QuizComponent
              questions={quizData?.quizz?.questions}
              quizzId={quizData?.quizz?._id}
              duration={quizData?.quizz?.duration}
            />
          )}
        </div>
      )}
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <CoursLayout>{page}</CoursLayout>;
};
