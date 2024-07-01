import { submitQuizz } from '@/services/quizServices';
import { useBearStore } from '@/store/micro';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { AlertDestructive } from './QuizIncompleteWarning';
import QuizResult from './QuizResult';
import {
  Question,
  QuizSubmission,
  QuizSubmissionResponse,
} from '@/types/quizInterfaces';
import { useSearchParams } from 'next/navigation';

const QuizComponent: React.FC<{
  questions: Question[];
  quizzId: string;
  duration: string;
}> = ({ questions, quizzId, duration }) => {
  const [answers, setAnswers] = useState<number[][]>(questions.map(() => []));
  const [submit, setSubmit] = useState(false);
  const searchParams = useSearchParams();
  const microId = searchParams.get('microcredential');

  const [submissionResponse, setSubmissionResponse] =
    useState<QuizSubmissionResponse | null>(null);
  const [showIncompleteWarning, setShowIncompleteWarning] = useState<{
    show: boolean;
    errorMessage: string;
  }>({ show: false, errorMessage: '' });
  const [submitting, setSubmitting] = useState(false);
  const token = useBearStore((state) => state.token);

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const isSelected = newAnswers[questionIndex].includes(optionIndex);
      if (isSelected) {
        newAnswers[questionIndex] = newAnswers[questionIndex].filter(
          (index) => index !== optionIndex
        );
      } else {
        newAnswers[questionIndex] = [...newAnswers[questionIndex], optionIndex];
      }
      return newAnswers;
    });
  };

  const isAllQuestionsAnswered = (): boolean => {
    return answers.every((answer) => answer.length > 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAllQuestionsAnswered()) {
      setShowIncompleteWarning({
        show: true,
        errorMessage: 'You must answer all questions before submitting.',
      });
      return;
    }
    setShowIncompleteWarning({ show: false, errorMessage: '' });
    setSubmitting(true);

    const submission: QuizSubmission = {
      quizzId,
      questionAnswers: questions.map((question, index) => ({
        questionId: question._id,
        answer: answers[index],
      })),
      microId,
    };

    console.log(submission);

    try {
      const res: QuizSubmissionResponse = await submitQuizz(token, submission);
      setSubmissionResponse(res);
      setSubmit(true);
    } catch (error) {
      setSubmissionResponse(null);
      setShowIncompleteWarning({
        show: true,
        errorMessage: 'An error occurred while submitting the quiz.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const hideIncompleteWarning = () => {
    setShowIncompleteWarning({ show: false, errorMessage: '' });
  };

  return (
    <>
      {submit ? (
        <QuizResult result={submissionResponse} />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 md:w-2/3 justify-center pt-12"
        >
          {questions.map((question, index) => (
            <div key={question._id} className="space-y-2">
              <h2 className="text-xl md:text-[30px] text-primary/80">
                Question {index + 1} : {question.question}
              </h2>
              <div className="flex flex-col space-y-4 py-4">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={option._id}
                    className="flex items-center space-x-2 px-8"
                  >
                    <input
                      type="checkbox"
                      id={`question_${index}_option_${optionIndex}`}
                      checked={answers[index].includes(optionIndex)}
                      onChange={() => handleOptionSelect(index, optionIndex)}
                      className="peer relative left-0 h-5 w-5 shrink-0 appearance-none rounded-sm border border-primary outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiPjx0aXRsZT5pY29uX2J5X1Bvc2hsZGlha292MTA8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2LjAwMDAwMCwgMjYuMDAwMDAwKSI+PHBhdGggZD0iTTE3Ljk5OTk4NzgsMzIuNCBMMTAuOTk5OTg3OCwyNS40IEMxMC4yMjY3ODkxLDI0LjYyNjgwMTQgOC45NzMxODY0NCwyNC42MjY4MDE0IDguMTk5OTg3NzksMjUuNCBMOD4xOTk5ODc3OSwyNS40IEM3LjQyNjc4OTE0LDI2LjE3MzE5ODYgNy40MjY3ODkxNCwyNy40MjY4MDE0IDguMTk5OTg3NzksMjguMiBMMTYuNTg1Nzc0MiwzNi41ODU3ODY0IEMxNy4zNjY4MjI4LDM3LjM2NjgzNSAxOC42MzMxNTI4LDM3LjM2NjgzNSAxOS40MTQyMDE0LDM2LjU4NTc4NjQgTDQwLjU5OTk4NzgsMTUuNCBDNDEuMzczMTg2NCwxNC42MjY4MDE0IDQxLjM3MzE4NjQsMTMuMzczMTk4NiA0MC41OTk5ODc4LDEyLjYgTDQwLjU5OTk4NzgsMTIuNiBDMzkuODI2Nzg5MSwxMS44MjY4MDE0IDM4LjU3MzE4NjQsMTEuODI2ODAxNCAzNy43OTk5ODc4LDEyLjYgTDE3Ljk5OTk4NzgsMzIuNCBaIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-primary/50 hover:ring hover:ring-primary"
                    />
                    <label
                      htmlFor={`question_${index}_option_${optionIndex}`}
                      className="text-[20px]"
                    >
                      {option.option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="w-full h-fit flex items-center justify-end">
            {' '}
            <Button variant="start" type="submit">
              {submitting ? (
                <span className="animate-pulse">Submitting ...</span>
              ) : (
                <span>Submit</span>
              )}
            </Button>
          </div>
        </form>
      )}

      {showIncompleteWarning.show && (
        <div
          className={`h-fit w-fit absolute max-md:top-24 md:top-28 max-md:bg-background  md:right-5 z-10 transition-all duration-500 ease-in-out transform ${
            showIncompleteWarning.show ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <AlertDestructive
            onHideWarning={hideIncompleteWarning}
            description={showIncompleteWarning.errorMessage}
          />
        </div>
      )}
    </>
  );
};

export default QuizComponent;
