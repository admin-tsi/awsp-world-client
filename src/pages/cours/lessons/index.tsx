import CoursLayout from '@/components/layouts/coursLayout';
import { ReactElement } from 'react';

export default function Page() {
  return <div>Oloni</div>;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <CoursLayout>{page}</CoursLayout>;
};
