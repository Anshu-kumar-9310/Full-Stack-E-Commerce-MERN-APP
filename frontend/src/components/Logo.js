import React from 'react';
import logo from '../assest/logo.png'; // Adjust the path if needed

const Logo = ({ w, h }) => {
  return (
    <img 
      src={logo} 
      alt="Logo" 
      width={w} 
      height={h} 
      
    />
  );
};

export default Logo;
