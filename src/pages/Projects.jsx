import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants} from '../utils/motions';

const ProjectCard = ({ project }) => {

  return (
    <motion.div
      className="group relative rounded-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={itemVariants}
    >
      <motion.div
        className="relative h-full rounded-lg border dark:border-[#333333] bg-white dark:bg-[#222222] p-3 md:p-4 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex justify-between items-start mb-2">
          <motion.div 
            className="w-full mt-1 relative aspect-[16/9] overflow-hidden"
            whileHover="hover"
            initial="rest"
          >
            <motion.img
              src={project.image}
              className="w-full h-full object-cover rounded-lg"
              variants={{
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
              variants={{
                hover: { opacity: 1 }
              }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        <div className="space-y-2">
          <div>
            <motion.h3 
              className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-[#FFC160] transition-colors"
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>
            <motion.p 
              className="text-gray-800 dark:text-gray-400 text-sm line-clamp-3"
              whileHover={{ x: 5 }}
            >
              {project.description}
            </motion.p>
          </div>

          <div className="pt-2 md:pt-2 border-t border-gray-200 dark:border-gray-800">
            <motion.div 
              className="flex flex-wrap gap-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-blue-600 dark:text-[white] bg-blue-100 dark:bg-blue-500/10 rounded-full"
                  variants={itemVariants}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="flex gap-3 mt-4"
          whileHover={{ scale: 1.05 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5 text-gray-600 dark:text-[#FFC160] hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <ExternalLink className="w-5 h-5 text-gray-600 dark:text-[#FFC160] hover:text-gray-900 dark:hover:text-white" />
          </a>
        </motion.div>

        <motion.div 
          className="absolute top-0 right-0 mt- -mr-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <span className="px-3 py-0.5 text-xs font-medium text-white bg-blue-600 dark:bg-[#FFC160] dark:text-black rounded-full shadow-lg">
            {project.type}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Frontend');

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard for tracking sales and customer behavior.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Razorpay"],
      image: assets.fullstackproject1,
      github: "https://github.com/Murali3824/E-COMMERCE-MERNSTACK-PROJECT",
      demo: "https://e-commerce-mernstack-project.onrender.com",
      type: "Full Stack"
    },
    {
      title: "Secure AuthFlow",
      description: "A modern authentication system featuring email verification,OTP-based verification, password reset and forgot password functionality, and secure user management.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Nodemailer"],
      image: assets.fullstackproject3,
      github: "https://github.com/Murali3824/MERN-Authentication",
      demo: "https://secure-authflow.onrender.com",
      type: "Full Stack"
    },
    {
      title: "ExpenSave Tracker",
      description: "A comprehensive expense tracking application to manage personal finances with insightful analytics, secure data storage, and interactive visualizations.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image: assets.fullstackproject2,
      github: "https://github.com/Murali3824/ExpenSave",
      demo: "https://expensave-tracker.onrender.com",
      type: "Full Stack"
    },
    {
      title: "Modern Todo App",
      description: "A modern, user-friendly To-Do application built using HTML, CSS, and JavaScript. The app allows users to add, edit, delete, and mark tasks as completed. It features a clean and responsive design for seamless task management across devices.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: assets.frontendproject1,
      github: "https://github.com/Murali3824/TodoApp",
      demo: "https://modern-todoapp.vercel.app",
      type: "Frontend"
    },
    {
      title: "Color & Gradient Generator",
      description: "A modern React-based color tool that generates harmonious color palettes and dynamic gradient variations from a base color. Features include real-time color shade generation, multiple gradient patterns, and a clipboard integration for easy code copying. The tool supports various gradient types including radial, linear, and conic patterns with a responsive, user-friendly interface.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      image: assets.frontendproject2,
      github: "https://github.com/Murali3824/Color-Generator",
      demo: "https://colorgradient-generator.vercel.app",
      type: "Frontend"
    },
    {
      title: "Kids Finance Learning",
      description: "An educational platform to help individuals aged 16+ improve their financial literacy. The platform spans multiple phases covering budgeting, saving, investing, and advanced financial planning. Built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      image: assets.frontendproject3,
      github: "https://github.com/Murali3824/KidsFin-frontend-mini-project",
      demo: "https://kidsfinance-learning.vercel.app",
      type: "Frontend"
    },

    // technologies: ["React", "Tailwind CSS", "Vite", "Express", "MongoDB", "Node.js", "JWT", "Mongoose", "Multer", "Nodemailer", "bcryptjs", "xlsx"]

    // {
    //   title: "Task Management App",
    //   description: "A collaborative task management application featuring real-time updates, team collaboration tools, and integrated chat functionality for seamless communication.",
    //   technologies: ["React", "Firebase", "Material-UI", "Redux"],
    //   image: "https://i.pinimg.com/236x/c2/d1/c7/c2d1c76b91f2348b1e630147fe5c73e6.jpg",
    //   github: "https://github.com/yourusername/project2",
    //   demo: "https://project2-demo.com",
    //   type: "Web App"
    // },
  ];

  const filters = ['Frontend', 'Full Stack'];

  return (
    <section id="projects" className="py-14">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-[#FFC160] text-sm font-medium inline-block mb-4"
          >
            Projects
          </motion.span>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2.5">
              Featured Projects
            </h2>
            <div className="h-1 md:h-1.5 mb-2 rounded-md bg-blue-500 dark:bg-[#FFC160] w-32"></div>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-800 dark:text-gray-200"
          >
            Explore my latest work and personal projects that showcase my skills and passion for development.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-2 mt-10 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-blue-600 dark:bg-[#FFC160] text-white dark:text-black'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects
            .filter(project => activeFilter === 'All' || project.type === activeFilter)
            .map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;