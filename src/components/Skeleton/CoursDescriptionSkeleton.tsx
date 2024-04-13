import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {};

const CoursDescriptionSkeleton = (props: Props) => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-8 w-[250px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};

export default CoursDescriptionSkeleton;
