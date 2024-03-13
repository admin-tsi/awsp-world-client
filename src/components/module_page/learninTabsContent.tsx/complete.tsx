import { Button } from '@/components/ui/button';
import img2 from '../../../../public/image(3).png';

import React from 'react';
import Image from 'next/image';
import Trophy1 from '@/svg/trophy1';
import Trophy2 from '@/svg/trophy2';

type Props = {};

const Complete = (props: Props) => {
  return (
    <div className="w-full bg-white h-32 md:h-52 rounded-lg flex items-center p-2 md:p-4 max-md:space-x-2">
      <div className="w-1/2 md:w-1/6">
        <Image
          src={img2}
          alt="Module image"
          width={237}
          height={169}
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between h-full md:py-5 w-1/2 md:w-4/6">
        <div className="w-full flex items-center space-x-5">
          <span className="text-[#656565]">Norem ipsum dolor</span>
          <div className="w-[2px] bg-gradient-to-b from-[#E50E2D] to-[#F2DD66] h-5 hidden md:block"></div>
          <span className="text-[#656565] hidden md:block">AWSP</span>
        </div>
        <span className="text-[#3D3D3D] font-semibold text-[20px] md:text-[24px]">
          Worem ipsum dolor{' '}
        </span>
        <div className="w-full flex items-center space-x-2 md:hidden">
          <Trophy1 />
          <span>Congrate</span>
        </div>
        <div className="md:flex items-center hidden space-x-2 text-[#656565]">
          <Trophy2 />
          <span>
            Great Work! You have passed all requirements and can view your
            course certificate now.
          </span>
        </div>
      </div>
      <div className="w-1/6 items-center hidden md:flex">
        <div className="w-[2px] bg-gradient-to-b from-[#E50E2D] to-[#F2DD66] h-40"></div>
        <div className="w-full flex flex-col space-y-4 relative justify-center items-center">
          <Button className="text-neutral font-semibold w-[228px] h-[65px] text-[24px]">
            View Certificate
          </Button>
          <span className="text-[#656565] text-[20px]">Rate</span>
        </div>
      </div>
    </div>
  );
};

export default Complete;
