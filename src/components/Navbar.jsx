import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">Aesop</Link>
        </div>

        {/* Menu */}
        <div className="space-x-8 hidden lg:flex">
          <Link to="/products" className="text-gray-600 hover:text-black">Products</Link>
          <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
          <Link to="/login" className="text-gray-600 hover:text-black">Login</Link>
          <Link to="/register" className="text-gray-600 hover:text-black">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
