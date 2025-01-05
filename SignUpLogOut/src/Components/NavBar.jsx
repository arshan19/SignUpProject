import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-[67px] w-full px-6 bg-black border-b-2 border-white text-white">
      {/* Header Title */}
      <h3 className="text-xl font-semibold">Header</h3>
      
      {/* Navigation Links */}
      <div className="flex gap-8 text-sm">
        <Link 
          to="/signup" 
          className="hover:text-blue-400 transition duration-200"
        >
          Signup
        </Link>
        <Link 
          to="/profile" 
          className="hover:text-blue-400 transition duration-200"
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
