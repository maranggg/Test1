import React from 'react';
import { ArrowRight, Users, Briefcase, TrendingUp } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-marine-50 via-white to-blue-50 rounded-3xl overflow-hidden shadow-xl border border-marine-100 p-10 md:p-16 text-center">
          
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-brand-blue font-semibold mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>We Are Hiring</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team at <span className="text-brand-blue">Yang Marine Automation</span>
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              We are constantly growing and looking for talented individuals to join our marine engineering workforce. Build your career with a trusted name in the maritime industry.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:border-brand-blue/30 transition-colors">
                <div className="bg-blue-100 p-4 rounded-full mb-4 text-brand-blue">
                  <Users size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Collaborative Environment</h4>
                <p className="text-gray-500">Work alongside experienced professionals in a supportive team culture.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:border-brand-blue/30 transition-colors">
                <div className="bg-blue-100 p-4 rounded-full mb-4 text-brand-blue">
                  <Briefcase size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Exciting Projects</h4>
                <p className="text-gray-500">Engage in diverse onshore and offshore marine engineering challenges.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:border-brand-blue/30 transition-colors">
                <div className="bg-blue-100 p-4 rounded-full mb-4 text-brand-blue">
                  <TrendingUp size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">Career Growth</h4>
                <p className="text-gray-500">Continuous learning opportunities to develop your skills in automation.</p>
              </div>
            </div>

            <a 
              href={COMPANY_INFO.careerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-brand-blue hover:bg-brand-dark text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              View Open Positions
              <ArrowRight className="ml-2" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};