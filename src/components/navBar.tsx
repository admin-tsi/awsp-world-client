import React from 'react';
import logo from '../../public/logo_AWSP.png';
import Image from 'next/image';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="w-full h-16 px-32 py-8 shadow-md flex items-center justify-between fixed top-0 z-50">
      <div>
        <Image src={logo} alt="Logo AWSP" />
      </div>
      <div>bar</div>
    </nav>
  );
};

export default NavBar;
