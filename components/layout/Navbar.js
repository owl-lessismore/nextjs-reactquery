import Link from 'next/link';
import React from 'react';
import Logo from '../../images/owlLogo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>
        <a>
          <Image src={Logo} alt='logo' />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
