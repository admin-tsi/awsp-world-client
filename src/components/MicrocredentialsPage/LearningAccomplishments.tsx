import Image from 'next/image';
import img2 from '../../../public/image(3).png';
import Link from 'next/link';
import Facebook from '@/svg/facebook';
import Instagram from '@/svg/instagram';
import Linkedin from '@/svg/linkedin';

type Props = {};

const LearningAccomplishments = (props: Props) => {
  return (
    <div className="w-full bg-white h-32 md:h-52 rounded-lg flex items-center p-2 md:p-4 max-md:space-x-2 relative">
      <div className="w-1/2 md:w-1/6">
        <Image
          src={img2}
          alt="Module image"
          width={237}
          height={169}
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between h-full py-4 md:py-5 w-1/2 md:w-4/6">
        <span className="text-[#3D3D3D] font-semibold text-[18px] md:text-[24px]">
          Worem ipsum dolor{' '}
        </span>
        <div className="w-full flex space-x-2 font-semibold md:text-[24px]">
          <span className="text-[#656565]">Grade Achieved:</span>
          <span className="text-secondary">88%</span>
        </div>
        <div className="w-full items-center space-x-5 flex">
          <span className="text-[#656565]">Norem ipsum dolor</span>
          <div className="w-[2px] bg-gradient-to-b from-[#E50E2D] to-[#F2DD66] h-5 hidden md:block"></div>
          <span className="text-[#656565] hidden md:block">AWSP</span>
        </div>
      </div>

      <div className="w-1/6 items-center hidden md:flex">
        <div className="bg-gradient-to-r from-[#E50E2D] to-[#F2DD66] w-[245px] h-[96px] rounded-lg flex justify-center p-[1px] items-center">
          <div className="w-full h-full bg-white rounded-lg flex flex-col justify-center items-center space-y-2">
            <span className="text-[24px] font-semibold text-neutral">
              Share with
            </span>
            <div className="flex justify-center items-center space-x-2">
              <Link
                href="#"
                className="h-8 w-8 p-2 bg-primary rounded-full flex justify-center items-center"
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                className="h-8 w-8 p-2 bg-primary rounded-full flex justify-center items-center"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="h-8 w-8 p-2 bg-primary rounded-full flex justify-center items-center"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningAccomplishments;
