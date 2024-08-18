import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header';
import LogoNav from '../components/logonav';
import Copyright from '../components/copyright';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

console.log("KKNPage component rendered");

const HeroSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set state ke true setelah animasi pertama kali berjalan
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  const images = [
    {
      id: 1,
      src: "/images/koordinasi1.png",
      title: "Koordinasi dengan Perangkat Desa",
      description: ""
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/84a9e638f28420238002c657ec01faf8ed58b563d51adde033172c63b16d1ece?apiKey=7fd2b033b9574f39882fe9ef4728cd45&&apiKey=7fd2b033b9574f39882fe9ef4728cd45",
      title: "Jalan-jalan Bersama Anak-anak",
      description: ""
    },
    {
      id: 3,
      src: "/images/amplas.png",
      title: "Revitalisasi Papan Penanda Wisata",
      description: ""
    },
    {
      id: 4,
      src: "/images/anak-anak.png",
      title: "Anak-anak Desa Aek Sipitudai",
      description: ""
    },
    {
      id: 5,
      src: "/images/banner.png",
      title: "Kegiatan Syukuran Air Bersih",
      description: ""
    },
    {
      id: 6,
      src: "/images/bawang.png",
      title: "Penanaman Bawang bersama Warga",
      description: ""
    },
    {
      id: 7,
      src: "/images/bersihintoga.png",
      title: "Revitalisasi Taman TOGA",
      description: ""
    },
    {
      id: 8,
      src: "/images/bisdig.png",
      title: "Sosialisasi UMKM menjadi Bisnis Digital",
      description: ""
    },
    {
      id: 9,
      src: "/images/ecoprint.png",
      title: "Pengenalan Ecoprint bagi Siswa SD",
      description: ""
    },
    {
      id: 10,
      src: "/images/gapura2.png",
      title: "Pemasangan Gapura 17-an",
      description: ""
    },
    {
      id: 11,
      src: "/images/gereja.png",
      title: "Petugas Ibadah Gereja Katolik",
      description: ""
    },
    {
      id: 12,
      src: "/images/gorong.png",
      title: "Gotong Royong Pembersihan Gorong-gorong",
      description: ""
    },
    {
      id: 13,
      src: "/images/gotongroyong.png",
      title: "Kegiatan Jumat Bersih",
      description: ""
    },
    {
      id: 14,
      src: "/images/gunung.png",
      title: "Pemandangan Gunung di Aek Sipitudai",
      description: ""
    },
    {
      id: 15,
      src: "/images/informasi2.png",
      title: "Revitalisasi Papan Penanda Wisata",
      description: ""
    },
    {
      id: 16,
      src: "/images/informasi.png",
      title: "Revitalisasi Papan Penanda Wisata",
      description: ""
    },
    {
      id: 17,
      src: "/images/kantor.png",
      title: "Kantor Kepala Desa Aek Sipitudai",
      description: ""
    },
    {
      id: 18,
      src: "/images/lapkursi.png",
      title: "Persiapan Kegiatan Syukuran Air Bersih",
      description: ""
    },
    {
      id: 19,
      src: "/images/lele.png",
      title: "Demonstrasi Pembuatan Nugget Ikan",
      description: ""
    },
    {
      id: 20,
      src: "/images/lele2.png",
      title: "Demonstrasi Pembuatan Nugget Ikan",
      description: ""
    },
    {
      id: 21,
      src: "/images/masanggapura.png",
      title: "Pemasangan Gapura 17-an",
      description: ""
    },
    {
      id: 22,
      src: "/images/melatih.png",
      title: "Peningkatan Kemampuan Petugas BUMDes",
      description: ""
    },
    {
      id: 23,
      src: "/images/miko.png",
      title: "Koordinasi dengan SDN 2 Aek Sipitudai",
      description: ""
    },
    {
      id: 24,
      src: "/images/mikolagi.png",
      title: "Koordinasi dengan SDN 2 Aek Sipitudai",
      description: ""
    },
    {
      id: 25,
      src: "/images/motongb2.png",
      title: "Persiapan Kegiatan Syukuran Air Bersih",
      description: ""
    },
    {
      id: 26,
      src: "/images/nasionalisme.png",
      title: "Program Mengajar SMA",
      description: ""
    },
    {
      id: 27,
      src: "/images/ngajar.png",
      title: "Kegiatan Libur Mengedukasi",
      description: ""
    },
    {
      id: 28,
      src: "/images/ngajar-1.png",
      title: "Program Mengajar SD",
      description: ""
    },
    {
      id: 29,
      src: "/images/no-bully.png",
      title: "Pengajaran Anti Bullying",
      description: ""
    },
    {
      id: 30,
      src: "/images/parta.png",
      title: "Sosialisasi Hukum Keluarga & Warisan",
      description: ""
    },
    {
      id: 31,
      src: "/images/novi.png",
      title: "Program Mengajar SD",
      description: ""
    },
    {
      id: 32,
      src: "/images/novipose.png",
      title: "Aksi Jumat Bersih",
      description: ""
    },
    {
      id: 33,
      src: "/images/pancuran.png",
      title: "Kunjungan ke Aek Sipitudai",
      description: ""
    },
    {
      id: 34,
      src: "/images/pasar.png",
      title: "Pasar Tradisional Limbong",
      description: ""
    },
    {
      id: 35,
      src: "/images/pasarrame.png",
      title: "Pasar Tradisional Limbong",
      description: ""
    },
    {
      id: 36,
      src: "/images/persiapan.png",
      title: "Gotong Royong Persiapan 17-an",
      description: ""
    },
    {
      id: 37,
      src: "/images/phbs.png",
      title: "Sosialisasi PHBS",
      description: ""
    },
    {
      id: 38,
      src: "/images/pipaair.png",
      title: "Membantu Pemasangan Pipa Air",
      description: ""
    },
    {
      id: 39,
      src: "/images/planginformasi.png",
      title: "Pemasangan Plang Virtual Tour",
      description: ""
    },
    {
      id: 40,
      src: "/images/puntung.png",
      title: "Demonstrasi Biopestisida",
      description: ""
    },
    {
      id: 41,
      src: "/images/puntung-1.png",
      title: "Demonstrasi Biopestisida",
      description: ""
    },
    {
      id: 42,
      src: "/images/puskesmas.png",
      title: "Puskesmas Limbong",
      description: ""
    },
    {
      id: 43,
      src: "/images/rambutjagung.png",
      title: "Sosialisasi Pemanfaatan Rambut Jagung",
      description: ""
    },
    {
      id: 44,
      src: "/images/sekolah1.png",
      title: "Siswa SDN 2 Aek Sipitudai",
      description: ""
    },
    {
      id: 45,
      src: "/images/sekolah2.png",
      title: "Siswa SDN 2 Aek Sipitudai",
      description: ""
    },
    {
      id: 46,
      src: "/images/senam1.png",
      title: "Aksi Jumat Sehat bersama Warga",
      description: ""
    },
    {
      id: 47,
      src: "/images/senam2.png",
      title: "Aksi Jumat Sehat bersama Warga",
      description: ""
    },
    {
      id: 48,
      src: "/images/sigiber.png",
      title: "SIGIBER (Sikat Gigi Bersama)",
      description: ""
    },
    {
      id: 49,
      src: "/images/sigiber-1.png",
      title: "SIGIBER (Sikat Gigi Bersama)",
      description: ""
    },
    {
      id: 50,
      src: "/images/sigiber-2.png",
      title: "SIGIBER (Sikat Gigi Bersama)",
      description: ""
    },
    {
      id: 51,
      src: "/images/sigiber-3.png",
      title: "SIGIBER (Sikat Gigi Bersama)",
      description: ""
    },
    {
      id: 52,
      src: "/images/syukuran.png",
      title: "Persiapan Kegiatan Syukuran Air Bersih",
      description: ""
    },
    {
      id: 53,
      src: "/images/taplakmeja.png",
      title: "Persiapan Kegiatan Syukuran Air Bersih",
      description: ""
    },
    {
      id: 54,
      src: "/images/tele-pangururan.png",
      title: "Gotong Royong Jalan Protokol",
      description: ""
    },
    {
      id: 55,
      src: "/images/toga.png",
      title: "Revitalisasi Taman TOGA",
      description: ""
    },
    {
      id: 56,
      src: "/images/umbul.png",
      title: "Pemasangan Umbul-umbul",
      description: ""
    },
    {
      id: 57,
      src: "/images/umbul-1.png",
      title: "Pemasaangan Umbul-umbul",
      description: ""
    },
    {
      id: 58,
      src: "/images/wisata.png",
      title: "Pemandangan Desa Aek Sipitudai",
      description: ""
    },
    {
      id: 59,
      src: "/images/upacara.png",
      title: "Upacara 17-an Kecamatan",
      description: ""
    },
    {
      id: 60,
      src: "/images/17andesa.png",
      title: "Kemeriahan 17an Desa Aek Sipitudai",
      description: ""
    },
  ];

  return (
    <motion.section
      id="home"
      className="flex flex-wrap justify-center gap-5 pt-3 pb-10 w-full min-h-screen max-md:max-w-full"
      initial={{ opacity: 0 }}
      animate={hasAnimated ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <header className="flex flex-col self-center text-center max-md:max-w-full">
        <h2 className="self-center text-xl font-medium leading-1 text-sky-500">
          Dokumentasi dan Kenangan
        </h2>
        <h1 className="mt-3 text-2xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-xl">
          Selama Pelaksanaan KKN di Desa Aek Sipitudai
        </h1>
      </header>
      <div className="flex flex-wrap justify-center gap-5 px-5 w-full">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative flex flex-col items-center justify-center w-[30%] h-[300px] max-md:w-full overflow-hidden rounded-[25px] shadow-lg hover:scale-105 transition-transform duration-500"
          >
            <img
              src={image.src}
              alt={image.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-75">
              <h3 className="text-lg font-semibold text-white">{image.title}</h3>
              <p className="text-sm text-white">{image.description}</p>
            </div>
            <div className="absolute top-4 right-4 text-white">
              <FontAwesomeIcon icon={faInfoCircle} size="lg" />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const AboutVillage = () => {
  return (
    <MotionSection>
      <section className="flex flex-col items-center mt-3 px-20 pb-12 bg-white fade-in max-md:px-5">
        <SectionTitle />
        <div className="relative flex flex-col grow mt-9 mb-7 px-6 py-5 w-full h-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)] max-md:px-5 max-md:mt-7 max-md:max-w-full text-sm">
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
        KKN-PPM UGM Sianjur Mula-Mula 2024
      </h2>
      <h1 className="mt-3 text-2xl font-semibold text-center text-indigo-900 max-md:max-w-full max-md:text-2xl max-md:mb-5">
        Mengabdi di Desa Aek Sipitudai
      </h1>
    </>
  );
};

const VillageDescription = () => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-2xl font-medium max-md:max-w-full">
        <h3 className="text-xl font-semibold leading-8 text-indigo-900 max-md:max-w-full">
          Tentang KKN
        </h3>
        <div className="justified-text text-sm font-medium mt-3.5 leading-7 text-stone-500 max-md:max-w-full">
          <p>
            Kuliah Kerja Nyata-Pembelajaran Pemberdayaan Masyarakat Universitas Gadjah Mada atau KKN-PPM UGM merupakan suatu kegiatan yang memadukan pelaksanaan Tri Dharma Perguruan Tinggi dengan metode pemberian pengalaman belajar dan bekerja kepada mahasiswa, dalam kegiatan pemberdayaan masyarakat. Kegiatan tersebut bertujuan untuk melaksanakan program-program yang mampu mendorong kemandirian dan kesejahteraan masyarakat suatu daerah secara berkelanjutan. KKN-PPM UGM sendiri mencakup seluruh daerah di Indonesia, salah satunya di Kecamatan Sianjur Mula Mula, Kabupaten Samosir, Sumatra Utara.
          </p>
          <p className="mt-3.5">
            Pada tahun 2024, Tim KKN-PPM UGM Sianjur Mula Mula, khususnya Sub Unit Desa Aek Sipitudai telah melaksanakan berbagai macam program kerja sebagai bentuk pemberdayaan masyarakat melalui perintisan wisata, pelestarian lingkungan, pengembangan BUMDes, pengembangan UMKM, serta hilirisasi pertanian. Selain itu, Sub Unit Desa Aek Sipitudai juga melakukan berbagai macam kegiatan untuk meningkatkan interaksi dengan masyarakat sekitar, seperti senam pagi bersama, membantu penanaman bawang, pelaksanaan gotong royong, dan masih banyak lagi.
          </p>
        </div>
      </div>
    </div>
  );
};

const VillageImage = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img loading="lazy" src="/images/KKN.png" alt="KKN-PPM UGM Sianjur Mula-Mula 2024" />
    </div>
  );
};

const MotionSection = ({ children, delay = 0.2, duration = 0.75 }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set state ke true setelah animasi pertama kali berjalan
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={hasAnimated ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : {}}
      transition={{ delay, duration, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

const KKNPage = () => {
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
      <AboutVillage />
      <MotionSection>
        <HeroSection />
      </MotionSection>
      <Copyright />
    </div>
  );
};

export default KKNPage;