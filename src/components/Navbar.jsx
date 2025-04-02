import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaCube } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from '../assets/ShashwatPratapSingh-CV.pdf'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 p-4 px-6 md:px-12 bg-gray-900/80 border-b border-gray-700 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-3xl font-bold">
            <span className="text-blue-400">S</span>
            <span className="text-purple-400">P</span>
            <span className="text-pink-400">S</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">
              Home
            </a>

            <a href="/Projects" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">
              Projects
            </a>
            <a href="/Innovation" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">
              About Me
            </a>
            <a href="/ContactMe" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">
              Contact Me
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 ml-4">
            <button className="px-5 py-2 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5">
            <a href={resume} download={resume} className="flex items-center gap-2"><p>Resume</p><MdOutlineFileDownload /></a>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-40 h-screen w-full transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden bg-gray-900`}>
          <div className="container mx-auto px-6 py-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <span className="text-3xl font-bold">
                <span className="text-blue-400">S</span>
                <span className="text-purple-400">P</span>
                <span className="text-pink-400">S</span>
              </span>
              <button 
                className="p-2 rounded-full focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} className="text-white" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto">
              <ul className="space-y-8">
              <li>
              <a href="/" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">
              Home
              </a>
              </li>
              <li>
              <a href="/Projects" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">
              Projects
              </a>
              </li>
              <li>
              <a href="/Innovation" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">
              About Me
              </a>
              </li>
              <li>
              <a href="/ContactMe" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">
              Contact Me
              </a>
              </li>
              </ul>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-700 flex flex-col space-y-6 pb-8">
              <button 
                className="py-4 px-6 rounded-lg font-bold text-lg transition-all bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md text-center"
                onClick={() => setIsOpen(false)}
              >
            <a href={resume} download={resume} className="flex items-center gap-2"><p>Resume</p><MdOutlineFileDownload /></a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;