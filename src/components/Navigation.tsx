
import React from 'react';
import {Outlet, Route, Routes } from 'react-router-dom';
import { NavigationConstants } from '../constant/NavigationConstants';
import StartScreen from '../screens/StartScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ServicesScreenKitchen from '../screens/ServicesScreenKitchen';
import ServicesScreenBathroom from '../screens/ServicesScreenBathroom';
import ServicesScreenVeneer from '../screens/ServicesScreenVeneer';
import ServicesScreenWardrobes from '../screens/ServicesScreenWardrobes';
import ServicesScreenOffice from '../screens/ServicesScreenOffice';
import ServicesScreenUpholstery from '../screens/ServicesScreenUpholstery';


const Navigation: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={NavigationConstants.START} element={<StartScreen />} />
        <Route path={NavigationConstants.CONTACT} element={<ContactScreen />} />
        <Route path={NavigationConstants.ABOUT_US} element={<AboutUsScreen />} />
        <Route path={NavigationConstants.ORDERS} element={<OrdersScreen />} />
        <Route path={NavigationConstants.KITCHEN} element={<ServicesScreenKitchen />} />
        <Route path={NavigationConstants.BATHROOM} element={<ServicesScreenBathroom />} />
        <Route path={NavigationConstants.VENEER} element={<ServicesScreenVeneer />} />
        <Route path={NavigationConstants.WARDROBES} element={<ServicesScreenWardrobes />} />
        <Route path={NavigationConstants.OFFICE} element={<ServicesScreenOffice />} />
        <Route path={NavigationConstants.UPHOLSTERY} element={<ServicesScreenUpholstery />} />

        {/* Add Route components for Screen3 to Screen10 herep */}
      </Routes>
      <Outlet />
    </div>
  );
};

export default Navigation;
