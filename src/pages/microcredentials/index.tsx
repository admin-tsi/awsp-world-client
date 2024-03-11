import type { ReactElement } from 'react';
import ModuleLayout from '@/components/layouts/moduleLayout';
import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
  return <div className="h-[100dvh] pt-20 px-32">hello world</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <ModuleLayout>{page}</ModuleLayout>;
};

export default Page;
