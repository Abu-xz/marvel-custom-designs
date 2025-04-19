import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const contactInfo = [
    {
      icon: <Phone className="text-marvel-red" size={24} />,
      title: "Phone",
      details: ["+91 8301898610"],
    },
    {
      icon: <Mail className="text-marvel-red" size={24} />,
      title: "Email",
      details: ["contact@marveldesigns.com"],
    },
    {
      icon: <Clock className="text-marvel-red" size={24} />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9AM - 6PM",
        "Saturday: 10AM - 4PM",
        "Sunday: Closed",
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, name: "Instagram", url: "https://www.instagram.com/marvel_custom_designs/" },
    { icon: <MessageCircle size={20} />, name: "Whatsapp", url: "https://wa.me//+918089984763" },
    { icon: <Linkedin size={20} />, name: "LinkedIn", url: "https://www.linkedin.com/" },
  ];

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
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Start a <span className="text-marvel-red">Conversation</span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind? We'd love to hear about it. Get in touch
            with our team to discuss how we can help bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-white/70">
                  Fill out the form below, and we'll get back to you as soon as
                  possible.
                </p>
              </motion.div>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-white/70">
                  Reach out to us directly using any of the contact methods
                  below.
                </p>
              </motion.div>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="marvel-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-marvel-red/10 flex items-center justify-center mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="space-y-1">
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-white/70">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-medium text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 rounded-full bg-marvel-gray flex items-center justify-center text-white/70 hover:bg-marvel-red hover:text-white transition-colors duration-300"
                      aria-label={social.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is your typical process for a new project?",
                  answer:
                    "Our process begins with an initial consultation to understand your needs and goals. We then develop a proposal outlining scope, timeline, and budget. Once approved, we move into design, development, testing, and launch phases, with client feedback at each stage.",
                },
                {
                  question: "How long does it take to complete a website?",
                  answer:
                    "Project timelines vary based on complexity and scope. A basic website might take 4-6 weeks, while more complex projects with custom features can take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "Do you offer maintenance services after launch?",
                  answer:
                    "Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally. These can include regular updates, security monitoring, content changes, and technical support.",
                },
                {
                  question: "What information do you need to start a project?",
                  answer:
                    "To get started, we need your business information, project goals, target audience details, content (text, images, videos), brand guidelines if available, and examples of websites you like. We'll guide you through this process during our initial consultation.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="marvel-card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-medium text-white">
                        {faq.question}
                      </h3>
                      <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute transition-all duration-300 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute transition-all duration-300 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-white/70">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
