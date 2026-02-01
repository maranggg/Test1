import React from 'react';
import { Ship } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4 text-white">
              <Ship size={24} className="text-brand-blue" />
              <span className="font-bold text-lg tracking-tight">YANG MARINE AUTOMATION</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Specializing in marine electrical projects and one-stop service solutions for onshore and offshore ship repairs since 2010.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-blue transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-sm">
               <li><a href="#services" className="hover:text-brand-blue transition-colors">Electrical Installation</a></li>
               <li><a href="#services" className="hover:text-brand-blue transition-colors">Generator Control</a></li>
               <li><a href="#services" className="hover:text-brand-blue transition-colors">Navigation Systems</a></li>
               <li><a href="#services" className="hover:text-brand-blue transition-colors">PCB Repair</a></li>
               <li><a href="#services" className="hover:text-brand-blue transition-colors">Parts Supply</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <p className="text-sm mb-2">{COMPANY_INFO.phones[0]}</p>
            <p className="text-sm mb-2">{COMPANY_INFO.phones[1]}</p>
            <p className="text-sm mb-2 break-all">{COMPANY_INFO.email}</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-600">Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};