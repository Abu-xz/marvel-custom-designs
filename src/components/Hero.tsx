
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
 
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-marvel-black z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-marvel-red/20 via-transparent to-transparent opacity-50" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
         <motion.div
         key={i}
         className="absolute bg-marvel-red/10 rounded-full blur-3xl"
         style={{
           width: 200 + Math.random() * 400, // Width between 200-600px
           height: 200 + Math.random() * 400, // Height between 200-600px
           left: `${Math.random() * 80 + 10}%`, // Keeps it inside the viewport
           top: `${Math.random() * 80 + 10}%`, // Keeps it inside the viewport
         }}
         animate={{
           x: [0, Math.random() * 40 - 20], // Moves slightly left/right
           y: [0, Math.random() * 40 - 20], // Moves slightly up/down
           opacity: [0.8, 1, 0.8], // Smooth opacity pulsing effect
         }}
         transition={{
           duration: 10 + Math.random() * 5, // 10-15s duration
           repeat: Infinity,
           repeatType: "mirror",
           ease: "easeInOut",
         }}
       />
       
        ))}
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container flex flex-col items-center text-center">

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Craft <span className="text-marvel-red text-glow">Bold</span> Digital <br className="hidden md:block" />
          Experiences That <span className="text-marvel-red text-glow">Matter</span>
         
        </motion.h1>

        <motion.p
          className="text-xl text-white/70 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We create stunning websites and digital products that help businesses stand out in the digital landscape with bold, high-contrast, and futuristic designs.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/services"
            className="marvel-button group"
          >
            Start Your Project
            <motion.span
              className="inline-block ml-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </Link>
          <Link
            to="/portfolio"
            className="marvel-button-outline group"
          >
            View Our Work
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
