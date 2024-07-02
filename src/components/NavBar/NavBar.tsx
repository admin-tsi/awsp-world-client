import { Button } from '@/components/ui/button';
import AuthAPI from '@/services/auth/initUser';
import ExitIcon from '@/svg/exitIcon';
import Image from 'next/image';
import logo from '../../../public/logo_AWSP.png';

type Props = {};

const NavBar = (props: Props) => {
  const handleLogout = () => {
    AuthAPI.logout();
  };
  return (
    <nav className="w-full bg-background h-20 px-2 md:px-32 py-2 shadow-md flex items-center justify-between fixed top-0 z-50">
      <div className="flex items-center space-x-5">
        <Image src={logo} alt="Logo AWSP" />
      </div>
      <div className="flex space-x-2">
        <Button variant="navButton" onClick={handleLogout}>
          <ExitIcon />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
