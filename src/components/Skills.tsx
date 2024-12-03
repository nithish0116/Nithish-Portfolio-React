import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Skills</h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-medium dark:text-white">{skill.name}</span>
                  <span className="text-lg font-medium dark:text-white">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-red-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;