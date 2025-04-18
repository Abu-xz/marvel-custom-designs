import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-marvel-black border-t border-marvel-gray/30">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-display font-bold text-white mb-5">
              <span className="text-marvel-red">Marvel</span> Designs
            </h3>
            <p className="text-white/70 mb-6 max-w-xs">
           <strong>Creating Stunning Digital Experiences</strong> <br />
            With a focus on exceptional user experience and cutting-edge design, 
            we bring ideas to life that captivate, engage, and inspire.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/marvel_custom_designs/"
                className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me//+918089984763"
                className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                aria-label="whatsApp"
              >
                <MessageCircle  size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  3D Modeling
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/60 hover:text-marvel-red transition-colors duration-300"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold text-white mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail
                  className="text-marvel-red flex-shrink-0 mt-1"
                  size={18}
                />
                <a href="">
                  <span className="text-white/60">
                    marvelcustomdesigns@gmail.in
                  </span>
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail
                  className="text-marvel-red flex-shrink-0 mt-1"
                  size={18}
                />
                <a href="mailto:contact@marveldesigns.in">
                  <span className="text-white/60">
                    contact@marveldesigns.in
                  </span>
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone
                  className="text-marvel-red flex-shrink-0 mt-1"
                  size={18}
                />
                <a href="https://wa.me//+918089984763">
                  <span className="text-white/60">+91 8089984763</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-marvel-gray/20 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50 text-sm">
          <a href="">
          © {new Date().getFullYear()} Marvel Custom Designs. All rights reserved.
          </a>
           
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
