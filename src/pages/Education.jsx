import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/motions';

const TimelineItem = ({ education }) => (
    <motion.div
        className="relative pl-8 pb-12 last:pb-0"
        variants={itemVariants}
    >
        <div className="absolute left-0 top-0 h-full w-px bg-blue-600 dark:bg-[#444444]"></div>
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-[#FFC160]"></div>

        <motion.div
            className="bg-white dark:bg-[#222222] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {education.degree}
            </h3>
            <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-100 mb-2">
                {education.institution}
            </h4>

            <div className="flex flex-wrap gap-4 text-gray-900 dark:text-gray-200 mb-4">
                <div className="flex items-center">
                    <Calendar className="text-blue-600 dark:text-[#FFC160] w-4 h-4 mr-2" />
                    <span>{education.year}</span>
                </div>
                <div className="flex items-center">
                    <MapPin className="text-blue-600 dark:text-[#FFC160] w-4 h-4 mr-2" />
                    <span>{education.location}</span>
                </div>
            </div>

            <div className="text-gray-800 dark:text-gray-300">
                <span className="font-medium">Performance: </span>
                {education.performance}
            </div>
        </motion.div>
    </motion.div>
);

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology – Computer Science and Engineering",
            institution: "Guru Nanak Institute of Technology",
            year: "2022 - 2026",
            location: "Hyderabad",
            performance: "CGPA: 8.8/10"
        },
        {
            degree: "Intermediate (10+2)",
            institution: "SR Junior College",
            year: "2020 - 2022",
            location: "Karimnagar",
            performance: "Percentage: 99.1%"
        },
        {
            degree: "High School (10th)",
            institution: "Vidya Bharathi High School",
            year: "2019 - 2020",
            location: "Kothur",
            performance: "GPA: 10/10"
        }
    ];

    return (
        <motion.section
            id="education"
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
                        Education
                    </span>
                    <div className="flex flex-col items-start">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2.5">
                            Studies
                        </h2>
                        <div className="h-1 md:h-1.5 mb-2 rounded-md bg-blue-500 dark:bg-[#FFC160] w-32"></div>
                    </div>
                    <p className="text-lg text-gray-800 dark:text-gray-300">
                        My educational journey and achievements.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto"
                    variants={containerVariants}
                >
                    {educationData.map((education, index) => (
                        <TimelineItem key={index} education={education} />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Education;