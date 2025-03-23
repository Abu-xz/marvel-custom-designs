
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const projects = [
    {
      id: 1,
      title: 'Futuristic E-commerce Platform',
      category: 'Web Development',
      imageSrc: 'placeholder.svg',
      description: 'A cutting-edge e-commerce platform with advanced product visualization and seamless checkout experience.',
      tags: ['React', 'Node.js', 'Three.js', 'Stripe'],
      filter: 'web'
    },
    {
      id: 2,
      title: 'Corporate Identity Redesign',
      category: 'Branding',
      imageSrc: 'placeholder.svg',
      description: 'Complete brand overhaul for a tech company, including logo design, color palette, and brand guidelines.',
      tags: ['Logo Design', 'Brand Strategy', 'Visual Identity'],
      filter: 'branding'
    },
    {
      id: 3,
      title: 'Interactive Product Showcase',
      category: '3D Modeling',
      imageSrc: 'placeholder.svg',
      description: 'Interactive 3D models allowing users to explore product features through an immersive digital experience.',
      tags: ['Blender', 'WebGL', 'Interactive Design'],
      filter: '3d'
    },
    {
      id: 4,
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      imageSrc: 'placeholder.svg',
      description: 'Intuitive financial dashboard with data visualization and user-friendly interface for tracking investments.',
      tags: ['UI Design', 'Data Visualization', 'User Research'],
      filter: 'ui'
    },
    {
      id: 5,
      title: 'Mobile Application',
      category: 'App Development',
      imageSrc: 'placeholder.svg',
      description: 'Cross-platform mobile application for fitness tracking with social features and personalized coaching.',
      tags: ['React Native', 'Firebase', 'UX Design'],
      filter: 'app'
    },
    {
      id: 6,
      title: 'Architectural Visualization',
      category: '3D Modeling',
      imageSrc: 'placeholder.svg',
      description: 'Photorealistic 3D renderings of architectural spaces for a luxury real estate development.',
      tags: ['3D Modeling', 'Rendering', 'Visualization'],
      filter: '3d'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.filter === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'ui', label: 'UI/UX' },
    { id: '3d', label: '3D Modeling' },
    { id: 'branding', label: 'Branding' },
    { id: 'app', label: 'Apps' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="pt-24 pb-20"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="relative bg-marvel-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-marvel-red/10 to-transparent opacity-60" />

        <div className="relative section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-marvel-red/10 border border-marvel-red/20 text-marvel-red text-sm font-medium mb-6">
              Our Portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Showcasing Our <span className="text-marvel-red">Creative Work</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our collection of projects spanning web design, development, 
            3D modeling, and branding solutions.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-marvel-black py-16">
        <div className="section-container">
          {/* Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-marvel-red text-white'
                    : 'bg-marvel-gray/50 text-white/70 hover:bg-marvel-red/20 hover:text-white'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <PortfolioItem
                  title={project.title}
                  category={project.category}
                  imageSrc={project.imageSrc}
                  description={project.description}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Show More Button */}
          {filteredProjects.length > 0 && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button className="marvel-button-outline">
                Load More Projects
              </button>
            </motion.div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-white/70 mb-4">No projects found with the selected filter.</p>
              <button 
                className="marvel-button-outline"
                onClick={() => setActiveFilter('all')}
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-marvel-dark-gray py-20">
        <div className="section-container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle mx-auto">
              What our clients say about working with Marvel Designs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Marvel Designs transformed our online presence with a website that perfectly captures our brand's essence. The team was professional, creative, and delivered beyond our expectations.",
                author: "Sarah Johnson",
                position: "Marketing Director, TechNova"
              },
              {
                quote: "The 3D modeling work Marvel Designs created for our product line helped us increase conversions by 45%. Their attention to detail and creative vision is unmatched.",
                author: "Michael Chen",
                position: "Product Manager, Innovate Inc."
              },
              {
                quote: "Working with Marvel Designs was seamless from start to finish. They took the time to understand our needs and delivered a solution that has received countless compliments from our customers.",
                author: "Emma Rodriguez",
                position: "CEO, Stellar Brands"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="marvel-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="mb-6">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-marvel-red mr-1">
                        <path d="M10 1L12.39 6.5H18.5L13.5 10.5L15.5 16L10 12.5L4.5 16L6.5 10.5L1.5 6.5H7.61L10 1Z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-marvel-gray flex items-center justify-center mr-3">
                      <span className="text-marvel-red font-medium">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-white">{testimonial.author}</div>
                      <div className="text-sm text-white/60">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <motion.div
            className="marvel-card border-marvel-red/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-10 md:p-16 relative">
              <div className="absolute top-0 right-0 w-80 h-80 bg-marvel-red/10 rounded-full blur-3xl -mr-40 -mt-40" />
              
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Let's Create Something Amazing Together
                </h2>
                <p className="text-white/70 text-lg mb-8">
                  Ready to discuss your project? Contact us today to start the conversation about bringing your vision to life.
                </p>
                <a href="/contact" className="marvel-button text-lg px-8 py-4">
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
