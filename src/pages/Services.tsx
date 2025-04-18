import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Code,
  Monitor,
  Lightbulb,
  Sparkles,
  Layers,
  BarChart,
  Palette,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const services = [
    {
      imageSrc: "/web_dev.png",
      title: "Web Development",
      description:
        "Full-stack web solutions using modern frameworks and tools.",
      features: [
        "Front-end & Back-end",
        "API Integration",
        "Database Setup",
        "Deployment",
      ],
    },

    {
      imageSrc: "/3d_modeling.png",
      title: "3D Modeling",
      description:
        "Creating realistic 3D visuals for products, environments, and concepts.",
      features: [
        "Product Visualization",
        "Architectural Models",
        "Character Modeling",
        "3D Animation",
      ],
    },
    {
      imageSrc: "/fivem_dev.png",
      title: "FiveM Development",
      description:
        "Custom FiveM server development for GTA V roleplay communities.",
      features: [
        "Server Setup",
        "Custom Scripts",
        "Vehicle Add-ons",
        "Role play Features",
      ],
    },
    {
      imageSrc: "/bot_development.png",
      title: "Bot Development",
      description:
        "Automating tasks and interactions with custom bots for platforms like Telegram and Discord.",
      features: [
        "Telegram Bots",
        "Discord Bots",
        "Web Automation",
        "Chatbot Integration",
      ],
    },
    {
      imageSrc: "/Branding.png",
      title: "Branding",
      description:
        "Building memorable brands with strategic visuals and messaging.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Schemes",
        "Typography Systems",
      ],
    },
    {
      imageSrc: "/ui_ux_design.png",
      title: "UI/UX Design",
      description:
        "User-focused interfaces that provide seamless digital experiences.",
      features: [
        "Wireframes & Prototypes",
        "User Research",
        "UI Kits",
        "Interactive Design",
      ],
    },
    {
      imageSrc: "/Brochure.png",
      title: "Brochure Design",
      description:
        "Designing professional brochures that effectively showcase your services or products.",
      features: [
        "Tri-fold Layouts",
        "Product Brochures",
        "Digital Brochures",
        "Print-ready Files",
      ],
    },
    {
      imageSrc: "/web_dev.png",
      title: "Web Designing",
      description:
        "Designing responsive and engaging websites with modern aesthetics.",
      features: [
        "Landing Pages",
        "Portfolio Sites",
        "Corporate Web Design",
        "Responsive Layouts",
      ],
    },

    {
      imageSrc: "/logo_design.png",
      title: "Logo Design",
      description:
        "Designing impactful logos that reflect your brand’s essence.",
      features: [
        "Minimal Logos",
        "Icon & Wordmark",
        "Scalable Vectors",
        "Multiple Concepts",
      ],
    },
    {
      imageSrc: "/packet_design.png",
      title: "Packet Design",
      description:
        "Attractive packaging designs that grab attention and align with your brand.",
      features: [
        "Snack Packaging",
        "Label Design",
        "Eco-friendly Concepts",
        "Print Files",
      ],
    },
    {
      imageSrc: "/poster.png",
      title: "Poster Designing",
      description: "Creative posters for events, products, and promotions.",
      features: [
        "Event Posters",
        "Product Ads",
        "Social Media Posters",
        "Print & Digital Formats",
      ],
    },
    {
      imageSrc: "/data_entry.png",
      title: "Data Entry",
      description:
        "Accurate and efficient data entry services for your business operations.",
      features: [
        "Spreadsheet Management",
        "Data Cleaning",
        "Form Filling",
        "Database Updates",
      ],
    },
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
      <section className="relative bg-marvel-black py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-marvel-red/10 to-transparent opacity-60" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-marvel-red/10 border border-marvel-red/20 text-marvel-red text-sm font-medium mb-6">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expert Solutions for Your <br className="hidden md:block" />
            <span className="text-marvel-red">Digital Presence</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer comprehensive design and development services to bring your
            digital vision to life.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-[5%] w-24 h-24 rounded-full bg-marvel-red/10 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-32 h-32 rounded-full bg-marvel-red/10 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Services Grid */}
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-marvel-black to-marvel-dark-gray py-20">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle mx-auto">
              We follow a strategic approach to ensure every project delivers
              exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We learn about your business goals and target audience.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We develop a comprehensive plan tailored to your needs.",
              },
              {
                number: "03",
                title: "Design & Development",
                description: "We create and build your digital solution.",
              },
              {
                number: "04",
                title: "Launch & Support",
                description:
                  "We deploy your project and provide ongoing support.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative marvel-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl font-display font-bold text-marvel-red/50 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70">{step.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-marvel-red/30"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <div className="marvel-card overflow-hidden">
            <div className="p-10 md:p-16 relative">
              {/* Background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-marvel-red/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-marvel-red/5 rounded-full blur-3xl -ml-32 -mb-32" />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:max-w-xl">
                  <motion.h2
                    className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    Ready to Start Your Next Project?
                  </motion.h2>
                  <motion.p
                    className="text-white/70 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Contact us today to discuss how we can help bring your
                    vision to life with our expert design and development
                    services.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  <a
                    href="/contact"
                    className="marvel-button text-lg px-8 py-4"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
