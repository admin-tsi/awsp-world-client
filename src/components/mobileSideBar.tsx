import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetMicrocredentialsContent } from '@/services/microcredentials';
import { useBearStore } from '@/store/micro';
import BackMobile from '@/svg/backMobile';
import Loading from '@/svg/loading';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import Module from './cours_page/module';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSideBar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const params = useSearchParams();
  const token = useBearStore((state) => state.token);
  const router = useRouter();

  const microcredential = params.get('microcredential');
  const {
    data: microcredentialsData,
    isLoading,
    error,
  } = useGetMicrocredentialsContent(token, microcredential);

  useEffect(() => {
    const handleRouteChange = () => {
      if (isOpen) {
        onClose();
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isOpen, onClose, router]);

  return (
    <div
      className={`bg-[#02020293] text-white h-full w-full flex justify-end z-50 fixed top-0 right-0 transition-all duration-300 ease-in-out transform ${
        isOpen ? '-translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="bg-background h-full w-2/3">
        <div className="shadow flex items-center justify-between px-3 py-5 text-primary">
          <span>Course Content</span>
          <button onClick={onClose} className="text-primary text-lg">
            <BackMobile />
          </button>
        </div>
        {isLoading ? (
          <div className="h-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="mx-3 flex flex-col space-y-10">
            {microcredentialsData &&
              microcredentialsData.modules.map((module: any) => (
                <Module
                  key={module._id}
                  title={module.title}
                  cours={module.cours}
                  hasQuiz={module.quizz !== undefined}
                  quizId={module.quizz}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSideBar;
