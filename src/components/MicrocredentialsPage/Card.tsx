import Lock from '@/svg/lock';
import Unlock from '@/svg/unlock';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  microCredential: {
    title: string;
    thumbnail: string;
  };
  accessStatus: boolean;
  microCredentialId: string;
  currentId: string;
};

const Card = ({
  microCredential,
  accessStatus,
  microCredentialId,
  currentId,
}: Props) => {
  return accessStatus ? (
    <Link
      href={`/course?microcredential=${microCredentialId}&cours=${currentId}`}
      className="bg-gradient-to-r from-secondary to-primary md:h-72 md:w-64 w-full rounded-lg p-[1px] cursor-pointer"
    >
      <div className="h-3/5 w-full rounded-t-lg relative">
        <Image
          src={microCredential.thumbnail}
          alt={microCredential.title}
          className="rounded-t-lg h-full w-full object-cover"
          width={250}
          height={260}
        />
        <div className="absolute top-1 right-1 bg-background rounded-lg p-2">
          <Unlock />
        </div>
      </div>
      <div className="h-2/5 bg-background rounded-b-lg flex items-center justify-center">
        <span className="h-full w-full bg-neutral rounded-b-lg text-white flex items-center justify-center py-5">
          {microCredential.title}
        </span>
      </div>
    </Link>
  ) : (
    <div className="bg-gradient-to-r from-secondary to-primary md:h-72 md:w-64 w-full rounded-lg p-[1px] cursor-pointer">
      <div className="h-3/5 w-full rounded-t-lg relative">
        <Image
          src={microCredential.thumbnail}
          alt={microCredential.title}
          className="rounded-t-lg h-full w-full object-cover"
          width={250}
          height={260}
        />
        <div className="absolute top-1 right-1 bg-background rounded-lg p-2">
          <Lock />
        </div>
      </div>
      <div className="h-2/5 bg-background rounded-b-lg flex items-center justify-center">
        <span className="h-full w-full bg-neutral rounded-b-lg text-white flex items-center justify-center py-5">
          {microCredential.title}
        </span>
      </div>
    </div>
  );
};

export default Card;
