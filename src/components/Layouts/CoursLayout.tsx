'use client';
import { useAppContext } from '@/context/user-context';
import { cn } from '@/lib/utils';
import { useGetMicrocredentialsContent } from '@/services/microcredentials';
import localFont from 'next/font/local';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import CourseNav from '../NavBar/CourseNav';
import SidebarDesktop from '../SideBar/DesktopSidebar';
import MobileSideBar from '../SideBar/MobileSideBar';
import ToggleButton from '../SideBar/ToggleMobileSidBar';

const sairaFont = localFont({
  variable: '--saira-font',
  display: 'swap',
  src: [
    {
      path: '../../fonts/Saira-VariableFont_wdth,wght.ttf',
      weight: 'variable',
    },
  ],
});

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <main lang="en" className={cn('flex', sairaFont.variable)}>
      <div className="w-1/6 hidden md:block">
        <SidebarDesktop />
      </div>
      <div className="w-full md:w-5/6 h-[100dvh] relative">
        <CourseNav />
        <ToggleButton onClick={toggleSidebar} />
        <MobileSideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />

        {children}
      </div>
    </main>
  );
}
