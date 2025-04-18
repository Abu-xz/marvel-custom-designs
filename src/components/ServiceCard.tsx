import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  features,
}) => {
  return (
    <motion.div
      className="marvel-card group h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-8 flex flex-col h-full">
        {/* Image block */}
        <div className="w-full h-50 rounded-xl  mb-6">
          <motion.img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
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
