import React from 'react';
import img2 from '../../../public/image(3).png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Props = {};

const Process = (props: Props) => {
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

      <div className="flex flex-col justify-between h-full md:py-5 md:px-5 w-1/2 md:w-4/6">
        <div className="w-full flex items-center space-x-5">
          <span className="text-[#656565]">Norem ipsum dolor</span>
          <div className="w-[2px] bg-gradient-to-b from-[#E50E2D] to-[#F2DD66] h-5 hidden md:block"></div>
          <span className="text-[#656565] hidden md:block">AWSP</span>
        </div>
        <span className="text-[#3D3D3D] font-semibold text-[20px] md:text-[24px]">
          Worem ipsum dolor{' '}
        </span>
        <span className="text-[#656565] md:hidden">2hr</span>
        <div className="flex max-md:hidden items-center space-x-6 text-[#656565]">
          <span>Horem ipsum dolor sit amet, consectetur adipiscing elit</span>
          <span>2hr</span>
        </div>
      </div>

      <div className="w-[2px] bg-gradient-to-b from-[#E50E2D] to-[#F2DD66] h-40 mr-2 hidden md:flex"></div>
      <div className="w-1/6 items-center hidden md:flex">
        <div className="w-full flex flex-col space-y-4 relative justify-center items-center">
          <Button className="text-neutral font-semibold w-[228px] h-[65px] text-[24px]">
            Go To Course
          </Button>
          <span className="text-[#656565] text-[20px]">Reset date</span>
        </div>
      </div>
    </div>
  );
};

export default Process;
