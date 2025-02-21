import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/Murali3824',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/gudellimurali',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      href: 'https://x.com/hsm_murali',
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'muralinetha38@gmail.com',
      href: 'mailto:muralinetha38@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: '91+ 8074756499',
      href: 'tel:8074756499',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Hyderabad, India',
      href: '#contact',
    },
  ];

  const navigationLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-black overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-200 to-blue-500 dark:from-[#FFC160] dark:via-orange-100 dark:to-[#FFC160]" />
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-600/50 dark:bg-[#FFC160]/50 rounded-full blur-3xl" /> */}
      
      <div className="max-w-7xl 2xl:max-w-full  mx-auto px-20">
        <div className="2xl:ml-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:text-[#FFC160] bg-clip-text text-transparent tracking-wide cursor-pointer"
            >
              MyPortfolio
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Transforming ideas into elegant, efficient, and scalable solutions. 
              Passionate about creating impactful digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-[#FFC160] transition-colors duration-200 text-sm cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-[#FFC160] transition-colors duration-200 text-sm"
                >
                  <span className="text-blue-600 dark:text-[#FFC160]">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-[#FFC160] transition-colors duration-200 text-sm group"
                >
                  <span className="text-blue-600 dark:text-[#FFC160] transform group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        
      </div>
      <div className="py-5 border-t border-gray-200 dark:border-gray-800">
          {/* <div className="2xl:mx-20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"> */}
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} gudellimurali. All rights reserved.
            </p>
            {/* <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              Built with <Heart className=" w-4 h-4 mx-1 text-red-500" /> using React & Tailwind
            </p> */}
          {/* </div> */}
        </div>
    </footer>
  );
};

export default Footer;