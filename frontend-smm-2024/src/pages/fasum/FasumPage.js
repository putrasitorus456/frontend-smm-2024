import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/header';
import LogoNav from '../../components/logonav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Copyright from '../../components/copyright';
import MapComponent from '../../components/mapcomponent';
import { useNavigate } from 'react-router-dom';

const MotionSection = ({ children, delay = 0.2, duration = 0.75 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      transition={{ delay, duration, ease: 'easeInOut' }}
    >
      {children}
    </motion.section>
  );
};

function FacilityCard({ imageSrc, title, description, size, onClick, onViewDetailClick }) {
  const sizeClass = size === 'large' ? 'row-span-2' : '';
  const heightClass = size === 'large' ? 'h-48 md:h-full' : 'h-24 md:h-full';

  return (
    <div className={`facility-card flex flex-col items-center font-medium text-center text-indigo-900 ${sizeClass}`}>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className={`w-full h-auto shadow-[0_2px_10px_rgba(0,0,0,0.5)] block m-0 p-0 object-contain ${heightClass}`}
      />
      <div className="overlay px-4 py-4">
        <div className="font-semibold mb-2">{title}</div>
        <div className="text-[12px] mb-5">{description}</div>
        <div className="flex flex-col space-y-2">
        <button
          className="bg-sky-700 text-[13px] text-white py-1 px-3 rounded hover:bg-sky-900 flex items-center mb-2"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          View Location
        </button>
        {title === 'Taman TOGA (Tanaman Obat Keluarga)' && ( // Only show for TOGA
          <button
            className="bg-green-700 text-[13px] text-white py-1 px-3 rounded hover:bg-green-900 flex items-center justify-center"
            onClick={onViewDetailClick}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            View Detail
          </button>
        )}
        </div>
      </div>
      <div className="font-semibold px-4 py-4">{title}</div>
    </div>
  );
}

function FacilitySection({ facilities, handleViewLocation, handleViewDetail }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {facilities.map((facility, index) => (
        <div
          key={index}
          className={`flex flex-col ${facility.size === 'small' ? 'row-span-1' : 'row-span-2'} ${
            facility.size === 'small' ? 'col-span-1 md:col-span-1' : 'col-span-1'
          }`}
        >
          <FacilityCard
            imageSrc={facility.imageSrc}
            title={facility.title}
            description={facility.description}
            size={facility.size}
            onClick={() => handleViewLocation(facility.title, facility.coordinates)}
            onViewDetailClick={() => handleViewDetail(facility.title)} // Correctly pass the function
          />
        </div>
      ))}
    </div>
  );
}

function FacilitiesOverview() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

  const facilitiesData = [
    {
      imageSrc: '/images/Katolik.png',
      title: 'Gereja Katolik St. Maria Sidaguruk Sihole',
      description: 'Tempat beribadah bagi umat Katolik',
      size: 'large',
      coordinates: [2.6001726507156584, 98.64298252879806],
      maps: 'https://maps.app.goo.gl/BvogJQa6LyfENNUe9'
    },
    {
      imageSrc: '/images/Puskesmas.png',
      title: 'Puskesmas Limbong',
      description: 'Layanan kesehatan masyarakat',
      size: 'small',
      coordinates: [2.5798809003662546, 98.64537947968121],
      maps: 'https://maps.app.goo.gl/8sjkBMw2xtK4jmYp6'
    },
    {
      imageSrc: '/images/HKBPflip.png',
      title: 'Gereja HKBP Aek Tintin Limbong',
      description: 'Tempat beribadah bagi umat HKBP',
      size: 'large',
      coordinates: [2.5820649845074057, 98.64259776618809],
      maps: 'https://maps.app.goo.gl/FkciCExrzc2moYzp6'
    },
    {
      imageSrc: '/images/Pasar.png',
      title: 'Pasar Tradisional Limbong',
      description: 'Pusat kegiatan jual beli bagi masyarakat',
      size: 'small',
      coordinates: [2.5800844780941543, 98.64590340918899],
      maps: 'https://maps.app.goo.gl/c7SZVt1XJcdXD5h59'
    },
    {
      imageSrc: '/images/SD2.png',
      title: 'SDN 2 Aek Sipitudai',
      description: 'Fasilitas pendidikan dasar',
      size: 'large',
      coordinates: [2.5797247140727517, 98.64579518035332],
      maps: 'https://maps.app.goo.gl/GCZtVZCLf2dvuG5s9'
    },
    {
      imageSrc: '/images/Kantor.png',
      title: 'Kantor Kepala Desa Aek Sipitudai',
      description: 'Pusat urusan administrasi & pemerintahan desa',
      size: 'small',
      coordinates: [2.5798486386987136, 98.64600055269503],
      maps: 'https://maps.app.goo.gl/FnWEqk1nZRAH4qVx7'
    },
    {
      imageSrc: '/images/SD14.png',
      title: 'SDN 14 Aek Sipitudai',
      description: 'Fasilitas pendidikan dasar',
      size: 'large',
      coordinates: [2.580786020592103, 98.64384089502376],
      maps: 'https://maps.app.goo.gl/inbPf2J3ADPLhyYg8'
    },
    {
      imageSrc: '/images/TOGA.png',
      title: 'Taman TOGA (Tanaman Obat Keluarga)',
      description: 'Tanaman untuk pertolongan pertama kesehatan keluarga',
      size: 'small',
      coordinates: [2.5798486386987136, 98.64600055269503],
      maps: 'https://maps.app.goo.gl/YBWPL1ysQGs51mNd7'
    },
  ];

  const handleViewLocation = (location, coordinates) => {
    setSelectedLocation({ location, coordinates });
  };

  const handleViewDetail = (title) => {
    navigate('/fasilitas-umum/toga');
  };

  const handleClosePopup = () => {
    setSelectedLocation(null);
  };

  return (
    <section className="flex flex-col items-center px-8 pt-3 pb-20 bg-white max-md:px-5">
      <div className="flex flex-col w-full max-w-[1270px]">
        <h2 className="self-center text-xl font-medium text-center text-sky-500">
          Fasilitas Umum
        </h2>
        <h1 className="self-center mt-3 text-2xl font-semibold text-center text-indigo-900">
          Penunjang Aktivitas Masyarakat Desa Aek Sipitudai
        </h1>
        <div className="px-px mt-7">
          <FacilitySection
            facilities={facilitiesData}
            handleViewLocation={handleViewLocation}
            handleViewDetail={handleViewDetail} // Add this line
          />
        </div>
      </div>
      {selectedLocation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-md p-6 max-w-md w-full shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{selectedLocation.location}</h2>
              <button
                onClick={handleClosePopup}
                className="text-xl text-gray-600 hover:text-gray-900"
              >
                ✖
              </button>
            </div>
            <MapComponent coordinates={selectedLocation.coordinates} />
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

const FasumPage = () => {
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
      <Copyright />
    </div>
  );
};

export default FasumPage;