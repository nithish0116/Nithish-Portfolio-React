import { motion } from 'framer-motion';
import { Code2, Palette, Database, Globe, Laptop, Smartphone, Server, Cloud } from 'lucide-react';

const technologies = [
  {
    icon: <Code2 size={40} />,
    title: 'Frontend Development',
    description: 'React, Angular, JavaScript, TypeScript, Tailwind CSS, Material UI, AntD UI'
  },
  {
    icon: <Database size={40} />,
    title: 'Backend Development',
    description: 'Node.js, Express, MongoDB, SQL, PostgreSQL'
  },
  {
    icon: <Palette size={40} />,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD'
  },
  {
    icon: <Globe size={40} />,
    title: 'Web Technologies',
    description: 'HTML5, CSS3, JavaScript, Typescript, React Js, Anuglar'
  },
  {
    icon: <Laptop size={40} />,
    title: 'Desktop Development',
    description: 'Electron, React Desktop'
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Mobile Development',
    description: 'React Native'
  },
  {
    icon: <Server size={40} />,
    title: 'DevOps',
    description: 'CI/CD, Git, GitHub'
  },
  {
    icon: <Cloud size={40} />,
    title: 'Cloud Services',
    description: 'AWS, Vercel'
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
                whileHover={{ scale: 1.02 }} // Desktop interaction
                whileTap={{ scale: 0.95 }} // Mobile tap interaction
                transition={{ duration: 0.3 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {/* Animated Icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }} // Always animates when in view
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
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
