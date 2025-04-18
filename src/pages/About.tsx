
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, BarChart, Users, Lightbulb, Rocket,Award,Timer, Target,SmilePlus, ChevronRight, } from 'lucide-react';

const About = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // const team = [
  //   {
  //     name: 'Alex Johnson',
  //     role: 'Founder & Creative Director',
  //     bio: 'With over 15 years of experience in design and development, Alex leads our creative vision and strategy.',
  //     imageSrc: 'placeholder.svg'
  //   },
  //   {
  //     name: 'Sarah Thompson',
  //     role: 'UI/UX Design Lead',
  //     bio: 'Sarah combines artistic talent with a deep understanding of user behavior to create intuitive digital experiences.',
  //     imageSrc: 'placeholder.svg'
  //   },
  //   {
  //     name: 'David Chen',
  //     role: 'Senior Developer',
  //     bio: 'David brings technical expertise and problem-solving skills to transform designs into seamless functional websites.',
  //     imageSrc: 'placeholder.svg'
  //   },
  //   {
  //     name: 'Maya Rodriguez',
  //     role: '3D Modeling Specialist',
  //     bio: 'Maya creates stunning 3D visualizations that add depth and dimension to our clients\' digital presence.',
  //     imageSrc: 'placeholder.svg'
  //   }
  // ];

  const values = [
    {
      icon: <Palette className="text-marvel-red" size={24} />,
      title: 'Creativity',
      description: 'We believe in pushing boundaries and delivering original, impactful designs that stand out.'
    },
    {
      icon: <Rocket className="text-marvel-red" size={24} />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and solutions, keeping your projects ahead of the curve.'
    },
    {
      icon: <SmilePlus className="text-marvel-red" size={24} />,
      title: 'Quality',
      description: 'We are committed to delivering exceptional work, ensuring every detail meets the highest standards.'
    },
    {
      icon: <Timer className="text-marvel-red" size={24} />,
      title: 'Reliability',
      description: 'Deadlines matter. We deliver on time, every time without compromising on quality.'
    }
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
      <section className="relative bg-marvel-black py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-marvel-red/10 to-transparent opacity-60" />

        <div className="relative section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-marvel-red/10 border border-marvel-red/20 text-marvel-red text-sm font-medium mb-6">
                About Us
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              <span className="text-marvel-red"> Marvel </span> Custom Designs
              </h1>
              
              <p className="text-xl text-white/70 mb-8">
              Marvel Customs is a creative and innovative digital studio founded on February 22, 2023, We specialize in delivering high-quality design and development services across various platforms. With a passion for creativity and a commitment to excellence, 
              we bring bold ideas to life through custom 3D visuals, seamless user interfaces, and powerful web and gaming solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="marvel-button">
                  Get in Touch
                </Link>
                <Link to="/services" className="marvel-button-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-video rounded-xl overflow-hidden glass-panel">
                <div className="w-full h-full bg-marvel-gray/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-marvel-red/20 mx-auto flex items-center justify-center mb-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 rounded-full bg-marvel-red flex items-center justify-center"
                      >
                        <span className="text-white font-bold">M</span>
                      </motion.div>
                    </div>
                    <p className="text-white/90 font-medium">Team Photo</p>
                    <p className="text-white/50 text-sm mt-1">Team image would appear here</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-lg bg-marvel-red/10 backdrop-blur-md border border-marvel-red/20"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg bg-marvel-gray/20 backdrop-blur-sm border border-white/10"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden marvel-card">
                  <div className="w-full h-full bg-marvel-gray/30 flex items-center justify-center">
                  <img src="/marvel_logo.png" alt="marvelcustomdesign"/>
                    {/* <div className="text-center p-8">
                      <Award className="w-12 h-12 text-marvel-red mb-4 mx-auto" />
                      <p className="text-white/90 font-medium">Our Journey</p>
                      <p className="text-white/50 text-sm mt-1">Founder image would appear here</p>
                    </div> */}
                  </div>
                </div>
                
                {/* Stats overlay */}
                <motion.div
                  className="absolute -bottom-6 -right-6 glass-panel rounded-lg px-6 py-4 border border-marvel-red/20"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="flex items-center">
                    <BarChart className="text-marvel-red mr-3" size={24} />
                    <div>
                      <div className="text-2xl font-bold text-white">2 Years</div>
                      <div className="text-white/60 text-sm">Of Success</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Our Story
              </h2>
              
              <p className="text-white/70 mb-6">
              Marvel Customs began its journey on February 22, 2023, with a simple vision to blend creativity and technology into 
              something truly impactful. Founded by Alpha (Athul) , a passionate creator with a love for design, development, 
              and gaming, Marvel Customs was built to offer unique solutions in the digital space.
              </p>
              
              <p className="text-white/70 mb-6">
              What started as a small idea quickly evolved into a full-fledged creative studio, delivering a wide range of services including 
              3D design, UI/UX, web development, game scripting, and brand building. We’ve worked with gamers,businesses, 
              and content creators to craft custom experiences that are not only functional but unforgettable.
              </p>
              
              <p className="text-white/70 mb-8">
              Driven by innovation and attention to detail, our team is committed to helping clients bring their ideas to life
              whether it’s a stunning visual, a powerful website, or a fully customized FiveM server.

            🎯 At Marvel Customs, your vision becomes our mission.
              </p>
              
              <Link
                to="/portfolio"
                className="inline-flex items-center text-marvel-red hover:text-white transition-colors duration-300"
              >
                View our work <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-marvel-dark-gray py-20">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Core Principles</h2>
            <p className="section-subtitle mx-auto">
              These core principles guide our approach to every project and client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="marvel-card p-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-marvel-red/10 flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section
      <section className="bg-marvel-black py-20">
        <div className="section-container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              The talented individuals behind our exceptional work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="marvel-card overflow-hidden group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <div
                    className="w-full h-full bg-marvel-gray/60 group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${member.imageSrc})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-marvel-red text-sm mb-4">{member.role}</p>
                  <p className="text-white/70">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-marvel-black to-marvel-dark-gray py-20">
        <div className="section-container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/70 mb-10">
            Let’s collaborate and bring your digital vision to life. Whether it’s a bold design, a custom development project, 
            or a unique gaming experience <br />  
          <strong className="text-white">Marvel Customs has the creativity and skill to make it happen.</strong>
          </p>

            <Link to="/contact" className="marvel-button text-lg px-8 py-4">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
