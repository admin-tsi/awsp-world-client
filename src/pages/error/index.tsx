import Error404 from '@/svg/error404';
import Image from 'next/image';
import Link from 'next/link';
import error from '../../../public/error.svg';
export default function Index() {
  return (
    <div className="h-screen container mx-auto flex items-center md:p-24">
      <Image src={error} alt="error svg" className="w-1/2 hidden md:block" />
      <div className="flex flex-col space-y-4 w-full md:w-1/2">
        <div className="flex flex-col space-y-2">
          <span className="text-white text-lg">Error 404</span>
          <div className="h-1 bg-primary w-20" />
        </div>
        <div>
          <h1 className="text-5xl md:text-8xl text-white/80">there</h1>
          <h1 className="text-5xl md:text-8xl text-white/80">is light</h1>
          <h1 className="text-5xl md:text-8xl text-white/80">in here too.</h1>
        </div>
        <span className="text-white text-xl md:text-1xl">
          But we can&apos;t authenticate you or something has gone wrong.
        </span>
        <div>
          {process.env.NEXT_PUBLIC_AWSP_AFRICA_URL ? (
            <Link
              href={process.env.NEXT_PUBLIC_AWSP_AFRICA_URL}
              className="text-3xl text-primary hover:cursor-pointer flex items-center space-x-2"
            >
              <span>Go back to home</span>
              <Error404 />
            </Link>
          ) : (
            <span>Go back to home</span>
          )}
        </div>
      </div>
    </div>
  );
}
