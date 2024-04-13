import Book from '@/svg/book';
import Exam from '@/svg/exam';
import Video from '@/svg/video';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Course = {
  _id: string;
  title: string;
  video: string;
  description: string;
  __v: number;
};

type Props = {
  title: string;
  cours: Course | null;
  hasQuiz: boolean;
  quizId?: string;
};

const Module = (props: Props) => {
  const { title, cours, hasQuiz, quizId } = props;
  const params = useSearchParams();
  const coursId = params.get('cours');
  const quiz = params.get('quiz');
  const microcredential = params.get('microcredential');

  return (
    <div className="flex flex-col text-white space-y-5 mt-10">
      <div className="flex items-center justify-between">
        <h1 className="w-3/5">{title}</h1>
        <div className="w-1/5">
          <Book />
        </div>
      </div>
      <div className="flex flex-col pl-3 text-sm space-y-3">
        {Array.isArray(cours) ? (
          cours.map((course, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Video />
              <Link
                href={`/course?microcredential=${microcredential}&cours=${course._id}`}
                className={course._id === coursId ? 'text-primary/80' : ''}
              >
                {course.title}
              </Link>
            </div>
          ))
        ) : (
          <Link
            href={`/course?microcredential=${microcredential}&cours=${cours?._id}`}
            className="flex items-center space-x-2"
          >
            <Video />
            <span className={cours?._id === coursId ? 'text-primary/80' : ''}>
              {cours?.title}
            </span>
          </Link>
        )}
        {hasQuiz && (
          <div className="flex items-center space-x-2">
            <Exam />
            <Link
              href={`/quiz?microcredential=${microcredential}&quiz=${quizId}`}
              className={quiz === quizId ? 'text-primary/80' : ''}
            >
              Quiz
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Module;
