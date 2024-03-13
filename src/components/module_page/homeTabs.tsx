import React from 'react';
import Card from './microcredentialsCard/card';
import CardSkeleton from './microcredentialsCard/cardSkeleton';
import { useAppContext } from '@/context/user-context';
import { useGetMicrocredentials } from '@/services/microcredentials';
import { MicroCredentialData } from '@/types/microCredentialObject';

const HomeTabs = () => {
  const { token } = useAppContext();
  const {
    data: microcredentialsData,
    isLoading,
    error,
  } = useGetMicrocredentials(token);

  console.log(microcredentialsData);
  return (
    <div className="h-full px-2 pt-4">
      <div className="flex flex-col space-y-2">
        <span className="text-white font-bold text-4xl">
          All Microcredentials
        </span>
        <span className="text-white text-1xl">
          The Adventure Awaits: Explore the Thrilling Realm of Comprehensive
          Sports Training Education.
        </span>
      </div>
      {isLoading ? (
        <div className="py-5 flex flex-col md:flex-row max-md:space-y-3 md:space-x-3">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="py-5 flex flex-col md:flex-row max-md:space-y-3 md:space-x-3">
          {microcredentialsData.map((microcredential: MicroCredentialData) => (
            <Card
              key={microcredential.micro_credential._id}
              microCredential={microcredential.micro_credential}
              accessStatus={microcredential.accessStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeTabs;
