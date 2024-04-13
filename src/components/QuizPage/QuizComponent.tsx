import { submitQuizz } from '@/services/quizzeServices';
import { useBearStore } from '@/store/micro';
import React, { useState } from 'react';
import { AlertDestructive } from './QuizIncompleteWarning';
import { Button } from '../ui/button';
import Duration from './Duration';

interface Option {
  _id: string;
  option: string;
}

interface Answer {
  questionId: string;
  answer: string[];
}

interface QuizSubmission {
  quizzId: string;
  questionAnswers: Answer[];
}

interface Question {
  _id: string;
  question: string;
  options: Option[];
}

const QuizComponent: React.FC<{
  questions: Question[];
  quizzId: string;
  duration: string;
}> = ({ questions, quizzId, duration }) => {
  const [answers, setAnswers] = useState<string[][]>(questions.map(() => []));

  const [showIncompleteWarning, setShowIncompleteWarning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const token = useBearStore((state) => state.token);

  const handleOptionSelect = (questionIndex: number, optionValue: string) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const isSelected = newAnswers[questionIndex].includes(optionValue);
      if (isSelected) {
        newAnswers[questionIndex] = newAnswers[questionIndex].filter(
          (value) => value !== optionValue
        );
      } else {
        newAnswers[questionIndex] = [...newAnswers[questionIndex], optionValue];
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
      setShowIncompleteWarning(true);
      return;
    }
    setSubmitting(true);

    const submission: QuizSubmission = {
      quizzId,
      questionAnswers: questions.map((question, index) => ({
        questionId: question._id,
        answer: answers[index],
      })),
    };

    const res = await submitQuizz(token, submission);
    setSubmitting(false);
  };

  const hideIncompleteWarning = () => {
    setShowIncompleteWarning(false);
  };

  return (
    <>
      <div className="w-full flex justify-end items-center md:w-2/3">
        <div className="bg-gradient-to-r from-secondary to-primary p-[1px] rounded-md">
          <Duration duration={duration} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 md:w-2/3"
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
                    checked={answers[index].includes(option.option)}
                    onChange={() => handleOptionSelect(index, option.option)}
                    className="peer relative left-0 h-5 w-5 shrink-0 appearance-none rounded-sm border border-primary outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-primary/50 hover:ring hover:ring-primary"
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

      {showIncompleteWarning && (
        <div
          className={`h-fit w-fit absolute max-md:top-24 md:bottom-10 max-md:bg-background  md:right-5 z-10 transition-all duration-500 ease-in-out transform ${
            showIncompleteWarning ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <AlertDestructive onHideWarning={hideIncompleteWarning} />
        </div>
      )}
    </>
  );
};

export default QuizComponent;
