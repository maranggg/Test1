import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczNgsYoroHJnDOoMdMEB3FlybUqxNKF17RVOGO1Q1Dbeq_jCIWXJyGmtXwa_6eq7dh0OYj4NTwkUixcFYZXBywNhfhHirv9aNlvenjXJO2pR4H-QyuXc17Gfp3_uA4_YXpbqYuEtd1i7FnqamJ0wDJnA=w1611-h1074-s-no?authuser=0" 
          alt="Large cargo ship in ocean" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-blue/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative pt-20">
        <div className="max-w-4xl">
          <div className="inline-block bg-brand-blue/90 text-white px-4 py-1 rounded-sm text-sm font-semibold tracking-wider mb-6 animate-fade-in-up">
            ESTABLISHED IN 2010
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Excellence in <br/>
            <span className="text-brand-accent">Marine Automation</span> & Repair
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
            Trusted innovative one-stop solutions for both onshore and offshore ship repairs.
            Specializing in electrical projects, parts supply, and service solutions globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#services" 
              className="bg-brand-blue hover:bg-white hover:text-brand-blue text-white px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center group shadow-lg ring-2 ring-brand-blue"
            >
              Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-md font-bold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>

      {/* Decorative Geometry from PDF inspiration */}
      <div className="absolute bottom-0 left-0 w-1/3 h-32 bg-brand-blue/80 clip-path-polygon hidden lg:block" style={{clipPath: 'polygon(0 100%, 100% 100%, 0 0)'}}></div>
    </section>
  );
};