import React, { useState, useEffect } from 'react';
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

const Spinner = () => (
  <motion.div
    className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin"
    style={{ borderTopColor: '#3498db' }}
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1 }}
  />
);

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
  const [isLoading, setLoading] = useState(true);

  const content = {
    'Batas Wilayah': {
      text: 'Desa Aek Sipitudai terletak di Kecamatan Sianjur Mula-Mula, Kabupaten Samosir, Sumatera Utara. Berdasarkan peta administratif dan kondisi geografis, desa ini memiliki batas-batas wilayah yang jelas. Di sebelah utara, desa berbatasan dengan Pusuk Buhit, sebuah kawasan pegunungan yang terkenal. Sebelah timur berbatasan dengan Desa Boho yang juga berada dalam Kecamatan Sianjur Mula-Mula. Di bagian selatan, Desa Aek Sipitudai berbatasan dengan Desa Habeahan Naburahan dan Kecamatan Harian, sedangkan di barat berbatasan dengan Desa Sarimarrhit, yang juga masih dalam kecamatan yang sama. \n Batas-batas wilayah ini menunjukkan letak strategis Desa Aek Sipitudai yang dikelilingi oleh pegunungan, hutan, dan wilayah administratif lainnya, menjadikannya bagian penting dari lanskap geografis dan sosial di Kecamatan Sianjur Mula-Mula.',
      img: '/images/PetaBatas.png',
    },
    'Mitigasi Tanah Longsor': {
      text: 'Desa Aek Sipitudai di Kecamatan Sianjur Mula-Mula, Kabupaten Samosir, memiliki potensi kerawanan tanah longsor yang signifikan. Berdasarkan peta kerawanan bencana longsor, wilayah desa ini dikategorikan menjadi tiga tingkat kerawanan: rendah (zona hijau), sedang (zona kuning), dan tinggi (zona merah). Daerah dengan kerawanan tinggi tersebar di bagian utara dan selatan desa, menunjukkan adanya risiko besar tanah longsor di wilayah tersebut. \n Untuk mengurangi dampak bencana, mitigasi yang tepat perlu dilakukan, seperti penanaman vegetasi penahan tanah, pembuatan terasering, serta pembangunan infrastruktur pengendali longsor. Penting bagi masyarakat setempat untuk memahami area berisiko dan mengikuti panduan mitigasi yang diberikan.',
      img: '/images/PetaLongsor.png',
    },
    'Mitigasi Kebakaran Hutan dan Lahan': {
      text: 'Peta kerawanan kebakaran hutan dan lahan di Desa Aek Sipitudai ini menyoroti area yang cukup rawan terhadap kebakaran, yang ditandai dengan warna kuning. Wilayah rawan ini mencakup sebagian besar area tengah desa, yang dikelilingi oleh daerah dengan vegetasi lebat. Peta ini dibuat menggunakan proyeksi Universal Transverse Mercator (UTM) dengan grid geografi UTM dan datum World Geodetic System (WGS) 1984, memberikan presisi tinggi dalam pemetaan area rawan. \n Dengan fokus pada area berwarna kuning, pihak berwenang dan masyarakat dapat merencanakan langkah-langkah pencegahan yang lebih tepat sasaran untuk meminimalkan risiko kebakaran hutan dan lahan di desa tersebut.',
      img: '/images/PetaKarhutla.png',
    },
    'Mitigasi Banjir': {
      text: 'Peta kerawanan banjir Desa Aek Sipitudai ini mengidentifikasi tiga tingkat kerawanan banjir: sangat rawan (merah), cukup rawan (kuning), dan tidak rawan (hijau). Wilayah yang paling luas ditandai dengan warna merah, menunjukkan area yang paling rentan terhadap banjir, terutama di bagian selatan dan sebagian tengah desa. Area kuning menyebar di bagian tengah hingga ke utara, menunjukkan tingkat kerawanan yang lebih rendah dibandingkan area merah. Wilayah hijau, yang relatif kecil, berada di bagian utara dan menunjukkan area yang aman dari risiko banjir. \n Peta ini penting untuk mengidentifikasi wilayah-wilayah yang perlu mendapatkan prioritas dalam upaya mitigasi banjir. Informasi ini esensial bagi perencanaan pembangunan dan penanggulangan bencana di Desa Aek Sipitudai.',
      img: '/images/PetaBanjir.png',
    },
  };

  useEffect(() => {
    // Reset loading state to true when activeItem changes
    setLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [activeItem]);

  if (!content[activeItem]) {
    return null; // or handle error here
  }

  return (
    <article className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
      <div className="relative flex flex-col grow px-6 py-5 w-full h-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] max-md:px-5 max-md:mt-3 max-md:max-w-full text-sm">
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
              {isLoading ? (
                <div className="shimmer h-[500px] w-full bg-gray-300 rounded-md max-md:h-[100px]"></div>
              ) : (
                content[activeItem].text.split('\n').map((paragraph, index) => (
                  <p key={index} className="justified-text">
                    {paragraph}
                  </p>
                ))
              )}
            </p>
          </div>
          <div className="flex flex-col w-full h-full items-start max-md:ml-0 max-md:w-full mobile-reorder">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <img
                loading="lazy"
                src={content[activeItem].img}
                className="w-full h-auto aspect-[1.12] max-md:max-w-full"
                alt={activeItem}
              />
            )}
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
    <main className="flex justify-center items-center bg-white">
      <section className="flex flex-col items-center px-8 pb-20 mt-3 w-full bg-white max-w-[1399px] max-md:max-w-full max-md:px-5">
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