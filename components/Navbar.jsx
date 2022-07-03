import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href='/'>
          <h1>AYDev.</h1>
        </Link>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li>
            <Link href='/portfolio'>My Work</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
