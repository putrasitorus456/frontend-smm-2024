import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/header';
import LogoNav from '../components/logonav';
import Copyright from '../components/copyright';

console.log("GovPage component rendered");

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

function ImageDisplay() {
  return (
    <main className="flex justify-center items-center px-16 py-10 bg-white max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d6d17327d2d9ba2095acd3f3dbe4a5f92c2eac774143c1453438b2518190b74?apiKey=7fd2b033b9574f39882fe9ef4728cd45&&apiKey=7fd2b033b9574f39882fe9ef4728cd45"
        alt=""
        className="mt-5 w-full aspect-[1.75] max-w-[1332px] max-md:max-w-full"
      />
    </main>
  );
}

const GovPage = () => {
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
      <MotionSection>
        <header className="mt-3 flex flex-col self-center text-center max-md:max-w-full">
          <h2 className="self-center text-2xl font-medium leading-1 text-sky-500 max-md:max-w-full max-md:text-xl">
            Struktur Organisasi
          </h2>
          <h1 className="mt-3 text-3xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-2xl">
            Pemerintahan Desa Aek Sipitudai
          </h1>
        </header>
        <ImageDisplay />
      </MotionSection>
      <Copyright />
    </div>
  );
};

export default GovPage;