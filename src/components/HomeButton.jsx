import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => (
  <Link 
    to="/" 
    className="flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105"
    title="Return to Home"
  >
    <img 
      src="/images/Azur_Lane_English_Release_Logo.png" 
      alt="Blue Road eHP Logo" 
      className="w-20 h-15"
    />
  </Link>
);

export default HomeButton;