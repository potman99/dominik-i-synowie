// src/NavigationMenu.tsx
import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import text from '../constant/text.json'
import {NavigationConstants} from '../constant/NavigationConstants'

const Navbar: React.FC = () => {
  return (
    <div className="dropdown-menu absolute z-40">
      <ul className='flex flex-col bg-darkBrown p-4 rounded-lg'>
        <DropdownMenuItem componentText={text.navbar.kitchen} linkName={NavigationConstants.KITCHEN}/>
        <DropdownMenuItem componentText={text.navbar.bathroom} linkName={NavigationConstants.BATHROOM}/>
        <DropdownMenuItem componentText={text.navbar.veneer} linkName={NavigationConstants.VENEER}/>
        <DropdownMenuItem componentText={text.navbar.office} linkName={NavigationConstants.OFFICE}/>
        <DropdownMenuItem componentText={text.navbar.upholstery} linkName={NavigationConstants.UPHOLSTERY}/>
        <DropdownMenuItem componentText={text.navbar.wardrobes} linkName={NavigationConstants.WARDROBES}/>

      </ul>
    </div>
  );
};

export default Navbar;
