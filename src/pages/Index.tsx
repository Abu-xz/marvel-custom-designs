import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Code,
  Layout,
  ChevronRight,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Hero from "../components/Hero";

const Index = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: <Code className="text-marvel-red" size={24} />,
      title: "Development",
      description:
        "Clean, efficient code that brings your designs to life with smooth animations.",
    },
    {
      icon: <Lightbulb className="text-marvel-red" size={24} />,
      title: "3D Modeling",
      description:
        "Stunning 3D elements that add depth and dimension to your digital presence.",
    },
    {
      icon: <Layout className="text-marvel-red" size={24} />,
      title: "Web Design",
      description:
        "Bold interfaces with intuitive experiences built on modern design principles.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "15", label: "Design Awards" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      {/* Features section */}
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle mx-auto">
              We combine technical expertise with creative vision to deliver
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-marvel-gray rounded-xl border border-marvel-light-gray/50 hover:border-marvel-red/50 transition-all duration-300 p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-marvel-red/10 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-5">{feature.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-marvel-red hover:text-white transition-colors duration-300"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="bg-gradient-to-r from-marvel-black to-marvel-dark-gray py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-marvel-red mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="section-title">Why Choose Marvel Designs?</h2>
              <p className="text-white/70 mb-8">
                We don't just build websites; we craft digital experiences that
                captivate your audience and drive results. Our approach combines
                beautiful aesthetics with strategic functionality.
              </p>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-marvel-red">
                    <Star size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Premium Quality
                    </h3>
                    <p className="text-white/70">
                      Every project we deliver is built to the highest standards
                      of design and development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-marvel-red">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      User-Centered Approach
                    </h3>
                    <p className="text-white/70">
                      We put users at the heart of everything we create,
                      ensuring intuitive and engaging experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-marvel-red">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Fast Performance
                    </h3>
                    <p className="text-white/70">
                      Our websites are optimized for speed and performance
                      across all devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/about" className="marvel-button">
                  Learn More About Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden glass-panel">
                <div className="w-full h-full bg-marvel-gray/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-marvel-red/20 mx-auto flex items-center justify-center mb-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-8 h-8 rounded-full bg-marvel-red flex items-center justify-center"
                      >
                        <span className="text-white font-bold">M</span>
                      </motion.div>
                    </div>
                    <p className="text-white/90 font-medium">
                      Demo Visualization
                    </p>
                    <p className="text-white/50 text-sm mt-1">
                      Interactive 3D model would appear here
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-lg bg-marvel-red/10 backdrop-blur-md border border-marvel-red/20"
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-lg bg-marvel-gray/20 backdrop-blur-sm border border-white/10"
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative bg-marvel-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-marvel-red/10 opacity-30" />

        <div className="relative section-container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Let's work together to create a stunning website that represents
              your brand and drives results.
            </p>
            <Link to="/contact" className="marvel-button text-lg px-8 py-4">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Index;
