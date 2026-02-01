import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Yang Marine Automation Pte Ltd",
  established: 2010,
  phones: [
    "+65 9799 1329",
    "+65 6316 5887"
  ],
  email: "sales@yangmarineautomation.com",
  address: "5 Soon Lee St, #05-38 Pioneer Point, Singapore 627607",
  careerLink: "https://www.mycareersfuture.gov.sg/companies/yang-marine-automation-201000267E",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=5+Soon+Lee+St,+#05-38+Pioneer+Point,+Singapore+627607"
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES_LIST = [
  {
    title: "Installation & Commissioning",
    description: "Installation, testing, and commissioning of marine electrical and automation work, including main engines and generator safety devices.",
    icon: "Anchor"
  },
  {
    title: "Generator Control Panels",
    description: "Servicing of both modified and newly designed generator control panels to ensure optimal performance.",
    icon: "Zap"
  },
  {
    title: "Repair & Maintenance",
    description: "Repair and replacement of navigation light systems, troubleshooting of cargo tank control and hydraulic remote control valve systems.",
    icon: "Wrench"
  },
  {
    title: "PCB Board Services",
    description: "Specialized repair or replacement of marine control electronic PCB boards for various ship systems.",
    icon: "Cpu"
  },
  {
    title: "Parts Supply",
    description: "Supply of marine mechanical and electrical parts, including explosion-proof types, catering to unique operational requirements.",
    icon: "Package"
  }
];