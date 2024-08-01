import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/header';
import LogoNav from '../components/logonav';
import Copyright from '../components/copyright';

const MotionSection = ({ children, delay = 0.2, duration = 0.75 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ delay, duration, ease: 'easeInOut' }}
    >
      {children}
    </motion.section>
  );
};

const SidebarItem = ({ label, isActive, onClick }) => {
  const baseClasses = 'px-5 py-6 whitespace-nowrap bg-white border-b border-blue-50 max-md:px-5 text-sm cursor-pointer hover:bg-blue-100';
  const activeClasses = 'flex gap-5 justify-between py-5 pl-5 font-medium text-white whitespace-nowrap bg-sky-500 border-b border-gray-300 max-md:pl-5 text-sm';

  return (
    <motion.li
      className={isActive ? activeClasses : baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      {isActive && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a034744d6aaea12b747870a7f13560f878b7a1726504227699aa678331277bce?apiKey=7fd2b033b9574f39882fe9ef4728cd45&&apiKey=7fd2b033b9574f39882fe9ef4728cd45"
          className="shrink-0 w-1.5 aspect-[0.3] fill-sky-500"
          alt=""
        />
      )}
    </motion.li>
  );
};

const ContentSection = ({ activeItem }) => {
  const content = {
    Overview: 'Penjelasan singkat tentang Desa Aek Sipitudai...',
    Demography: 'Informasi demografis Desa Aek Sipitudai...',
    Divisions: 'Informasi tentang divisi-divisi di Desa Aek Sipitudai...',
    Districts: 'Informasi tentang distrik di Desa Aek Sipitudai...',
    Tehsils: 'Informasi tentang tehsil di Desa Aek Sipitudai...',
    Blocks: 'Informasi tentang blok di Desa Aek Sipitudai...',
    GramPanchayat: 'Informasi tentang gram panchayat di Desa Aek Sipitudai...',
    Villages: 'Informasi tentang desa-desa di Desa Aek Sipitudai...',
  };

  return (
    <article className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
      <div className="grow px-6 py-5 w-full bg-white shadow-[0px_5px_7px_rgba(0,14,31,0.18)] max-md:px-5 max-md:mt-9 max-md:max-w-full text-sm">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <h3 className="text-2xl font-semibold leading-8 text-indigo-900 max-md:max-w-full text-sm">
              {activeItem}
            </h3>
            <p className="mt-5 leading-7 font-sm text-stone-500 max-md:max-w-full text-sm">
              {content[activeItem]}
            </p>
          </div>
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2fe527f67ecd2e9b95ba40b56ccbb130cac5614535c98b4aa50245bc947a691?apiKey=7fd2b033b9574f39882fe9ef4728cd45&&apiKey=7fd2b033b9574f39882fe9ef4728cd45"
              className="grow w-full aspect-[1.12] max-md:mt-10 max-md:max-w-full"
              alt={activeItem}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

const sidebarItems = [
  { label: 'Overview', isActive: true },
  { label: 'Demography', isActive: false },
  { label: 'Divisions', isActive: false },
  { label: 'Districts', isActive: false },
  { label: 'Tehsils', isActive: false },
  { label: 'Blocks', isActive: false },
  { label: 'Gram Panchayat', isActive: false },
  { label: 'Villages', isActive: false },
];

const ExploreState = () => {
  const [activeItem, setActiveItem] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main className="flex justify-center items-center bg-white max-md:px-5">
      <section className="flex flex-col items-center px-8 pb-20 mt-3 w-full bg-white max-w-[1399px] max-md:max-w-full">
        <h2 className="self-center text-xl font-medium text-center text-sky-500 text-sm">
          Mengenal Lebih Dalam
        </h2>
        <h1 className="self-center mt-3 text-2xl font-semibold text-center text-indigo-900 text-sm">
          Keadaan dan Informasi Desa Aek Sipitudai
        </h1>
        <div className="self-stretch mt-9 mb-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <nav className="hidden md:flex md:flex-col w-[18%] max-md:ml-0 max-md:w-full">
              <ul className="flex flex-col grow text-lg leading-7 shadow-[0px_5px_7px_rgba(0,14,31,0.18)] text-neutral-400 max-md:mt-8">
                {sidebarItems.map((item, index) => (
                  <SidebarItem
                    key={index}
                    label={item.label}
                    isActive={activeItem === item.label}
                    onClick={() => {
                      setActiveItem(item.label);
                      handleCloseSidebar();
                    }}
                  />
                ))}
              </ul>
            </nav>
            <div className="md:hidden flex justify-end w-full">
              <button
                className="text-indigo-900 focus:outline-none"
                onClick={handleSidebarToggle}
                aria-label="Toggle sidebar"
                aria-expanded={isSidebarOpen}
              >
                ☰
              </button>
            </div>
            {isSidebarOpen && (
              <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleCloseSidebar}></div>
            )}
            <div
              className={`md:hidden fixed top-0 right-0 h-full w-[250px] bg-white shadow-[0px_5px_7px_rgba(0,14,31,0.18)] z-50 transform ${
                isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300`}
            >
              <button className="p-5 text-indigo-900 focus:outline-none" onClick={handleCloseSidebar}>
                ✕
              </button>
              <ul className="flex flex-col text-lg leading-7 text-neutral-400">
                {sidebarItems.map((item, index) => (
                  <SidebarItem
                    key={index}
                    label={item.label}
                    isActive={activeItem === item.label}
                    onClick={() => {
                      setActiveItem(item.label);
                      handleCloseSidebar();
                    }}
                  />
                ))}
              </ul>
            </div>
            <ContentSection activeItem={activeItem} />
          </div>
        </div>
      </section>
    </main>
  );
};

const MainComponent = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <motion.div
        className="px-5 flex gap-5 justify-center self-center mt-5 mb-5 w-full max-w-[1399px] max-md:px-5 max-md:max-w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.75, ease: 'easeInOut' }}
      >
        <LogoNav />
      </motion.div>
      <ExploreState />
      <Copyright />
    </div>
  );
};

export default MainComponent;