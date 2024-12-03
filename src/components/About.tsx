import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="src/components/Assests/nithish.portfolio.jpg"
                alt="Developer working"
                className="rounded-lg "
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2">
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
    Hello! I'm a dedicated full-stack developer with a passion for building robust and scalable web applications. 
    I specialize in creating seamless user experiences on the frontend using technologies like React, HTML, CSS, 
    and JavaScript, paired with strong backend expertise.
  </p>
  <p className="text-lg text-gray-700 dark:text-gray-300">
    My backend skills include working with Node.js, Express, MongoDB, SQL, and PostgreSQL, enabling me to 
    design and manage efficient databases and APIs. Whether it's crafting dynamic interfaces or implementing 
    powerful server-side logic, I focus on delivering high-quality solutions tailored to user needs.
  </p>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
