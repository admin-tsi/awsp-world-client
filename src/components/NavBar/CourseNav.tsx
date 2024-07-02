import ArrowNav from '@/svg/arrowNav';
import BelIcon from '@/svg/belIcon';
import ExitIcon from '@/svg/exitIcon';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo_AWSP.png';
import { Button } from '../ui/button';
import AuthAPI from '@/services/auth/initUser';

type Props = {};

const CourseNav = (props: Props) => {
  const handleLogout = () => {
    AuthAPI.logout();
  };

  return (
    <nav className="w-full bg-background absolute top-0 z-50 h-20 px-5 flex items-center justify-between shadow">
      <div className="hidden md:flex items-center space-x-4 cursor-pointer">
        <div className="bg-white/75 h-10 w-10 rounded-full flex justify-center items-center">
          <ArrowNav />
        </div>
        <Link href="/microcredentials" className="text-primary font-sans">
          All microcredentials
        </Link>
      </div>
      <div className="flex md:hidden items-center space-x-5">
        <Image src={logo} alt="Logo AWSP" />
      </div>
      <div className="flex items-center space-x-5">
        <div className="flex space-x-2">
          <Button variant="navButton" onClick={handleLogout}>
            <ExitIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default CourseNav;
