import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioItem from "../components/PortfolioItem";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [limit, setLimit] = useState(6);

  const loadMoreProject = () => {
    setLimit((l) => (l += 6));
  };

  const hideProjects = () => {
    setLimit(6)
  }

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const projects = [
    {
      id: 1,
      title: "Tva Gang Vehicle",
      category: "3D Modeling",
      imageSrc: "/works/tva1.jpg",
      description: "Custom 3D modeled and rendered gang vehicle for the TVA crew in FiveM.",
      tags: ["Blender", "Rendering"],
      filter: "3d",
      demo: "https://example.com/demo/3d-product-render",
      features: ["3D Modeling", "High-Res Rendering", "Product Visualization"]
    },
    {
      id: 2,
      title: "Tva Gang Vehilcle 2",
      category: "3D Modeling",
      imageSrc: "/works/tva2.jpg",
      description: "Custom Made Work Done For Gang Tva",
      tags: ["Blender","Rendering"],
      filter: "3d",
      demo: "https://example.com/demo/3d-product-render",
      features: ["3D Modeling", "High-Res Rendering", "Product Visualization"]
    },
  
    // Bot Projects
    {
      id: 10,
      title: "FiveM SQL Bot",
      category: "Bot Development",
      imageSrc: "/works/sqlbot.png",
      description: "A powerful SQL-based Discord bot to manage FiveM server tasks directly from Discord.",
      tags: ["Discord.js", "Node.js"],
      filter: "bot",
      demo: "https://github.com/yourprofile/telegram-order-bot",
      features: ["10+ Commands", "Manage FiveM Server"]
    },
  
    // Design Projects
    {
      id: 3,
      title: "Choppee's Rings",
      category: "Packet Designing",
      imageSrc: "/works/chopees.png",
      description: "Creative snack packaging design for Choppee’s Rings, blending bold visuals and brand identity.",
      tags: ["Package Design", "Snacks"],
      filter: "desgins",
      demo: "https://example.com/demo/brand-identity-kit",
      features: []
    },
    {
      id: 4,
      title: "Nesmee",
      category: "Company Profile",
      imageSrc: "/works/compprofile.png",
      description: "Professionally designed corporate brochure for Nesmee, tailored for both print and digital use.",
      tags: ["InDesign", "Typography", "Print Design"],
      filter: "desgins",
      demo: "/demos/brochure-sample.pdf",
      features: ["Bi-Fold Design", "Print Ready", "Custom Layouts", "High-Quality Typography"]
    },
    {
      id: 5,
      title: "Edu Connect",
      category: "Brochure Designing",
      imageSrc: "/works/brochure.png",
      description: "Elegant and informative brochure design for Edu Connect, crafted for educational services.",
      tags: ["InDesign", "Typography", "Print Design"],
      filter: "desgins",
      demo: "/demos/brochure-sample.pdf",
      features: ["Bi-Fold Design", "Print Ready", "Custom Layouts", "High-Quality Typography"]
    },
    {
      id: 8,
      title: "Vertex",
      category: "Logo Design",
      imageSrc: "/works/vertex.png",
      description: "Modern and professional logo design created for the Vertex brand, complete with vector assets.",
      tags: ["Illustrator", "Brand Identity", "Vector Design"],
      filter: "desgins",
      demo: "/demos/logo-portfolio.pdf",
      features: ["Logo Variants", "Vector Files"]
    },
  
    // FiveM Projects
    {
      id: 6,
      title: "Unity Verse Roleplay",
      category: "FiveM Development",
      imageSrc: "/works/unityverse.png",
      description: "Full-featured FiveM roleplay server setup with custom scripts, job systems, and vehicle mods.",
      tags: ["Lua", "FiveM", "GTA V"],
      filter: "fivem",
      demo: "https://youtu.be/fivem-server-demo",
      features: ["ESX", "RP Server Setup", "Custom Scripts", "Vehicle Mods", "Job Systems"]
    },
    {
      id: 7,
      title: "Unity Verse Cinematics",
      category: "FiveM Development",
      imageSrc: "/works/uvc.png",
      description: "Custom cinematic scenes and promotional visuals crafted for the Unity Verse RP community.",
      tags: ["Lua", "FiveM", "GTA V"],
      filter: "fivem",
      demo: "https://youtu.be/fivem-server-demo",
      features: ["ESX", "RP Server Setup", "Custom Scripts", "Vehicle Mods", "Job Systems"]
    },
  
    // Web Projects
    {
      id: 9,
      title: "UrbanStyle Web App",
      category: "Web Development",
      imageSrc: "placeholder.svg",
      description: "We build websites of all types – portfolios, e-commerce, business sites – with responsive and modern designs.",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      filter: "web",
      demo: "https://urbanstyle.vercel.app",
      features: ["Responsive Layout", "Frontend + Backend", "API Integration", "SEO Optimized"]
    }
  ];
  

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "desgins", label: "Designs" },
    { id: "3d", label: "3D Modeling" },
    { id: "web", label: "Web" },
    { id: "fivem", label: "FiveM Development" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            Showcasing Our{" "}
            <span className="text-marvel-red">Creative Work</span>
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
                    ? "bg-marvel-red text-white"
                    : "bg-marvel-gray/50 text-white/70 hover:bg-marvel-red/20 hover:text-white"
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
            {filteredProjects.map((project, index) =>
              index + 1 <= limit ? (
                <motion.div key={project.id} variants={itemVariants}>
                  <PortfolioItem
                    title={project.title}
                    category={project.category}
                    imageSrc={project.imageSrc}
                    description={project.description}
                    tags={project.tags}
                    features={project.features}
                    demo={project.demo}
                  />
                </motion.div>
              ) : null
            )}
          </motion.div>

          {/* Show More Button */}
          {filteredProjects.length > 0 && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {limit >= projects.length ? (
                <button
                  className="marvel-button-outline"
                  onClick={hideProjects}
                >
                  Hide Projects
                </button>
              ) : (
                <button
                  className="marvel-button-outline"
                  onClick={loadMoreProject}
                >
                  Load More Projects
                </button>
              )}
            </motion.div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-white/70 mb-4">
                No projects found with the selected filter.
              </p>
              <button
                className="marvel-button-outline"
                onClick={() => setActiveFilter("all")}
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
                quote:
                  "Your service is commendable. We congratulate you on behalf of Gokul Nagar Residence Association. We will contact you if we have any future projects. We will also be happy to recommend you to anyone we know who needs such services.We wish you all the best for your future endeavors.",
                author: "Sudharsan S",
                position: "Treasurer, Gokul Nagar Residence Association Palakkad",
              },
              {
                quote:
                  "Your service has been truly commendable. On behalf of the Gokul Nagar Residence Association, we extend our heartfelt congratulations. We look forward to collaborating again on future projects and would gladly recommend your services to others. Wishing you continued success in all your future endeavors.",
                author: "Sidhart",
                position: "Founder, Vertex School of Science",
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
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-marvel-red mr-1"
                      >
                        <path
                          d="M10 1L12.39 6.5H18.5L13.5 10.5L15.5 16L10 12.5L4.5 16L6.5 10.5L1.5 6.5H7.61L10 1Z"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-marvel-gray flex items-center justify-center mr-3">
                      <span className="text-marvel-red font-medium">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-white/60">
                        {testimonial.position}
                      </div>
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
                  Ready to discuss your project? Contact us today to start the
                  conversation about bringing your vision to life.
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
