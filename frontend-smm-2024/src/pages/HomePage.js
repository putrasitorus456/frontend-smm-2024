import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import LogoNav from '../components/logonav';
import NewsCard from '../components/newscard';
import Copyright from '../components/copyright';
import axios from 'axios';

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

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Mengatur agar animasi berjalan ulang ketika di-scroll ulang
    threshold: 0.1, // Mengatur persentase elemen yang harus terlihat sebelum animasi dimulai
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/wisata');
  };

  return (
    <motion.section
      ref={ref}
      id="home"
      className="flex overflow-hidden relative flex-col items-start px-16 pt-20 pb-8 w-full min-h-screen max-md:px-5 max-md:max-w-full"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f97acf7b1170f383226b496ec293fbda4f44d8dfb310fa0071d84079acf96cc5?apiKey=7fd2b033b9574f39882fe9ef4728cd45&" alt="Background" className="object-cover absolute inset-0 w-full h-full" />
      <motion.div
        className="relative mt-40 text-xl leading-7 text-white max-md:mt-10 max-md:text-lg"
        initial={{ x: -50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Temukan perpaduan harmonis warisan dan keindahan alam
      </motion.div>
      <motion.h1
        className="relative mt-5 text-6xl font-semibold text-white leading-tight max-md:max-w-full max-md:text-4xl"
        initial={{ x: -50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Desa Aek Sipitudai
      </motion.h1>
      <motion.button
        className="flex relative gap-2.5 justify-center px-6 py-2 mt-7 text-0.5xl font-medium leading-7 text-center text-white whitespace-nowrap bg-sky-500 hover:bg-sky-700 rounded-lg max-md:px-5 max-md:py-2.5 max-md:text-sm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        onClick={handleClick}
      >
        Explore Now
      </motion.button>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent"></div>
    </motion.section>
  );
};

const AboutVillage = () => {
  return (
    <MotionSection>
      <section className="flex flex-col items-center px-20 pt-12 pb-12 bg-white fade-in max-md:px-5">
        <SectionTitle />
        <div className="self-stretch px-10 py-10 mt-9 mr-3 ml-3.5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15)] max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <VillageDescription />
            <VillageImage />
          </div>
        </div>
      </section>
    </MotionSection>
  );
};

const SectionTitle = () => {
  return (
    <>
      <h2 className="text-xl font-medium text-center text-sky-500">
        Tentang
      </h2>
      <h1 className="mt-3 text-4xl font-semibold text-center text-indigo-900 max-md:max-w-full max-md:text-2xl">
        Desa Aek Sipitudai
      </h1>
    </>
  );
};

const VillageDescription = () => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-2xl font-medium max-md:mt-10 max-md:max-w-full">
        <h3 className="text-xl font-semibold leading-10 text-indigo-900 max-md:max-w-full">
          Tentang Desa
        </h3>
        <p className="text-[15px] font-medium mt-3.5 leading-7 text-stone-500 max-md:max-w-full">
          Desa Limbong Aek Sipitudai mayoritas dihuni suku Batak dengan marga Limbong. Menurut cerita rakyat, marga ini berasal dari keturunan Si Raja Batak melalui Guru Tatea Bulan, yakni Limbong Mulana. Limbong Mulana pada saat itu dikisahkan memiliki seorang anak bernama Raja Limbong dan cucu bernama Palu Onggang dan Langgat Limbong. Berdasarkan keterangan Op. Bona Br. Sihotang dalam Silitonga (2017), generasi kedua Limbong Mulana, Langgat Limbong, haus. Dia membuat tujuh lubang tanah dengan tongkat, berharap air keluar. Berdoa, Langgat meminta air. Akhirnya, air muncul dari lubang-lubang itu, menciptakan Aek Sipitudai, mata air sakral dengan tujuh pancuran berbeda. Aek Sipitudai sendiri adalah sebuah mata air yang dipercaya memiliki nilai sakral oleh warga setempat (S. Limbong, komunikasi pribadi, 2023). Aek Sipitudai, mata air dengan 7 pancuran yang dipercaya memiliki beragam rasa yang berbeda tiap meminumnya, dihormati karena cerita rakyat. Keterkaitan dengan Si Raja Batak yang turun di Sianjur Mula Mula, meninggalkan jejak di Aek Sipitudai, memperkuat nilai sakral dan penghargaan warga setempat.
        </p>
        <div className="flex gap-2 justify-between self-start py-1.5 mt-3.5 text-sky-500 leading-[165%]">
          <button className="text-[15px] focus:outline-none focus:ring-2 focus:ring-sky-500">Read More</button>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/320dd97c13f18085325db633308cd32386dc6bcb519bec86bcff140e4ddb3387?apiKey=7fd2b033b9574f39882fe9ef4728cd45&&apiKey=7fd2b033b9574f39882fe9ef4728cd45" className="shrink-0 my-auto aspect-[1.19] w-[15px]" alt="" />
        </div>
      </div>
    </div>
  );
};

const VillageImage = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c4dfbaacb3d3a029a84400ff4c1b18940a839d134d7bad46b606012fe7c8ac2?apiKey=7fd2b033b9574f39882fe9ef4728cd45&&apiKey=7fd2b033b9574f39882fe9ef4728cd45" className="mt-1.5 w-full aspect-[1.14] max-md:mt-10 max-md:max-w-full" alt="Desa Aek Sipitudai landscape" />
    </div>
  );
};

function NewsSection() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://hvdt3sb5-5000.asse.devtunnels.ms/api/articles')
      .then(response => {
        const sortedData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        const formattedData = sortedData.slice(0, 3).map(article => {
          const date = new Date(article.date);
          const formattedDate = date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          });
          return { ...article, date: formattedDate };
        });
        setNewsData(formattedData);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <MotionSection>
      <section className="flex flex-col items-center px-16 pt-3 pb-20 bg-white max-md:px-5">
        <div className="flex flex-col w-full max-w-[1350px] max-md:max-w-full">
          <header className="flex flex-col self-center text-center max-md:max-w-full">
            <h2 className="self-center text-xl font-medium leading-1 text-sky-500">
              Berita & Kabar Terkini
            </h2>
            <h1 className="mt-3 text-2xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-2xl">
              Seputar Desa, Pelaksanaan KKN, dan Kegiatan Masyarakat
            </h1>
          </header>
          <div className="mt-7 max-md:mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {newsData.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
}

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
      <HeroSection />
      <AboutVillage />
      <NewsSection />
      <Copyright />
    </div>
  );
};

export default MainComponent;