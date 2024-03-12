import { useState, type ReactElement } from 'react';
import ModuleLayout from '@/components/layouts/moduleLayout';
import { useAppContext } from '@/context/user-context';
import { NextPageWithLayout } from '@/pages/_app';
import { Button } from '@/components/ui/button';
import HomeTabs from '@/components/module_page/homeTabs';
import LearningTabs from '@/components/module_page/learningTabs';
import Accomplishments from '@/components/module_page/accomplishments';

const Page: NextPageWithLayout = () => {
  const { hello } = useAppContext();
  const [activeTab, setActiveTab] = useState('Home');
  let content = null;

  switch (activeTab) {
    case 'Home':
      content = <HomeTabs />;
      break;
    case 'My Learning':
      content = <LearningTabs />;
      break;
    case 'Accomplishments':
      content = <Accomplishments />;
      break;
    default:
      content = null;
  }
  return (
    <div className="h-[100dvh] pt-32 px-2 md:px-32 w-full flex flex-col">
      <div>
        <div className="flex">
          <div className="relative">
            <Button
              variant="moduleTab"
              size="moduleTabEl"
              onClick={() => setActiveTab('Home')}
            >
              Home
            </Button>
            {activeTab === 'Home' && (
              <div className="absolute bg-gradient-to-r from-secondary to-primary h-2 w-full bottom-0 rounded-t-lg"></div>
            )}
          </div>
          <div className="relative">
            <Button
              variant="moduleTab"
              size="moduleTabEl"
              onClick={() => setActiveTab('My Learning')}
            >
              My Learning
            </Button>
            {activeTab === 'My Learning' && (
              <div className="absolute bg-gradient-to-r from-secondary to-primary h-2 w-full bottom-0 rounded-t-lg"></div>
            )}
          </div>
          <div className="relative">
            <Button
              variant="moduleTab"
              size="moduleTabEl"
              onClick={() => setActiveTab('Accomplishments')}
            >
              Certifications
            </Button>
            {activeTab === 'Accomplishments' && (
              <div className="absolute bg-gradient-to-r from-secondary to-primary h-2 w-full bottom-0 rounded-t-lg"></div>
            )}
          </div>
        </div>
        <div className="w-full h-[1.5px] bg-gradient-to-r from-secondary to-primary"></div>
        <div className="mt-4">{content}</div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <ModuleLayout>{page}</ModuleLayout>;
};

export default Page;
