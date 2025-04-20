import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PortfolioItemProps {
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  tags: string[];
  features: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  category,
  imageSrc,
  description,
  tags,
  features,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <motion.div
        className="group cursor-pointer h-full"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        onClick={openModal}
      >
        <div className="marvel-card h-full overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden">
            <div
              className="w-full h-full bg-marvel-gray/50"
              style={{
                backgroundImage: `url(${imageSrc || "placeholder.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full">
                <span className="text-xs text-marvel-red mb-1 block">
                  {category}
                </span>
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <span className="text-xs text-marvel-red mb-1 block">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-white/70 line-clamp-2">{description}</p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-marvel-gray rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-marvel-red transition-colors duration-200"
                onClick={closeModal}
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className="aspect-[4/3] md:aspect-auto md:h-full"
                  style={{
                    backgroundImage: `url(${imageSrc || "placeholder.svg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="p-8">
                  <span className="inline-block py-1 px-2 rounded bg-marvel-red/10 text-marvel-red text-xs mb-4">
                    {category}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {title}
                  </h2>
                  <p className="text-white/70 mb-6">{description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-white/80 mb-2">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-marvel-black/50 rounded text-xs text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ✅ New Features Section */}
                  {features?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-white/80 mb-2">
                        Project Features
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-white/70 text-sm">
                        {features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex space-x-4">
                    <button className="marvel-button px-4 py-2 text-sm">
                      View Live Site
                    </button>
                    <button className="marvel-button-outline px-4 py-2 text-sm">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioItem;
