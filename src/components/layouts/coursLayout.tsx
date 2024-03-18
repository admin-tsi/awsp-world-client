import { useAppContext } from '@/context/user-context';
import { useGetMicrocredentialsContent } from '@/services/microcredentials';
import { useSearchParams } from 'next/navigation';
import SidebarDesktop from '../sidebar-desktop';
import CourseNav from '../courseNav';

export default function CoursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useSearchParams();
  const { token } = useAppContext();
  console.log(token);

  const microcredential = params.get('microcredential');
  const {
    data: microcredentialsData,
    isLoading,
    error,
  } = useGetMicrocredentialsContent(token, microcredential);
  console.log(microcredentialsData);
  return (
    <main lang="en" className="flex">
      <div className="w-1/6 hidden md:block">
        <SidebarDesktop />
      </div>
      <div className="w-full md:w-5/6 h-[100dvh] relative">
        <CourseNav />
        {children}
      </div>
    </main>
  );
}
