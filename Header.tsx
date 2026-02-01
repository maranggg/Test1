import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden">
               {/* 
                  NOTE: Using the provided Google Photos URL.
                  mix-blend-multiply: Makes white pixels transparent.
                  contrast-125: Pushes near-white pixels to pure white to ensure clean blending.
               */}
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczOII-Q-dfKBUbxXxJX9LBwJY5NOO6NSatMX1IQpbCfmYkLNP87I6esZG_Hx_unB4AUiQ8CbAPOOjZMKYX1IZVCxzWkCRCowW2Ugn3dHS7AZpTKvjSxRG92MDeiACJ5OFo8oTmkKkmpZ_PMQmxAy65TI=w950-h633-s-no?authuser=0" 
                alt="Yang Marine Automation Logo" 
                className="h-16 md:h-20 w-auto object-contain mix-blend-multiply contrast-125 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-lg md:text-xl text-brand-dark leading-tight tracking-tight">
                YANG MARINE <br className="hidden lg:inline" />
                <span className="text-brand-blue">AUTOMATION</span> PTE LTD
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-blue font-medium transition-colors text-sm uppercase tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-blue hover:bg-brand-dark text-white px-5 py-2 rounded-full font-medium transition-colors text-sm shadow-sm hover:shadow-md"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4 border-t border-gray-100 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-brand-blue font-medium block px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
               <a 
                href={COMPANY_INFO.careerLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-brand-blue font-semibold px-2"
               >
                 Join Our Team
               </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};