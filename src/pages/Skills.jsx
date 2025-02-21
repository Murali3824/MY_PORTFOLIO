import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { badgeVariants, categoryVariants, containerVariants, itemVariants, } from '../utils/motions';



const TechBadge = ({ name, icon, level }) => (
  <motion.div
    className="relative overflow-hidden bg-white dark:bg-[#222222] rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-[#333333] group"
    variants={badgeVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
  >
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-12 h-12 p-2 sm:w-14 sm:h-14 rounded-xl bg-blue-50 dark:bg-gray-800 text-2xl sm:text-3xl shadow-inner">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {name}
          </h4>
          <span className="flex gap-2 text-xs font-medium text-blue-600 dark:text-[#FFC160]">
            Proficiency:{level}%
          </span>
        </div>
      </div>

      <div className="relative sm:pt-2">
        <div className="h-2 w-full bg-gray-100 dark:bg-[#444444] rounded-full overflow-hidden">
          <motion.div
            style={{ width: `${level}%` }}
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-[#FFC160] dark:to-amber-500"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="absolute top-3 left-0 w-full h-5 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    </div>

    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-50 dark:bg-gray-800 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
  </motion.div>
);


const SkillCategory = ({ skills, isActive }) => (
  <motion.div
    className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ${isActive ? 'block' : 'hidden'}`}
    variants={categoryVariants}
    initial="hidden"
    animate={isActive ? "visible" : "hidden"}
  >
    {skills.map((skill, index) => (
      <TechBadge
        key={index}
        name={skill.name}
        icon={skill.icon}
        level={skill.level}
      />
    ))}
  </motion.div>
);

const TabButton = ({ title, isActive, onClick, icon }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center border dark:border-[#333333] gap-3 px-6 py-4 rounded-xl font-semibold text-base sm:text-lg transition-colors duration-300 ${
      isActive
        ? 'bg-blue-500 dark:bg-[#FFC160] dark:text-black text-white shadow-lg shadow-blue-500/30 dark:shadow-[#FFC160]/30'
        : 'bg-white text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:bg-[#222222] dark:hover:bg-[#333333]'
    }`}
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <span className="text-lg sm:text-xl">{icon}</span>
    {title}
  </motion.button>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const frontendSkills = [
    { name: "HTML", level: 95, icon: "🌐" },
    { name: "CSS/Tailwind", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 65, icon: <div className="font-bold text-yellow-500">JS</div> },
    { name: "React", level: 80, icon: "⚛️" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 65, icon: "📦" },
    { name: "Express.js", level: 70, icon: "🚂" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "API Development", level: 80, icon: "🔌" },
    { name: "User Authentication", level: 65, icon: "🔐" },
    { name: "JWT Authentication", level: 70, icon: "🛡️" },
  ];

  const uiSkills = [
    { name: "UI/UX Design (Figma)", level: 60, icon: "🎨" },
    { name: "Prototyping (Figma)", level: 50, icon: "🖌️" },
  ];

  const dataAnalysisSkills = [
    { name: "Tableau", level: 60, icon: "📊" },
    { name: "Power BI", level: 80, icon: "📈" },
    { name: "SQL", level: 65, icon: "🗄️" },
    { name: "Excel", level: 70, icon: "📊" },
    { name: "Python (Pandas/NumPy)", level: 20, icon: "🐍" },
  ];

  const Tools = [
    { name: "Git", level: 90, icon: "🔧" },
    { name: "GitHub", level: 88, icon: "🐙" },
    { name: "Visual Studio Code", level: 95, icon: "💻" },
    { name: "Postman", level: 85, icon: "📬" },
  ];

  return (
    <section id="skills" className="pt-24 py-14 overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex flex-col items-center space-y-4 mb-12 sm:mb-20">
          <motion.span
            variants={itemVariants}
            className="px-4 sm:px-6 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-[#FFC160] text-sm font-semibold tracking-wide">
            Professional Skills
          </motion.span>
          <motion.div
            variants={itemVariants} className="flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2.5">
              Technical Expertise
            </h2>
            <div className="h-1 md:h-1.5 mb-2 rounded-md bg-blue-500 dark:bg-[#FFC160] w-24 sm:w-32"></div>
          </motion.div>
          <motion.p
            variants={itemVariants} className="max-w-2xl text-center text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Showcasing my proficiency across various technologies and development tools
          </motion.p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
         className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 sm:mb-16">
          <TabButton
            title="Frontend"
            icon="🎨"
            isActive={activeCategory === 'frontend'}
            onClick={() => setActiveCategory('frontend')}
          />
          <TabButton
            title="Backend"
            icon="⚙️"
            isActive={activeCategory === 'backend'}
            onClick={() => setActiveCategory('backend')}
          />
          <TabButton
            title="UI/UX"
            icon="🎨"
            isActive={activeCategory === 'uiux'}
            onClick={() => setActiveCategory('uiux')}
          />
          <TabButton
            title="Data Analysis"
            icon="📊"
            isActive={activeCategory === 'dataanalysis'}
            onClick={() => setActiveCategory('dataanalysis')}
          />
          <TabButton
            title="Tools"
            icon="🚀"
            isActive={activeCategory === 'tools'}
            onClick={() => setActiveCategory('tools')}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="relative sm:min-h-[400px]">
          <SkillCategory
            skills={frontendSkills}
            isActive={activeCategory === 'frontend'}
          />
          <SkillCategory
            skills={backendSkills}
            isActive={activeCategory === 'backend'}
          />
          <SkillCategory
            skills={uiSkills}
            isActive={activeCategory === 'uiux'}
          />
          <SkillCategory
            skills={dataAnalysisSkills}
            isActive={activeCategory === 'dataanalysis'}
          />
          <SkillCategory
            skills={Tools}
            isActive={activeCategory === 'tools'}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;