import React from 'react';
import NavigationItem from './NavigationItem';
import { FaHome, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import CustomButton from './CustomButton';

function NavigationBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
       

          <NavigationItem to="/" icon={FaHome}>Home</NavigationItem>
          <NavigationItem to="/login" icon={FaSignInAlt}>Sign In</NavigationItem>
          <NavigationItem to="/register" icon={FaSignOutAlt}>Sign Up</NavigationItem>
          <NavigationItem to="/user" icon={FaSignOutAlt}>Profile</NavigationItem>
          <CustomButton color= 'red'>Sign Out</CustomButton>
       
        
      </div>
    </nav>
  );
}

export default NavigationBar;
