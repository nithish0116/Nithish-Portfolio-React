import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Github, Linkedin } from 'lucide-react';
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Assests/wallpaper.portfolio.jpg')`,
        }}
      />

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
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/gadala-nithish" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 hover:border-gray-600 hover:text-white transition-colors"
              >
              <Linkedin size={24} />
               LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;