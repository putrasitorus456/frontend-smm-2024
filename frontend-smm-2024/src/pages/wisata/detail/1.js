import React, { useState, useEffect } from 'react';
import Header from '../../../components/header';
import CopyrightSection from '../../../components/copyright';
import { motion } from 'framer-motion';
import LogoNav from '../../../components/logonav';

const sections = [
  {
    id: 1,
    title: 'Mengenal Lebih Dalam',
    subtitle: 'Objek Wisata Adat Aek Sipitu Dai',
    section: 'Apa itu Aek Sipitu Dai?',
    description: [
      'Aek Sipitu Dai merupakan sumber mata air yang terletak di Desa Aek Sipitu Dai, Kecamatan Sianjur Mula-Mula, Kabupaten Samosir. Dalam Bahasa Indonesia Aek Sipitu Dai memiliki arti air tujuh rasa, dimana terdapat tujuh buah pancuran yang memancurkan air dengan karakteristik rasa yang berbeda-beda.',
      'Masyarakat sekitar meyakini bahwa mata air ini memiliki keterkaitan dengan sejarah leluhur bangsa batak, sehingga Aek Sipitu Dai disakralkan oleh masyarakat sekitar.'
    ],
    imagePath: '/images/apaitu.png',
  },
  {
    id: 2,
    title: 'Mengenal Lebih Dalam',
    subtitle: 'Objek Wisata Adat Aek Sipitu Dai',
    section: 'Area Pemandian',
    description: [`Aek Sipitu Dai terdiri dari 3 area yang pertama area pemandian untuk perempuan dimana terdapat 4 pancuran, area pemandian laki-laki dengan 3 pancuran, serta area spiritual yang digunakan untuk melakukan partonggoan (berdoa atau melakukan kegiatan spiritual) kepada leluhur.`,
      'Seluruh pengunjung dipersilahkan untuk masuk ke area pemandian perempuan dan pemandian laki-laki, tetapi area spiritual hanya diperuntukan bagi pengunjung yang ingin berdoa dengan didampingi oleh petugas.'],
    imagePath: '/images/pemandian.png',
  },
  {
    id: 3,
    title: 'Mengenal Lebih Dalam',
    subtitle: 'Objek Wisata Adat Aek Sipitu Dai',
    section: 'Sejarah Aek Sipitu Dai',
    description: [`Sejarah Aek Sipitu Dai bermula ketika Ompu Limbong Mulana dikisahkan memiliki seorang anak bernama Raja Limbong dan cucu yang salah satunya bernama Langgat Limbong. Dikisahkan bahwa suatu ketika Ompu Langgat Limbong yang sedang berada di kaki pusuk buhit merasa haus. Karena kehausan ia membuat tujuh lubang tanah dengan tongkatnya, dengan harapan bahwa lubang tersebut akan mengeluarkan air.`,
      'Ompu Langgat meminta dan berdoa kepada Debata Mulajadi Nabolon agar diberikan air dari lubang-lubang tersebut. Setelah ia berdoa muncullah air dari lubang-lubang tersebut, hingga menciptakan Aek Sipitu Dai, mata air sakral dengan tujuh rasa air yang berbeda.'
    ],
    imagePath: '/images/sejarah.png',
  },
  {
    id: 4,
    title: 'Mengenal Lebih Dalam',
    subtitle: 'Objek Wisata Adat Aek Sipitu Dai',
    section: 'Pemandian Perempuan',
    description: [
      'Area pertama dari Aek Sipitu Dai adalah area pemandian perempuan. Di area ini terdapat 4 buah pancuran:'
    ],
    fountainNames: [
      'Aek Sibaso Bolon (Air kebidanan): Pancur pemandian untuk perempuan yang sudah tidak melahirkan.',
      'Aek Namardenggan Daging : Pancur pemandian untuk ibu hamil atau perempuan yang masih bisa melahirkan.',
      'Aek Namarbaju : Pancur pemandian untuk anak gadis.',
      'Aek Poso-poso : Pancur pemandian untuk bayi.'
    ],
    procedures: [
      'Cuci tangan hingga bersih.',
      'Basuh muka sebanyak tiga kali.',
      'Kumur dan buang air sebanyak tiga kali.'
    ],
    imagePath: '/images/cewe.png',
  },
  {
    id: 5,
    title: 'Mengenal Lebih Dalam',
    subtitle: 'Objek Wisata Adat Aek Sipitu Dai',
    section: 'Pemandian Laki-Laki',
    description: [
      'Area selanjutnya dari Aek Sipitu Dai adalah area pemandian laki-laki.',
      'Di area ini terdapat tiga buah pancuran:'
    ],
    fountainNames: [
      'Aek Pangulu Raja: Pancur pemandian untuk raja-raja.',
      'Aek Raja Doli: Pancur pemandian untuk laki-laki.',
      'Aek Hela: Pancur pemandian untuk laki-laki yang berstatus sebagai menantu.'
    ],
    procedures: [
      'Cuci tangan hingga bersih.',
      'Basuh muka sebanyak tiga kali.',
      'Kumur dan buang air sebanyak tiga kali.'
    ],
    imagePath: '/images/cowo.png',
  },
];

const sectionsEnglish = [
  {
    id: 1,
    title: 'Discovering More',
    subtitle: 'Aek Sipitu Dai Cultural Tourism',
    section: 'What is Aek Sipitu Dai?',
    description: [
      'Aek Sipitu Dai is a water source located in Aek Sipitu Dai Village, Sianjur Mula-Mula District, Samosir Regency. In Indonesian, Aek Sipitu Dai means water with seven tastes, where there are seven fountains that produce water with different taste characteristics.',
      'The local community believes that this spring is related to the history of the Batak ancestors, making Aek Sipitu Dai sacred to the surrounding community.'
    ],
    imagePath: '/images/apaitu.png',
  },
  {
    id: 2,
    title: 'Discovering More',
    subtitle: 'Aek Sipitu Dai Cultural Tourism',
    section: 'Bathing Area',
    description: [
      'Aek Sipitu Dai consists of three areas: the women\'s bathing area with four fountains, the men\'s bathing area with three fountains, and the spiritual area used for partonggoan (prayer or spiritual activities) to the ancestors.',
      'All visitors are allowed to enter the women\'s and men\'s bathing areas, but the spiritual area is only for visitors who wish to pray, accompanied by staff.'
    ],
    imagePath: '/images/pemandian.png',
  },
  {
    id: 3,
    title: 'Discovering More',
    subtitle: 'Aek Sipitu Dai Cultural Tourism',
    section: 'History of Aek Sipitu Dai',
    description: [
      'The history of Aek Sipitu Dai begins when Ompu Limbong Mulana is said to have a son named Raja Limbong and a grandson, one of whom is named Langgat Limbong. It is told that one day Ompu Langgat Limbong, who was at the foot of Pusuk Buhit, felt thirsty. Because of his thirst, he made seven holes in the ground with his stick, hoping that the holes would produce water.',
      'Ompu Langgat prayed to Debata Mulajadi Nabolon to be given water from the holes. After he prayed, water emerged from the holes, creating Aek Sipitu Dai, a sacred spring with seven different tastes of water.'
    ],
    imagePath: '/images/sejarah.png',
  },
  {
    id: 4,
    title: 'Discovering More',
    subtitle: 'Aek Sipitu Dai Cultural Tourism',
    section: 'Women\'s Bathing Area',
    description: [
      'The first area of Aek Sipitu Dai is the women\'s bathing area. In this area, there are four fountains:'
    ],
    fountainNames: [
      'Aek Sibaso Bolon (Midwifery Water): Fountain for women who are no longer giving birth.',
      'Aek Namardenggan Daging: Fountain for pregnant women or women who can still give birth.',
      'Aek Namarbaju: Fountain for young girls.',
      'Aek Poso-poso: Fountain for babies.'
    ],
    procedures: [
      'Wash your hands thoroughly.',
      'Splash your face three times.',
      'Rinse your mouth and spit out water three times.'
    ],
    imagePath: '/images/cewe.png',
  },
  {
    id: 5,
    title: 'Discovering More',
    subtitle: 'Aek Sipitu Dai Cultural Tourism',
    section: 'Men\'s Bathing Area',
    description: [
      'The next area of Aek Sipitu Dai is the men\'s bathing area.',
      'In this area, there are three fountains:'
    ],
    fountainNames: [
      'Aek Pangulu Raja: Fountain for kings.',
      'Aek Raja Doli: Fountain for men.',
      'Aek Hela: Fountain for men who are sons-in-law.'
    ],
    procedures: [
      'Wash your hands thoroughly.',
      'Splash your face three times.',
      'Rinse your mouth and spit out water three times.'
    ],
    imagePath: '/images/cowo.png',
  },
];

function TogaDetailPage() {
  const [language, setLanguage] = useState('id');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Delay 500ms atau sesuai kebutuhan

    return () => clearTimeout(timer); // Bersihkan timeout saat komponen unmount
  }, [currentSectionIndex, language]);

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handleBefore = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  // Pilih sections berdasarkan bahasa
  const currentSections = language === 'id' ? sections : sectionsEnglish;
  const currentSection = currentSections[currentSectionIndex];

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
      <motion.section
        className="flex flex-col items-center px-16 pt-3 pb-20 bg-white max-md:px-5"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.75, ease: 'easeInOut' }}
      >
      <div className="self-end mb-5 mt-3 px-5 max-md:px-0">
      <button
        onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
        className={`py-2 px-4 flex items-center rounded-lg text-sm font-semibold 
                    transition-all duration-300 ease-in-out 
                    ${language === 'id' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        {language === 'id' ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12v.01M9.05 14.61A7.978 7.978 0 0112 14c1.16 0 2.26.24 3.24.66M16.95 9.39A7.978 7.978 0 0115 12c0 1.16.24 2.26.66 3.24M7.05 9.39A7.978 7.978 0 009 12c0-1.16.24-2.26.66-3.24M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
              />
            </svg>
            Switch to English
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12v.01M9.05 14.61A7.978 7.978 0 0112 14c1.16 0 2.26.24 3.24.66M16.95 9.39A7.978 7.978 0 0115 12c0 1.16.24 2.26.66 3.24M7.05 9.39A7.978 7.978 0 009 12c0-1.16.24-2.26.66-3.24M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
              />
            </svg>
            Ganti ke Bahasa Indonesia
          </>
        )}
      </button>
    </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-500">Loading...</p>
          </div>
        ) : (
        <div className="mb-10 max-md:mb-0 flex flex-col w-full max-w-[1350px] max-md:max-w-full">
          <header className="flex flex-col self-center text-center max-md:max-w-full">
            <h2 className="self-center text-xl font-medium leading-1 text-sky-500">
              {currentSection.title}
            </h2>
            <p className="mt-3 text-3xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-2xl">
              {currentSection.subtitle}
            </p>
          </header>
          <div className="mt-7 flex flex-row gap-5 max-md:flex-col max-md:mt-5 max-md:max-w-full">
            <div className="mt-1 w-1/2 max-md:w-full">
              <img
                src={currentSection.imagePath}
                alt={currentSection.section}
                className="shadow-[0_2px_10px_rgba(0,0,0,0.2)] w-full h-full mb-6 object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            <div className="w-1/2 max-md:w-full">
              <div className="body text-sm leading-6 text-gray-700 w-full max-md:w-full multi-row" style={{ textAlign: 'justify', columnGap: '20px' }}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  {currentSection.description.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
                {currentSection.fountainNames && (
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-2">Pancuran:</h3>
                    <ul className="list-disc pl-3 space-y-2">
                      {currentSection.fountainNames.map((name, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <svg className="w-4 h-4 text-indigo-900 flex-shrink-0" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                          </svg>
                          <span className='pl-3'>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {currentSection.procedures && (
                  <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
                    <p className="font-semibold mb-2">Untuk dapat merasakan air dari setiap pancuran dipersilahkan untuk melakukan tata cara berikut di tiap-tiap pancuran:</p>
                    <ul className="list-decimal pl-5 space-y-2">
                      {currentSection.procedures.map((procedure, index) => (
                        <li key={index}>{procedure}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        )}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[1350px] mt-6">
          <button
            onClick={handleBefore}
            disabled={currentSectionIndex === 0}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-colors duration-300 ease-in-out 
              ${currentSectionIndex === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-sky-500 text-white hover:bg-sky-600'}
              flex items-center space-x-2`}
          >
            <svg
              className={`w-5 h-5 transform ${currentSectionIndex === 0 ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>{currentSectionIndex > 0 ? currentSections[currentSectionIndex - 1].section : ''}</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentSectionIndex === currentSections.length - 1}
            className={`mt-4 md:mt-0 px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-colors duration-300 ease-in-out 
              ${currentSectionIndex === currentSections.length - 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-sky-500 text-white hover:bg-sky-600'}
              flex items-center space-x-2`}
          >
            <span>{currentSectionIndex < currentSections.length - 1 ? currentSections[currentSectionIndex + 1].section : ''}</span>
            <svg
              className={`w-5 h-5 transform ${currentSectionIndex === currentSections.length - 1 ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </motion.section>
      <CopyrightSection />
    </div>
  );
}

export default TogaDetailPage;