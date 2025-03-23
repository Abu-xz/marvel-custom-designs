
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <motion.div
      className="marvel-card group h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="w-14 h-14 rounded-lg bg-marvel-red/10 flex items-center justify-center mb-6 group-hover:bg-marvel-red/20 transition-colors duration-300">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="mt-auto">
          <div className="mb-6">
            <div className="h-px bg-gradient-to-r from-marvel-red/20 to-transparent" />
          </div>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-marvel-red mr-2.5" />
                <span className="text-white/80 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
