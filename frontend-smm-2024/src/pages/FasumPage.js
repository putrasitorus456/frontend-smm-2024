import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/header';
import LogoNav from '../components/logonav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import Copyright from '../components/copyright';
import MapComponent from '../components/mapcomponent';

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

function FacilityCard({ imageSrc, title, description, size, onClick, onMapClick }) {
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
        <div className="text-sm mb-5">{description}</div>
        <button
          className="bg-sky-700 text-[13px] text-white py-1 px-3 rounded hover:bg-sky-900 flex items-center"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          View Location
        </button>
      </div>
      <div className="font-semibold px-4 py-4">{title}</div>
    </div>
  );
}

function FacilitySection({ facilities, handleViewLocation }) {
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
            onMapClick={() => window.open(facility.maps, '_blank')}
          />
        </div>
      ))}
    </div>
  );
}

function FacilitiesOverview() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const facilitiesData = [
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e1dfa619b737533203b22a1ead910a0e9ca14e5cd88cdb360a2d40fe2dc744f5?apiKey=7fd2b033b9574f39882fe9ef4728cd45',
      title: 'Gereja Katolik St. Maria Sidaguruk Sihole',
      description: 'Gereja Katolik yang terletak di Sidaguruk Sihole',
      size: 'large',
      coordinates: [2.6001726507156584, 98.64298252879806],
      maps: 'https://maps.app.goo.gl/BvogJQa6LyfENNUe9'
    },
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c8e94fbda3af8b73b74f9807b392aab0808009eed1fd651feef621d38887c37?apiKey=7fd2b033b9574f39882fe9ef4728cd45',
      title: 'Puskesmas Limbong',
      description: 'Puskesmas yang melayani masyarakat Limbong',
      size: 'small',
      coordinates: [2.5798809003662546, 98.64537947968121],
      maps: 'https://maps.app.goo.gl/8sjkBMw2xtK4jmYp6'
    },
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/74a7bcca4ef8fed8256adf5b9cb7bbc2ce16898ce50b5156782bce042acdafad?apiKey=7fd2b033b9574f39882fe9ef4728cd45',
      title: 'Gereja HKBP Aek Tintin Limbong',
      description: 'Gereja HKBP di Aek Tintin Limbong',
      size: 'large',
      coordinates: [2.5820649845074057, 98.64259776618809],
      maps: 'https://maps.app.goo.gl/FkciCExrzc2moYzp6'
    },
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8685e6d528e06804d253ee8b585be120b1235f8a9a7ce797d43102feec517064?apiKey=7fd2b033b9574f39882fe9ef4728cd45',
      title: 'Pasar Tradisional Limbong',
      description: 'Pasar tradisional yang ada di Limbong',
      size: 'small',
      coordinates: [2.5800844780941543, 98.64590340918899],
      maps: 'https://maps.app.goo.gl/c7SZVt1XJcdXD5h59'
    },
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1425198452249b0ed2bb4eb29d328432107e92e4e83a3eb7f8351879d16df5ac?apiKey=7fd2b033b9574f39882fe9ef4728cd45',
      title: 'SDN 2 Aek Sipitudai',
      description: 'Sekolah Dasar Negeri 2 di Aek Sipitudai',
      size: 'large',
      coordinates: [2.5797247140727517, 98.64579518035332],
      maps: 'https://maps.app.goo.gl/GCZtVZCLf2dvuG5s9'
    },
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce4c6e12733c6ae2b7bab438e201e5a622163f98f6861bbe3a448078b882a325?apiKey=7fd2b033b9574f39882fe9ef4728cd45',
      title: 'Kantor Kepala Desa Aek Sipitudai',
      description: 'Kantor Kepala Desa di Aek Sipitudai',
      size: 'small',
      coordinates: [2.5798486386987136, 98.64600055269503],
      maps: 'https://maps.app.goo.gl/FnWEqk1nZRAH4qVx7'
    },
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3388fd8f01e3f37f3262aace95831f24240fe7e3f657c8bec5a19facf034ee9d?apiKey=7fd2b033b9574f39882fe9ef4728cd45',
      title: 'SDN 14 Aek Sipitudai',
      description: 'Sekolah Dasar Negeri 14 di Aek Sipitudai',
      size: 'large',
      coordinates: [2.580786020592103, 98.64384089502376],
      maps: 'https://maps.app.goo.gl/inbPf2J3ADPLhyYg8'
    },
    {
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a06a9b1bc33fe38537fddc0feb3fe8c8e7821821fac51c1b537ff9845ec9290b?apiKey=7fd2b033b9574f39882fe9ef4728cd45',
      title: 'Taman TOGA (Tanaman Obat Keluarga)',
      description: 'Taman tanaman obat keluarga di Aek Sipitudai',
      size: 'small',
      coordinates: [2.5798486386987136, 98.64600055269503],
      maps: 'https://maps.app.goo.gl/YBWPL1ysQGs51mNd7'
    },
  ];

  const handleViewLocation = (location, coordinates) => {
    setSelectedLocation({ location, coordinates });
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
          <FacilitySection facilities={facilitiesData} handleViewLocation={handleViewLocation} />
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
            <h2 className="text-0.5xl font-regular mb-4">Location: {selectedLocation.location}</h2>
            <MapComponent location={selectedLocation.location} coordinates={selectedLocation.coordinates} />
            <button
              className="mt-4 bg-green-700 text-sm text-white py-1 px-3 rounded hover:bg-green-900 ml-2"
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
        <FacilitiesOverview />
      </MotionSection>
      <Copyright />
    </div>
  );
};

export default MainComponent;