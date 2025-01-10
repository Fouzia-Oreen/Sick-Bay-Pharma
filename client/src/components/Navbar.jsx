import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 shadow-md">
      <div className=" mx-auto px-4 flex items-center justify-between  py-4 gap-12">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">LOGO</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 ">
          <a href="#" className="text-gray-100 hover:text-gray-200">Home</a>
          <a href="#" className="text-gray-100 hover:text-gray-200">Collection</a>
          <a href="#" className="text-gray-100 hover:text-gray-200">About</a>
          <a href="#" className="text-gray-100 hover:text-gray-200">Terms & Conditions</a>
          <a href="#" className="text-gray-100 hover:text-gray-200">Offers</a>
          <a href="#" className="text-gray-100 hover:text-gray-200">Contact</a>
        </div>

        {/* Search Bar */}
        <div className="flex-1  hidden md:block max-w-96 ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons and Buttons */}
        <div className="flex items-center space-x-4  justify-between">

          {/* Wishlist */}
          <button className="relative ">
            <FaHeart className="text-gray-100 hover:text-gray-300 size-6" />
            <sup className="absolute inline-flex items-center justify-center size-5 text-xs font-bold text-white bg-red-500 rounded-full">2</sup>
          </button>

          {/* Cart */}
          <button className="relative">
            <FaShoppingCart className="text-gray-100 hover:text-gray-300 size-6" />
            <sup className="absolute  inline-flex items-center justify-center size-5  text-xs font-bold text-white bg-blue-500 rounded-full">3</sup>
          </button>

          <button className="text-indigo-600 hover:text-indigo-800 bg-slate-200 px-3 py-2 rounded-md font-bold"><Link to="/login" >Login</Link></button>
          <button className="text-indigo-600 hover:text-indigo-800 bg-slate-200 px-3 py-2 rounded-md font-bold"><Link to="/register" >Register</Link></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
