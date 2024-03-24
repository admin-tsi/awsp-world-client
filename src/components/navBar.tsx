import React from 'react';
import logo from '../../public/logo_AWSP.png';
import Image from 'next/image';
import SearchBar from './searchBar';
import { Button } from '@/components/ui/button';
import BelIcon from '@/svg/belIcon';
import ExitIcon from '@/svg/exitIcon';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="w-full bg-background h-20 px-2 md:px-32 py-2 shadow-md flex items-center justify-between fixed top-0 z-50">
      <div className="flex items-center space-x-5">
        <Image src={logo} alt="Logo AWSP" />
        <SearchBar />
      </div>
      <div className="flex space-x-2">
        <Button variant="navButton">
          <BelIcon />
        </Button>
        <Button variant="navButton">
          <ExitIcon />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
