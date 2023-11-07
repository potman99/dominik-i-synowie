// src/NavigationMenu.tsx
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { NavigationConstants } from '../constant/NavigationConstants';
import text from '../constant/text.json'
import NavItem from "./NavItem"
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { easeIn, motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

const NavigationMenu: React.FC = () => {
    
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
      setDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
    <ul className="font-headers hidden md:flex items-center gap-4 text-2xl z-40">
        <NavItem name={text.navbar.start} linkName={NavigationConstants.START} />
        <NavItem name={text.navbar.aboutus} linkName={NavigationConstants.ABOUT_US} />
        <div 
          className="menu h-9"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        {text.navbar.services}
          {isDropdownVisible && <DropdownMenu />}
        </div>        
        <NavItem name={text.navbar.orders} linkName={NavigationConstants.ORDERS} />
        <NavItem name={text.navbar.contact} linkName={NavigationConstants.CONTACT} />
    </ul>
    {!isOpen ? (<div className="md:hidden absolute top-12 right-6 z-50">
            <button className="text-black text-3xl cursor-pointer" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
    </div>): (<div className="md:hidden absolute top-2 right-6 z-50">
            <button className="text-lightBrown text-3xl cursor-pointer" onClick={toggleMenu}>
              <i className="fas fa-times"></i>
            </button>
    </div>)}

     {/* Responsive mobile menu */}
     {isOpen && (
        <div className="absolute md:hidden w-screen h-screen bg-darkBrown z-40">
          <ul className="flex flex-col items-center py-4 space-y-4 text-xl text-lightBrown font-headers mt-10">
          <NavItem name={text.navbar.start} linkName={NavigationConstants.START} onClick={toggleMenu}/>
          <NavItem name={text.navbar.aboutus} linkName={NavigationConstants.ABOUT_US} onClick={toggleMenu}/>
          <NavItem name={text.navbar.kitchen} linkName={NavigationConstants.KITCHEN} onClick={toggleMenu}/>
          <NavItem name={text.navbar.bathroom} linkName={NavigationConstants.BATHROOM} onClick={toggleMenu}/>
          <NavItem name={text.navbar.veneer} linkName={NavigationConstants.VENEER} onClick={toggleMenu}/>
          <NavItem name={text.navbar.office} linkName={NavigationConstants.OFFICE} onClick={toggleMenu}/>
          <NavItem name={text.navbar.upholstery} linkName={NavigationConstants.UPHOLSTERY} onClick={toggleMenu}/>
          <NavItem name={text.navbar.wardrobes} linkName={NavigationConstants.WARDROBES} onClick={toggleMenu}/> 
          <NavItem name={text.navbar.orders} linkName={NavigationConstants.ORDERS} onClick={toggleMenu}/>
          <NavItem name={text.navbar.contact} linkName={NavigationConstants.CONTACT} onClick={toggleMenu}/>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavigationMenu;
