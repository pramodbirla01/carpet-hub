// src/components/Nav.jsx
import React, { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg flex  justify-between gap-10 text-sm text-black items-center py-1">
      {/* Left Side - Logo and Mobile Menu */}
      <div className="flex items-center">
        {/* Mobile Menu Icon and Search Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2 focus:outline-none relative">
            {/* Icon change based on menu state */}
            <i className={`ri-menu-fill text-2xl transition-transform duration-300 ${menuOpen ? 'hidden' : 'block'}`}></i>
            <i className={`ri-close-fill text-2xl transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'}`}></i>
          </button>
          <button onClick={toggleSearch} className="p-2 focus:outline-none ml-2">
            <i className="ri-search-line text-2xl"></i>
          </button>
        </div>
        
        {/* Logo */}
        <img src="https://www.shutterstock.com/image-vector/magic-lamp-witchcraft-icon-vector-600nw-2344072529.jpg" alt="" className='w-16 mx-20' />
        
      </div>

      {/* Center - Navigation Links (Desktop) */}
      <div className="flex-grow hidden md:flex justify-end pr-20 font-semibold items-center gap-8">
        <a href="#" className="text-black hover:text-gray-800">Home</a>
        <a href="#" className="text-black hover:text-gray-800">Shop</a>
        <a href="#" className="text-black hover:text-gray-800">Customize</a>
        <a href="#" className="text-black hover:text-gray-800">Contact Us</a>
        <a href="#" className="text-black hover:text-gray-800">Blog</a>
      </div>

      {/* Search Input & Currency Dropdown (Desktop) */}
      <div className='hidden md:flex gap-5'>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full ring-1 ring-black py-1 px-3 pl-10 focus:outline-none"
          />
          <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        </div>

        <select className="border border-gray-300 rounded-full ring-1 ring-black py-1 px-2 text-black">
          <option value="INR">₹ 🇮🇳</option>
          <option value="USD">$ 🇺🇸</option>
          {/* Add more currencies as needed */}
        </select>

        {/* Right Side - Icons */}
        
        <button className="text-black hover:text-gray-800">
          <i className="ri-heart-line text-2xl"></i>
        </button>
        <button className="text-black hover:text-gray-800">
          <i className="ri-shopping-bag-line text-2xl"></i>
        </button>
        <button className="text-black hover:text-gray-800">
          <i className="ri-user-line text-2xl"></i>
        </button>
        
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50 md:hidden">
          <div className="flex flex-col items-center gap-4">
            <a href="#" className="text-black hover:text-gray-800">Home</a>
            <a href="#" className="text-black hover:text-gray-800">Shop</a>
            <a href="#" className="text-black hover:text-gray-800">Customize</a>
            <a href="#" className="text-black hover:text-gray-800">Contact Us</a>
            <a href="#" className="text-black hover:text-gray-800">Blog</a>
            {/* Currency Dropdown */}
            <select className="border border-gray-300 rounded-full ring-1 ring-black py-1 px-2 text-black">
              <option value="INR">₹ 🇮🇳</option>
              <option value="USD">$ 🇺🇸</option>
              {/* Add more currencies as needed */}
            </select>
          </div>
        </div>
      )}

      {/* Search Input for Mobile */}
      {searchVisible && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-4 z-50 md:hidden flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full ring-1 ring-black py-1 px-3 pl-10 focus:outline-none"
          />
          <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        </div>
      )}
      
      {/* Right Side - Icons for Mobile */}
      <div className="md:hidden flex items-center  gap-3 mr-4">
        <button className="text-black hover:text-gray-800">
          <i className="ri-heart-line text-2xl"></i>
        </button>
        <button className="text-black hover:text-gray-800">
          <i className="ri-shopping-bag-line text-2xl"></i>
        </button>
        <button className="text-black hover:text-gray-800">
          <i className="ri-user-line text-2xl"></i>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
