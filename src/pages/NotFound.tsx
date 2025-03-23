
import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-marvel-black pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-9xl font-display font-bold text-marvel-red">404</h1>
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Page Not Found
        </motion.h2>
        
        <motion.p 
          className="text-white/70 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/" className="marvel-button flex items-center">
            <Home className="mr-2" size={18} />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="marvel-button-outline flex items-center"
          >
            <ArrowLeft className="mr-2" size={18} />
            Go Back
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
