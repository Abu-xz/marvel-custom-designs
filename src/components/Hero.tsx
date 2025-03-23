
import React from 'react';
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
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-marvel-red/10 border border-marvel-red/20 text-marvel-red text-sm font-medium mb-6">
            Premium Web Experiences
          </span>
        </motion.div>

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
            to="/contact"
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-marvel-red rounded-full"
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
