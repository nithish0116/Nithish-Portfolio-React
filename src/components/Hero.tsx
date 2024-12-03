import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Github, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Namaste!', 'I am Nithish', 'Web Developer', 'UI/UX Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('src/components/Assests/wallpaper.portfolio.jpg')`,
        }}
      />

      {/* Floating Elements */}
      {/* <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 right-1/4"
      >
        <img
          src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80"
          alt="Laptop"
          className="w-32 h-32 object-cover rounded-full shadow-lg"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-1/4 left-1/4"
      >
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80"
          alt="Mouse"
          className="w-24 h-24 object-cover rounded-full shadow-lg"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/3 left-1/3"
      >
        <img
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80"
          alt="Coffee"
          className="w-28 h-28 object-cover rounded-full shadow-lg"
        />
      </motion.div> */}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6">
            <span ref={el}></span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting beautiful and functional digital experiences with passion and precision.
          </p>

          <div className="flex gap-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Github size={20} />
              GitHub
            </motion.a>
            {/* LinkedIn Link */}
  <motion.a 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="https://linkedin.com/in/yourusername" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-yellow-300 border-2 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
  >
    <i className="fab fa-linkedin"></i>
    LinkedIn
  </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/path-to-your-cv.pdf" 
              download
              className="flex items-center gap-2 bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              <FileDown size={20} />
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;