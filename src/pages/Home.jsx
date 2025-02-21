import React from 'react';
import { Github, Linkedin, Twitter, Download, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, slideInRight } from '../utils/motions';

const SocialLinks = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 }}
    className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 ml-4 z-50">
    <a
      href="https://github.com/Murali3824"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
    >
      <Github className="animate-pulse text-black rounded-lg border dark:border-[#333333] bg-gray-100 dark:bg-[#222222] dark:text-[#FFC160] w-10 h-10 lg:w-12 2xl:h-12 p-2 hover:scale-110 transition-transform duration-200" />
    </a>
    <a
      href="https://linkedin.com/in/gudellimurali"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
    >
      <Linkedin className="animate-pulse text-black rounded-lg border dark:border-[#333333] bg-gray-100 dark:bg-[#222222] dark:text-[#FFC160] w-10 h-10 lg:w-12 2xl:h-12 p-2 hover:scale-110 transition-transform duration-200" />
    </a>
    <a
      href="https://x.com/hsm_murali"
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
    >
      <Twitter className="text-black rounded-lg border dark:border-[#333333] bg-gray-100 dark:bg-[#222222] dark:text-[#FFC160] w-10 h-10 p-2 lg:w-12 2xl:h-12 hover:scale-110 transition-transform duration-200" />
    </a>
  </motion.div>
);

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const resumeUrl = assets.resume;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Gudelli_Murali_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* <SocialLinks /> */}
      <div className="flex flex-col items-center max-w-6xl 2xl:max-w-full mt-20 2xl:mt-0 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row mb-20 lg:mb-0 gap-12 lg:gap-5 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8 text-center lg:text-left">
            <motion.div
              variants={containerVariants}
              className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-[#FFC160]">GUDELLI MURALI</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-900 font-semibold dark:text-gray-200">
                Full Stack Developer
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-900 dark:text-gray-300 max-w-2xl">
                As a Full Stack Developer, I design and build web applications from front-end interfaces to back-end systems.
                My goal is to create smooth, user-friendly experiences while making sure everything runs efficiently and scales well as it grows.
              </motion.p>

              {/* Personal Details */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center lg:items-start space-y-3 pt-4">
                <div className="flex items-center space-x-3 text-gray-900 dark:text-gray-300">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-[#FFC160]" />
                  <a href="mailto:muralinetha38@gmail.com" className="hover:text-blue-600 dark:hover:text-[#FFC160]">
                    muralinetha38@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-900 dark:text-gray-300">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-[#FFC160]" />
                  <a href="tel:8074756499" className="hover:text-blue-600 dark:hover:text-[#FFC160]">
                    91+ 8074756499
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-900 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-[#FFC160]" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={containerVariants}
              className="flex gap-4 justify-center lg:justify-start">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="inline-flex items-center px-4 sm:px-6 py-3 rounded-lg bg-blue-600 dark:bg-[#222222] dark:border-2 dark:border-[#333333] text-white transition-colors duration-200"
              >
                <Download className="dark:text-[#FFC160] animate-bounce w-5 h-5 mr-2" />
                Download Resume
              </motion.button>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 sm:px-6 py-3 rounded-lg border-2 bg-gray-100 border-gray-300 dark:bg-[#222222] dark:border-[#333333] text-gray-900 dark:text-gray-300 transition-colors duration-200"
                onClick={scrollToAbout}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/*Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
            className="flex justify-center lg:justify-end">
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={slideInRight}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-[#FFC160] dark:via-orange-500 dark:to-[#FFC160] p-1 animate-gradient-x">
                  <div className="absolute inset-0 bg-gray-50 dark:bg-black rounded-xl">
                    <img
                      src={assets.profilepic}
                      alt="Profile image"
                      className="w-full h-full object-cover rounded-xl transform transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </motion.div>

              {/* Minimal decorative dots */}
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                <div className="w-2 h-2 bg-blue-600 dark:bg-[#FFC160] rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-purple-600 dark:bg-orange-500 rounded-full animate-ping delay-150"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full border-2 border-blue-600 dark:border-[#FFC160] hover:border-blue-600 transition-colors duration-200"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-6 h-6 text-blue-600 dark:text-[#FFC160]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;