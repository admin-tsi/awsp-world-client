import React from 'react';
import kyny from '../../../../public/kinesiotaping-physical-therapist-applying-tape-260nw-285211592.webp';
import Image from 'next/image';

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary md:h-72 md:w-64 w-full rounded-lg p-[1px]">
      <div className="h-3/5 w-full rounded-t-lg">
        <Image
          src={kyny}
          alt="kyny"
          className="rounded-t-lg h-full w-full object-cover"
          width={250}
          height={260}
        />
      </div>
      <div className="h-2/5 bg-background rounded-b-lg flex items-center justify-center">
        <span className="h-full w-full bg-neutral rounded-b-lg text-white flex items-center justify-center py-5">
          kynosyologies
        </span>
      </div>
    </div>
  );
};

export default Card;
