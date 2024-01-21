// src/NavigationMenu.tsx
import React from 'react';
import NavigationMenu from './NavigationMenu';
import LogoImg from '../assets/new_logo.jpeg'

const Navbar: React.FC = () => {

  return (
    <div className="mx-0 flex flex-row justify-between md:mx-32 md:justify-between z-40">
        <div>
          <img src={LogoImg} alt='logo' className="w-64 xl:w-96 h-full"/>
        </div>
      <NavigationMenu />
    </div>
  );
};

export default Navbar;
