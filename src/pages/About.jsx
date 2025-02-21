import React from 'react';
import { motion } from 'framer-motion';
import { Code, SquareMousePointer, Database, ChartNoAxesCombined } from 'lucide-react';
import { assets } from '../assets/assets';
import { containerVariants, itemVariants, slideInRight } from '../utils/motions';


const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using modern frameworks and libraries."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Designing and implementing scalable server-side solutions and APIs."
    },
    {
      icon: <SquareMousePointer className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Designing User Interfaces (UI) and User Experiences (UX) that are both intuitive and aesthetically pleasing."
    },
    {
      icon: <ChartNoAxesCombined className="w-6 h-6" />,
      title: "Data Analyst",
      description: "Analyzing and interpreting complex data to help organizations make informed business decisions."
    }

  ];

  return (
    <section id="about" className="w-full pt-24 py-14 pb-3 overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex flex-col items-center space-y-3 mb-20">
          <motion.span
            variants={itemVariants}
            className="px-6 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-[#FFC160] text-sm font-medium tracking-wide">
            About Me
          </motion.span>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2.5">
              Web Developer
            </h2>
            <div className="h-1 md:h-1.5 mb-2 rounded-md bg-blue-500 dark:bg-[#FFC160] w-32"></div>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-center text-lg text-gray-800 dark:text-gray-300 mt-6">
            A dedicated developer focused on creating exceptional digital experiences through innovative solutions and cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
            className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 dark:bg-white rounded-3xl rotate-12 opacity-10"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={assets.profilepic}
                  alt="Profile"
                  className="w-80 h-full sm:w-full sm:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="lg:w-1/2 space-y-6">
            <motion.h3
            variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white">
              Crafting Digital Excellence
            </motion.h3>
            <motion.div
            variants={itemVariants} className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m a Full Stack Web Developer with a strong passion for building solid backend systems. While I’m comfortable working with both the front-end and back-end, what really excites me is designing the core features that make the user experience smooth and seamless.             </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My backend development focuses on creating scalable, efficient systems. I design server-side logic, build APIs, and manage data securely using Node.js and Express, ensuring smooth communication and scalability to meet growing user demands.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond backend development, I specialize in UI/UX design, focusing on creating intuitive, visually appealing interfaces that enhance user interaction. I also analyze data to provide insights that help businesses make informed, strategic decisions.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="group p-5 rounded-2xl bg-white dark:bg-[#222222] border border-gray-200 dark:border-[#333333] hover:border-blue-500 dark:hover:border-[#FFC160] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-[#333333] text-blue-600 dark:text-[#FFC160] group-hover:bg-blue-100 dark:group-hover:bg-[#444444] transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;