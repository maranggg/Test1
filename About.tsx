import React from 'react';
import { Award, Globe, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const About: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - COMPANY_INFO.established;

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-marine-50 rounded-bl-full -z-0 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-tr-full -z-0 opacity-50"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block border-b-2 border-brand-blue pb-1 mb-4">
              <h2 className="text-brand-blue font-bold uppercase tracking-wide">About Us</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Your Trusted Partner in <br />
              <span className="text-brand-blue">Marine Electrical Solutions</span>
            </h3>
            
            {/* Stat Banner - Dynamic Calculation */}
            <div className="inline-flex items-center bg-brand-dark text-white px-6 py-3 rounded-full shadow-lg mb-8 transform hover:scale-105 transition-transform">
              <Clock className="mr-2 text-brand-accent" size={24} />
              <div>
                <span className="font-bold text-xl mr-2">{yearsExperience}+ Years</span>
                <span className="text-blue-200 text-sm font-medium uppercase tracking-wider">of Engineering Excellence</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="bg-marine-50 p-8 rounded-xl border-l-4 border-brand-blue shadow-sm">
              <p className="text-xl text-gray-800 italic leading-relaxed text-center">
                "{COMPANY_INFO.name} has established itself as a trusted name in the Marine and Offshore Electrical industry since {COMPANY_INFO.established}, specialising in both parts supply and service solutions."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed text-lg">
              <p>
                We provide a specialised and comprehensive range of electrical projects and innovative, one-stop solutions for both onshore and offshore ship repairs to support our clients' operational needs.
              </p>
              <p>
                Leveraging our extensive local and international experience, we deliver tailored solutions and professional guidance to meet each customer's unique requirements. Our repair services cover all types of vessels, whether on voyage or offshore.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100 mt-8">
              <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4 text-brand-blue">
                  <Award size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Expert Service</h4>
                <p className="text-sm text-gray-500">Professional guidance backed by years of experience.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4 text-brand-blue">
                  <Globe size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Global Reach</h4>
                <p className="text-sm text-gray-500">Serving onshore and offshore needs worldwide.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="bg-brand-blue/10 p-4 rounded-full mb-4 text-brand-blue">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Safety First</h4>
                <p className="text-sm text-gray-500">Commitment to high safety standards in all projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};