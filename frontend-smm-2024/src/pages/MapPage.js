import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/header';
import LogoNav from '../components/logonav';
import Copyright from '../components/copyright';

console.log("MapPage component rendered");

const MotionSection = ({ children, delay = 0.2, duration = 0.75 }) => { // Mengurangi durasi menjadi 0.5 detik
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95}}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : { opacity: 0, y: 20, scale: 0.95}}
      transition={{ delay, duration, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

const MapPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <motion.div
        className="px-5 flex gap-5 justify-center self-center mt-5 mb-5 w-full max-w-full max-md:flex-wrap max-md:max-w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <LogoNav />
      </motion.div>
      <Copyright />
    </div>
  );
};

export default MapPage;