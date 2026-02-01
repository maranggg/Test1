import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-wide mb-3">Contact Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-gray-300 text-lg">
            Reach out to us for enquiries about our services, parts supply, or to request a quote.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Address Card */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-brand-blue/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-brand-blue p-4 rounded-xl mr-5 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={28} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-xl text-white mb-2">Our Office</h5>
                  <p className="text-gray-300 leading-relaxed mb-4">{COMPANY_INFO.address}</p>
                  <a 
                    href={COMPANY_INFO.mapsLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center text-brand-accent hover:text-white transition-colors font-medium"
                  >
                    View on Google Maps <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-brand-blue/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-brand-blue p-4 rounded-xl mr-5 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={28} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-xl text-white mb-2">Phone Numbers</h5>
                  <div className="space-y-2">
                    {COMPANY_INFO.phones.map((phone, idx) => (
                      <p key={idx} className="text-gray-300">
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors text-lg">
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-brand-blue/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-brand-blue p-4 rounded-xl mr-5 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={28} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-xl text-white mb-2">Email Address</h5>
                  <p className="text-gray-300">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors text-lg break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">We aim to respond within 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-brand-blue/50 transition-all duration-300 group">
              <div className="flex items-start">
                <div className="bg-brand-blue p-4 rounded-xl mr-5 shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Clock size={28} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-xl text-white mb-2">Service Availability</h5>
                  <p className="text-brand-accent font-bold text-2xl mb-2">24/7 Support</p>
                  <p className="text-gray-300 text-sm">
                    We are available round-the-clock for all your marine automation and repair needs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};