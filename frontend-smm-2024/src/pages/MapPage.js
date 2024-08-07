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
  const baseClasses = 'px-5 py-6 whitespace-normal bg-white border-b text-[#666666] border-blue-50 max-md:px-5 text-[15px] cursor-pointer hover:bg-sky-100';
  const activeClasses = 'flex gap-5 justify-between py-5 pl-5 font-[12px] text-white whitespace-normal bg-sky-500 border-b border-gray-300 max-md:pl-5';

  return (
    <motion.li
      className={isActive ? activeClasses : baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
      }}
    >
      {label}
    </motion.li>
  );
};

const ContentSection = ({ activeItem, handleSidebarToggle, isSidebarOpen }) => {
  const content = {
    'Batas Wilayah': {
      text: 'Informasi tentang batas wilayah Desa Aek Sipitudai...',
      img: 'URL_GAMBAR_BATAS_WILAYAH',
    },
    'Mitigasi Tanah Longsor': {
      text: 'Informasi tentang mitigasi tanah longsor di Desa Aek Sipitudai...',
      img: 'URL_GAMBAR_MITIGASI_TANAH_LONGSOR',
    },
    'Mitigasi Kebakaran Hutan dan Lahan': {
      text: 'Informasi tentang mitigasi kebakaran hutan dan lahan di Desa Aek Sipitudai...',
      img: 'URL_GAMBAR_MITIGASI_KEBAKARAN',
    },
    'Mitigasi Banjir': {
      text: 'Informasi tentang mitigasi banjir di Desa Aek Sipitudai...',
      img: 'URL_GAMBAR_MITIGASI_BANJIR',
    },
  };

  if (!content[activeItem]) {
    return null; // atau tambahkan pengendalian error di sini
  }

  return (
    <article className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
      <div className="relative flex flex-col grow px-6 py-5 w-full h-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] max-md:px-5 max-md:mt-9 max-md:max-w-full text-sm">
        <button
          className="absolute top-3 right-3 m-2 text-indigo-900 focus:outline-none md:hidden text-2xl flex items-center"
          onClick={handleSidebarToggle}
          aria-label="Toggle sidebar"
          aria-expanded={isSidebarOpen}
        >
          ☰
        </button>
        <div className="flex gap-5 w-full h-full max-md:flex-col">
          <div className="flex flex-col w-full h-full max-md:ml-0 max-md:w-full">
            <h3 className="text-xl font-semibold leading-8 text-indigo-900 max-md:max-w-full">
              {activeItem}
            </h3>
            <p className="mt-5 leading-7 font-sm text-stone-500 max-md:max-w-full text-sm">
              {content[activeItem].text}
            </p>
          </div>
          <div className="flex flex-col w-full h-full items-start max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={content[activeItem].img}
              className="w-full h-auto aspect-[1.12] max-md:mt-10 max-md:max-w-full"
              alt={activeItem}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

const sidebarItems = [
  { label: 'Batas Wilayah', isActive: true },
  { label: 'Mitigasi Tanah Longsor', isActive: false },
  { label: 'Mitigasi Kebakaran Hutan dan Lahan', isActive: false },
  { label: 'Mitigasi Banjir', isActive: false },
];

const ExploreState = () => {
  const [activeItem, setActiveItem] = useState('Batas Wilayah');
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
        <h2 className="self-center text-xl font-medium text-center text-sky-500">
          Telusuri Mengenai
        </h2>
        <h1 className="self-center mt-3 text-2xl font-semibold text-center text-indigo-900">
          Peta Keadaan dan Mitigasi Bencana Desa Aek Sipitudai
        </h1>
        <div className="self-stretch mt-9 mb-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <nav className="hidden md:flex md:flex-col w-[18%] max-md:ml-0 max-md:w-full">
              <ul className="flex flex-col grow text-lg leading-7 shadow-[0_2px_10px_rgba(0,0,0,0.2)] text-neutral-400 max-md:mt-8">
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
            <ContentSection activeItem={activeItem} handleSidebarToggle={handleSidebarToggle} isSidebarOpen={isSidebarOpen} />
            {isSidebarOpen && (
              <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleCloseSidebar}></div>
            )}
            <div
              className={`md:hidden fixed top-0 right-0 h-full w-[250px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] z-50 transform ${
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
        className="px-5 flex gap-5 justify-center self-center mt-5 mb-5 w-full max-w-full max-md:flex-wrap max-md:max-w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <LogoNav />
      </motion.div>
      <MotionSection>
        <ExploreState />
      </MotionSection>
      <Copyright />
    </div>
  );
};

export default MainComponent;