import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Process from './learninTabsContent.tsx/process';
import Complete from './learninTabsContent.tsx/complete';

type Props = {};

const LearningTabs = (props: Props) => {
  return (
    <div className="h-full px-2 pt-4 flex flex-col space-y-5">
      <div className="flex flex-col space-y-2">
        <span className="text-white font-bold text-4xl">My Learning</span>
        <span className="text-white text-1xl">
          The Knowledge Journey Begins: Embark on an Exciting Exploration into
          the Enriching World of Comprehensive Learning Experiences.
        </span>
      </div>
      <Tabs defaultValue="progress" className="w-full">
        <TabsList>
          <div className="bg-gradient-to-r from-[#E50E2D] to-[#F2DD66] w-fit h-fit p-[1px] rounded-full">
            <TabsTrigger value="progress">
              <span>In Progress</span>
            </TabsTrigger>
          </div>
          <div className="bg-gradient-to-r from-[#E50E2D] to-[#F2DD66] w-fit h-fit p-[1px] rounded-full">
            <TabsTrigger value="complete">
              <span>Complete</span>
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="progress" className="w-full">
          <Process />
        </TabsContent>
        <TabsContent value="complete">
          <Complete />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningTabs;
