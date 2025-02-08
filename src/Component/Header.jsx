import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      {/* Header Section */}
      <header className="header sticky top-0 px-2 bg-white shadow-md flex items-center justify-between lg:px-8 py-4">
        {/* Logo */}
        <a href='/' className="w-3/12 uppercase font-bold text-2xl lg:text-3xl cursor-pointer">
          Fashion
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-semibold text-lg">
          <ul className="flex items-center">
            <li>
              <a href="/" className="block py-2 px-3 text-white bg-orange-500 rounded-sm md:bg-transparent md:text-orange-500 md:p-0">
                Home
              </a>
            </li>
            <li className="p-4 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#shop">Shop</a> 
            </li>
            <li className="p-4 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#collections">Collections</a> 
            </li>
            <li className="p-4 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#about">About</a> 
            </li>
            <li className="p-4 hover:text-green-500 duration-200 cursor-pointer">
              <a href="#contact">Contact</a> 
            </li>
          </ul>
        </nav>

        {/* Search & Cart Icons */}
        <div className="hidden md:flex gap-3 items-center">
          <div className="relative w-full max-w-xs">
            {isSearchOpen && (
              <input
                className="shadow border rounded-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search item here!"
              />
            )}
            <button
              aria-label="Search items"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-2xl"
              onClick={toggleSearch}
            >
              <FiSearch />
            </button>
          </div>
          <MdAddShoppingCart className="text-4xl cursor-pointer" />
        </div>

        {/* Mobile Menu Icon */}
        <IoMdMenu className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu} />
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 font-semibold text-lg">
            <li><a href="/">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Search Bar */}
      <header className="md:hidden sticky top-[62px] px-1">
        <div className="flex justify-center gap-3 items-center bg-white">
          <div className="relative w-full max-w-xs">
            {isSearchOpen && (
              <input
                className="shadow border rounded-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search item here!"
              />
            )}
            <button
              aria-label="Search items"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl"
              onClick={toggleSearch}
            >
              <FiSearch />
            </button>
          </div>
          <MdAddShoppingCart className="text-4xl cursor-pointer" />
        </div>
      </header>
    </>
  );
}

export default Header;
