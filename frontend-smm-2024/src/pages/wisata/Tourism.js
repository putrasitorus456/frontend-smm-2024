import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { faMapMarkerAlt, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header';
import LogoNav from '../../components/logonav';
import Copyright from '../../components/copyright';
import MapComponent from '../../components/mapcomponent';
import ReactPlayer from 'react-player';

const MotionSection = ({ children, delay = 0.2, duration = 0.75 }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set hasAnimated to true to trigger the animation
    setHasAnimated(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

function FacilityCard({ id, imageSrc, title, description, size, onLocationClick, onDetailClick }) {
  const sizeClass = 'h-[500px] max-md:h-auto';  // Atur ukuran tetap sesuai ukuran 2x3 sebelumnya

  return (
    <div className={`facility-card flex flex-col items-center font-medium text-center text-indigo-900 w-full ${sizeClass}`}>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="w-full h-auto shadow-[0_2px_10px_rgba(0,0,0,0.5)] block m-0 p-0 object-cover"
      />
      <div className="overlay px-4 py-4">
        <div className="font-semibold text-[40px] mb-2">{title}</div>
        <div className="text-sm mb-5">{description}</div>
        <div className="flex flex-col space-y-2">
          <button
            className="bg-sky-700 text-[13px] text-white py-1 px-3 rounded hover:bg-sky-900 flex items-center justify-center"
            onClick={onLocationClick}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            View Location
          </button>
          <button
            className="bg-green-700 text-[13px] text-white py-1 px-3 rounded hover:bg-green-900 flex items-center justify-center"
            onClick={() => onDetailClick(id)}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            View Detail
          </button>
        </div>
      </div>
      <div className="font-semibold px-4 py-4">{title}</div>
    </div>
  );
}

function FacilitySection({ facilities, handleViewLocation, handleViewDetail }) {
  return (
    <div className="flex justify-center">
      {facilities.map((facility, index) => (
        <div key={index} className="w-full">
          <FacilityCard
            id={facility.id}
            imageSrc={facility.imageSrc}
            title={facility.title}
            description={facility.description}
            size={facility.size}
            onLocationClick={() => handleViewLocation(facility.title, facility.coordinates)}
            onDetailClick={handleViewDetail}
          />
        </div>
      ))}
    </div>
  );
}

function FacilitiesOverview() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const navigate = useNavigate();

  const handleViewDetail = (id) => {
    navigate(`/wisata/detail/${id}`);
  };

  const facilitiesData = [
    {
      id: 1,
      imageSrc: '/images/Sipitudai3.JPG',
      title: 'Wisata Aek Sipitu Dai',
      description: 'Perpaduan harmonis antara keindahan alam dan warisan tradisi lokal',
      size: 'large',
      coordinates: [2.578880148997591, 98.64760079502376],
      maps: 'https://maps.app.goo.gl/Q1qUfgpTbWXQ2opN9'
    },
  ];

  const handleViewLocation = (location, coordinates) => {
    setSelectedLocation({ location, coordinates });
  };

  const handleClosePopup = () => {
    setSelectedLocation(null);
  };

  return (
    <section className="flex flex-col items-center px-8 pt-3 pb-12 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1270px]">
        <h2 className="self-center text-xl font-medium text-center text-sky-500">
          Kunjungi dan Eksplorasi
        </h2>
        <h1 className="self-center mt-3 text-2xl font-semibold text-center text-indigo-900">
          Perpaduan Harmonis Warisan dan Keindahan Alam di Desa Aek Sipitudai
        </h1>
        <div className="px-px mt-7">
          <FacilitySection
            facilities={facilitiesData}
            handleViewLocation={handleViewLocation}
            handleViewDetail={handleViewDetail}
          />
        </div>
      </div>
      {selectedLocation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-5 rounded shadow-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <button
              className="absolute top-5 right-5 text-gray-700 hover:text-gray-900"
              onClick={handleClosePopup}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h2 className="text-0.5xl font-regular mb-4">{selectedLocation.location}</h2>
            <MapComponent location={selectedLocation.location} coordinates={selectedLocation.coordinates} />
            <button
              className="mt-4 bg-green-700 text-sm text-white py-1 px-3 rounded hover:bg-green-900"
              onClick={() => window.open(facilitiesData.find(facility => facility.title === selectedLocation.location).maps, '_blank')}
            >
              Lihat di Maps
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const PromotionalVideoSection = () => {

  return (
    <section className="flex flex-col items-center px-8 pb-20">
      <div className="flex flex-col w-full max-w-[1270px]">
        <h2 className="self-center text-xl font-medium text-center text-sky-500">
          Nikmati Video Interaktif
        </h2>
        <h1 className="self-center mt-3 text-2xl font-semibold text-center text-indigo-900">
          Wisata Aek Sipitudai dan Geopark Kaldera Toba
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7">
          <div className="video-wrapper video-wrapper-yt">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=TT9LSEPzO7M"
              className="w-full h-64 md:h-80"
              controls
              width="100%"
              height="100%"
            />
          </div>
          <div className="video-wrapper video-wrapper-tiktok">
            <iframe
              src="https://www.tiktok.com/embed/7391480798106389766"
              className="w-full h-64 md:h-80"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="TikTok video player"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

function MainComponent() {
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
        <FacilitiesOverview />
      </MotionSection>
      <MotionSection>
        <PromotionalVideoSection />
      </MotionSection>
      <Copyright />
    </div>
  );
}

export default MainComponent;