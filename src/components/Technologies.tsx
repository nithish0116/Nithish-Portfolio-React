import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Globe, Laptop, Smartphone, Server, Cloud } from 'lucide-react';

const technologies = [
  {
    icon: <Code2 size={40} />,
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS'
  },
  {
    icon: <Database size={40} />,
    title: 'Backend Development',
    description: 'Node.js, Express, MongoDB'
  },
  {
    icon: <Palette size={40} />,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, Prototyping'
  },
  {
    icon: <Globe size={40} />,
    title: 'Web Technologies',
    description: 'HTML5, CSS3, JavaScript'
  },
  {
    icon: <Laptop size={40} />,
    title: 'Desktop Development',
    description: 'Electron, React Desktop'
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Mobile Development',
    description: 'React Native, Expo'
  },
  {
    icon: <Server size={40} />,
    title: 'DevOps',
    description: 'Docker, CI/CD, Git'
  },
  {
    icon: <Cloud size={40} />,
    title: 'Cloud Services',
    description: 'AWS, Firebase, Vercel'
  }
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <motion.div
                   whileHover={{
                   rotate: [0.1, 10, 0, 0],
                   scale: [1,1, 1],
                   }}
                   transition={{
                   duration: 0.6,
                  ease: "easeInOut",
                  }}
                  className="text-red-600 dark:text-red-600 mb-4"
                >
                 {tech.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{tech.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;