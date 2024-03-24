'use client';
import { useAppContext } from '@/context/user-context';
import { useGetMicrocredentialsContent } from '@/services/microcredentials';
import { useSearchParams } from 'next/navigation';
import SidebarDesktop from '../sidebar-desktop';
import CourseNav from '../courseNav';
import { useState } from 'react';
import ToggleButton from '../toggleMobileSidBar';
import MobileSideBar from '../mobileSideBar';

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
    <main lang="en" className="flex">
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
