import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useAppContext } from '@/context/user-context';
import { useGetMicrocredentials } from '@/services/microcredentials';
import React from 'react';
import CardSkeleton from '../Skeleton/CardSkeleton';
import Card from './Card';

const HomeTabs = () => {
  const { token } = useAppContext();

  const {
    data: microcredentialsData,
    isLoading,
    error,
  } = useGetMicrocredentials(token);

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
          {microcredentialsData.map((microcredential: any) => {
            const firstCourseId =
              microcredential.modules && microcredential.modules.length > 0
                ? microcredential.modules[0].module.cours
                : null;
            return (
              <React.Fragment key={microcredential.micro_credential._id}>
                {microcredential.accessStatus ? (
                  <Card
                    microCredential={microcredential.micro_credential}
                    accessStatus={microcredential.accessStatus}
                    microCredentialId={microcredential.micro_credential._id}
                    currentId={firstCourseId}
                  />
                ) : (
                  <AlertDialog key={microcredential.micro_credential._id}>
                    <AlertDialogTrigger asChild>
                      <button>
                        <Card
                          microCredential={microcredential.micro_credential}
                          accessStatus={microcredential.accessStatus}
                          microCredentialId={
                            microcredential.micro_credential._id
                          }
                          currentId={firstCourseId}
                        />
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="font-sans">
                          Access Denied
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-white/80 font-sans">
                          You do not have permission to access this content.
                          Please purchase the appropriate subscription to
                          continue. You can do so from your member space.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="font-sans">
                          Cancel
                        </AlertDialogCancel>
                        {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomeTabs;
