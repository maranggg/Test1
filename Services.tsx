import React from 'react';
import { SERVICES_LIST } from '../constants';
import { Anchor, Zap, Wrench, Cpu, Package, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  "Anchor": <Anchor size={32} />,
  "Zap": <Zap size={32} />,
  "Wrench": <Wrench size={32} />,
  "Cpu": <Cpu size={32} />,
  "Package": <Package size={32} />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-bold uppercase tracking-wide mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Marine Solutions</h3>
          <p className="text-gray-600 text-lg">
            We provide tailored solutions offering professional guidance supported by extensive experience in the marine and offshore sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-brand-blue group"
            >
              <div className="mb-6 text-brand-blue group-hover:scale-110 transition-transform duration-300 inline-block bg-marine-50 p-4 rounded-full">
                {iconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start text-sm text-gray-500">
                  <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Professional execution</span>
                </li>
                <li className="flex items-start text-sm text-gray-500">
                   <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Certified standards</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};