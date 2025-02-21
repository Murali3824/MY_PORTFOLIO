import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/motions';


const TimelineItem = ({ experience }) => (
  <motion.div
    className="relative pl-8 pb-12 last:pb-0"
    variants={itemVariants}
  >
    {/* Timeline line */}
    <div className="absolute left-0 top-0 h-full w-px bg-blue-600 dark:bg-[#444444]"></div>

    {/* Timeline dot */}
    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-[#FFC160]"></div>

    <motion.div
      className="bg-white dark:bg-[#222222] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {experience.title}
      </h3>
      <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-100 mb-2">
        {experience.company}
      </h4>

      <div className="flex flex-wrap gap-4 text-gray-900 dark:text-gray-200 mb-4">
        <div className="flex items-center">
          <Calendar className="text-blue-600 dark:text-[#FFC160] w-4 h-4 mr-2" />
          <span>{experience.date}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="text-blue-600 dark:text-[#FFC160] w-4 h-4 mr-2" />
          <span>{experience.location}</span>
        </div>
      </div>

      <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
        {experience.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      date: "2021 - Present",
      location: "San Francisco, CA",
      responsibilities: [
        "Led the development of multiple high-traffic web applications using React and TypeScript",
        "Implemented responsive designs and improved website performance by 40%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      date: "2019 - 2021",
      location: "New York, NY",
      responsibilities: [
        "Developed and maintained RESTful APIs using Node.js and Express",
        "Created responsive web applications using React and Redux",
        "Collaborated with UX designers to implement user-friendly interfaces"
      ]
    },
    {
      title: "Web Developer",
      company: "Startup Hub",
      date: "2017 - 2019",
      location: "Boston, MA",
      responsibilities: [
        "Built and maintained company websites using JavaScript and PHP",
        "Integrated third-party APIs and services",
        "Optimized database queries and improved application performance"
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="py-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={itemVariants}
        >
          <span className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-[#FFC160] text-sm font-medium inline-block mb-4">
            Experience
          </span>
          <div className='flex flex-col items-start'>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2.5">
              Work Experience
            </h2>
            <div className="h-1 md:h-1.5 mb-2 rounded-md bg-blue-500 dark:bg-[#FFC160] w-32"></div>
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            My professional journey and key achievements.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
        >
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;