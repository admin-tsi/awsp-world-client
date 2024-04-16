import { useAppContext } from '@/context/user-context';
import Image from 'next/image';
import error from '../../../public/error.svg';
export default function Index() {
  const { token } = useAppContext();
  return (
    <div className="h-screen w-full flex items-center p-24">
      <Image src={error} alt="error svg" />
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <span className="text-white text-lg">Error 404</span>
          <div className="h-1 bg-primary w-20" />
        </div>
        <div>
          <h1 className="text-8xl text-white/80">there is</h1>
          <h1 className="text-8xl text-white/80">light in here too.</h1>
        </div>
        <span className="text-white text-1xl">
          But the page is missing or you assembled the link incorrectly.
        </span>
        <div>
          <button className="text-3xl text-primary hover:cursor-pointer flex items-center space-x-2">
            <span>Go back to home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
