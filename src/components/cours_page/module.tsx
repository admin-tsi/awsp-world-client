import Book from '@/svg/book';
import Exam from '@/svg/exam';
import Video from '@/svg/video';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = {
  title: string;
  cours: string[];
  hasQuiz: boolean;
};

const Module = (props: Props) => {
  const { title, cours, hasQuiz } = props;
  const params = useSearchParams();
  const coursId = params.get('cours');
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
        {cours.map((course, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Video />
            <Link
              href={`/cours/lessons?microcredential=${microcredential}&cours=${course}`}
              className={course === coursId ? 'text-primary/80' : ''}
            >
              {course}
            </Link>
          </div>
        ))}
        {hasQuiz && (
          <div className="flex items-center space-x-2">
            <Exam />
            <span>Quiz</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Module;
