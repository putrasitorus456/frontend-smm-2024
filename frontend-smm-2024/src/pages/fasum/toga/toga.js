import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header';
import LogoNav from '../../../components/logonav';
import CopyrightSection from '../../../components/copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

console.log("KKNPage component rendered");

const ImmediateMotionSection = ({ children, delay = 0.2, duration = 0.75 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ delay, duration, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch('https://backend-smm-2024-production.up.railway.app/api/toga/')
      .then(response => response.json())
      .then(data => {
        // Map data to desired structure
        const mappedData = data.map(item => ({
          id: item._id,
          src: item.imagePath,
          title: item.title,
        }));
        setImages(mappedData);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching images:', error));
      setLoading(false);
  }, []);

  if (loading) return (
    <div className="spinner gap-3">
      <div className="gg"></div>
      <div className="gg"></div>
      <div className="gg"></div>
    </div>
  );
  if (error) return <div>Error fetching data: {error.message}</div>;

  const handleImageClick = (id) => {
    // Navigate to detail page based on plant id
    navigate(`/fasilitas-umum/toga/tanaman/${id}`);
  };

  return (
    <ImmediateMotionSection>
      <header className="flex flex-col self-center text-center max-md:max-w-full">
        <h2 className="mt-3 self-center text-xl font-medium leading-1 text-sky-500">
          Jenis-jenis Tanaman
        </h2>
        <h1 className="mt-2 mb-5 text-2xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-xl">
          Yang Dapat Dimanfaatkan di Taman TOGA (Tanaman Obat Keluarga)
        </h1>
      </header>
      <div className="flex flex-wrap justify-center gap-5 px-5 w-full h-auto pt-3 pb-10 max-md:max-w-full">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative flex flex-col items-center justify-center w-[30%] h-[300px] max-md:w-full overflow-hidden rounded-[25px] shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
            onClick={() => handleImageClick(image.id)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-75">
              <h3 className="text-lg font-semibold text-white">{image.title}</h3>
            </div>
            <div className="absolute top-4 right-4 text-white">
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            </div>
          </div>
        ))}
      </div>
      <header className="mb-10 flex flex-col self-center text-center max-md:max-w-full">
        <h2 className="px-7 self-center text-[15px] font-medium leading-1 text-[#666666] max-md:text-[13px]">
          Diharapkan tanaman TOGA memberikan manfaat penanganan kesehatan yang baik bagi masyarakat.
        </h2>
      </header>
    </ImmediateMotionSection>
  );
};

const TogaPage = () => {
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
      <ImmediateMotionSection>
        <ImageGallery />
      </ImmediateMotionSection>
      <CopyrightSection />
    </div>
  );
};

export default TogaPage;