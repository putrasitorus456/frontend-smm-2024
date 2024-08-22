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

const SidebarItem = ({ label, isActive, onClick }) => {
  const baseClasses = 'px-5 py-6 whitespace-nowrap bg-white border-b text-[#666666] border-blue-50 max-md:px-5 text-[15px] cursor-pointer hover:bg-sky-100';
  const activeClasses = 'flex gap-5 justify-between py-5 pl-5 font-[12px] text-white whitespace-nowrap bg-sky-500 border-b border-gray-300 max-md:pl-5';

  return (
    <motion.li
      className={isActive ? activeClasses : baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.li>
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

const ContentSection = ({ activeItem, handleSidebarToggle, isSidebarOpen }) => {
  const content = {
    Deskripsi: {
      text: 'Desa Aek Sipitudai merupakan sebuah desa yang terletak di Kecamatan Sianjur Mula-Mula, Kabupaten Samosir, Sumatra Utara. Nama “Aek Sipitudai” berasal dari bahasa Batak, di mana “Aek” berarti air dan “Sipitudai” berarti tujuh rasa. Nama tersebut menggambarkan warisan budaya yang dimiliki desa ini, yaitu sumber mata air tujuh rasa dan diyakini memiliki kekuatan menyembuhkan. Desa ini juga dikelilingi oleh pemandangan alam yang menakjubkan, termasuk perbukitan hijau dan Danau Toba. \n Selain itu, ladang-ladang milik masyarakat juga menjadi salah satu pemandangan alam yang mempesona. Desa Aek Sipitudai sendiri terbagi ke dalam tiga dusun, yaitu Dusun I (Saroha), Dusun II (Dosroha), dan Dusun III (Aek Baringin). Masing-masing dusun tersebut memiliki beragam komoditas yang menjadi sumber ekonomi masyarakatnya, seperti hasil pertanian, perkebunan, peternakan, dan juga perikanan.',
      img: '/images/Homepage.png'
    },
    Sejarah: {
      text: 'Desa Aek Sipitudai berada di Kabupaten Samosir yang dimekarkan dari Kabupaten Toba Samosir berdasarkan Undang-undang Nomor 36 Tahun 2003. Awalnya, desa ini berada di bawah pemerintahan Kecamatan Harian di Kabupaten Tapanuli Utara (dulu Kabupaten Toba Samosir juga berada di bawah pemerintahan Kabupaten Tapanuli Utara). \n Pada tahun 1997, setelah terbentuknya Kecamatan Sianjur Mulamula, Desa Aek Sipitudai yang merupakan gabungan dari Desa Sihole, Desa Sidaguruk, dan Desa Habeahan, bergabung dengan kecamatan baru tersebut. Kemudian pada tahun 2011, Desa Habeahan pun mekar menjadi Desa Habeahan Naburahan. Saat ini, Desa Aek Sipitudai terdiri dari tiga dusun, yaitu Dosroha, Saroha, dan Aek Baringin. Dengan pembentukan dan pemekaran wilayah ini, diharapkan pembangunan dan pelaksanaan pemerintahan desa lebih efektif karena wilayah administrasi yang lebih kecil.',
      img: '/images/Sejarah.jpg'
    },
    Penduduk: {
      text: 'Desa Aek Sipitudai adalah salah satu desa yang berada di Kecamatan Sianjur Mula-Mula. Desa ini memiliki jumlah penduduk sekitar 1210 jiwa yaitu sebanyak 608 laki-laki dan 602 perempuan. Desa Aek Sipitudai terdiri dari tiga dusun, yaitu dusun I, dusun II, dan dusun III. Adapun jumlah penduduk dusun I, II, dan III secara berurutan yaitu 451, 511, dan 248 jiwa. Penduduk Desa Aek Sipitudai juga terdiri dari kalangan usia yang beragam, yaitu mulai dari usia 0 tahun hingga 94 tahun. \n Walaupun desa Aek Sipitudai didominasi oleh penduduk yang bersuku Batak, terdapat keberagaman agama yang dianut oleh penduduk tersebut, yaitu sebanyak 565 jiwa menganut agama Kristen, 641 jiwa menganut agama Katolik, dan 4 jiwa menganut agama Islam. Selain itu, penduduk juga memiliki profesi yang beragam seperti petani, wiraswasta, PNS/TNI/POLRI, karyawan swasta, bidan, dan guru. Profesi yang paling banyak dilakukan penduduk adalah petani, yaitu sebanyak 396 jiwa.',
      img: '/images/Penduduk.jpg'
    },
    Wilayah: {
      text: 'Berdasarkan peta administratif dan kondisi geografis, Desa Aek Sipitudai memiliki batas-batas wilayah yang jelas. Di sebelah utara, desa ini berbatasan dengan Pusuk Buhit, sebuah kawasan pegunungan yang terkenal dengan keindahan alam dan legenda asal-usul Batak. Sebelah timur berbatasan dengan Desa Boho yang juga berada dalam Kecamatan Sianjur Mula-Mula. Di bagian selatan, Desa Aek Sipitudai berbatasan dengan Desa Habeahan Naburahan dan Kecamatan Harian, sedangkan di barat berbatasan dengan Desa Sarimarrhit, yang juga masih dalam kecamatan yang sama. \n Desa ini memiliki topografi yang bervariasi, dengan sebagian besar wilayahnya berupa perbukitan dan lembah yang subur, cocok untuk pertanian. Selain itu, sumber daya air yang melimpah dari mata air alami menjadikan desa ini memiliki potensi untuk pengembangan sektor pertanian dan pariwisata. Tradisi dan budaya Batak masih sangat kental di desa ini, tercermin dalam kehidupan sehari-hari warganya yang masih mempertahankan adat istiadat .',
      img: '/images/PetaBatas.jpg'
    },
    Lingkungan: {
      text: 'Desa Aek Sipitudai, terletak di Kecamatan Sianjur Mula-Mula, Kabupaten Samosir, Sumatra Utara, dikenal dengan keindahan alamnya yang menakjubkan. Desa ini dikelilingi oleh perbukitan hijau dan terletak dekat dengan Danau Toba, menyediakan pemandangan alam yang indah. Selain itu, desa ini memiliki topografi bervariasi dengan sebagian besar wilayah berupa perbukitan dan lembah yang subur, cocok untuk pertanian. Mata air alami yang melimpah, termasuk sumber mata air tujuh rasa yang legendaris, menambah keunikan lingkungan desa ini. \n Dusun-dusunnya, yaitu Saroha, Dosroha, dan Aek Baringin, masing-masing memiliki komoditas pertanian, perkebunan, peternakan, dan perikanan yang menjadi sumber ekonomi utama. Potensi alam yang luar biasa ini menjadikan Desa Aek Sipitudai cocok untuk pengembangan sektor pertanian dan pariwisata.',
      img: '/images/Lingkungan.JPG'
    },
    Komoditas: {
      text: 'Desa Aek Sipitudai merupakan salah satu desa yang memiliki beragam komoditas yang menjadi sumber perekonomian dan identitas desa ini. Komoditas tersebut meliputi komoditas pertanian, perkebunan, peternakan, dan perikanan. Komoditas pertanian di Desa Aek Sipitudai meliputi padi, bawang, jagung, dan cabai. Komoditas perkebunan meliputi kopi dan alpukat yang terdapat di daerah dataran tinggi.  Komoditas peternakan meliputi sapi dan kerbau yang biasanya dijadikan hewan peliharaan oleh masyarakat. Komoditas perikanan yang terdapat di desa ini yaitu lele. \n Keanekaragaman komoditas yang ada di Desa Aek Sipitudai menjadi bukti kekayaan alam yang dimiliki desa ini. Potensi yang luar biasa ini perlu dikembangkan agar terus menjadi kebanggaan dan identitas desa, serta membawa kemakmuran bagi seluruh warganya.',
      img: '/images/Komoditas.jpg'
    },
    Dusun: {
      text: 'Desa Aek Sipitudai terbagi menjadi tiga  dusun, yaitu Dusun I (Saroha), Dusun II (Dosroha), Dusun III (Aek Baringin). Nama tiap dusun memiliki arti yang berbeda-beda, Dusun Saroha berarti “seia”, Dusun Dosroha berarti “sepakat”, dan Dusun Aek Baringin berarti “air baringin”. \n Wilayah daerah yang termasuk ke dalam dusun Saroha yaitu Onan Limbong, Lumban Nabolak I, Pangkirapan, Sosor Galung, Limban Hasahatan, Lape, Sosor Silinjuang, dan Parombahan. Dusun Dosroha terdiri dari beberapa wilayah daerah yaitu Lumban Sihole, Lumban Raja, Lumban Sidaguruk, Lumban Godang, Simanampang, Simanjorang, Sosor (Lumban Nabolak II), Tano Lapang, Lumban Tonga-Tonga, dan Lumban Sitinjak. Wilayah daerah Dusun III (Aek Baringin) terdiri dari Batu Palakka, Aek Baringin, Pea, dan Sibarani.',
      img: '/images/Dusun.JPG'
    },
    Tradisi: {
      text: 'Desa Aek Sipitudai, yang kaya akan budaya dan tradisi Batak, dikenal dengan berbagai perayaan yang menggambarkan kekuatan dan kebersamaan masyarakatnya. Setiap pencapaian penting, seperti tersedianya air bersih atau panen yang melimpah, dirayakan dengan tradisi syukuran yang dihadiri oleh seluruh warga desa, termasuk tokoh-tokoh penting. Tradisi ini tidak hanya menjadi simbol rasa syukur, tetapi juga menjadi ajang untuk mempererat tali persaudaraan dan menjaga nilai-nilai kebersamaan.\n Perayaan-perayaan ini, yang terus dipertahankan meskipun zaman telah berubah, menunjukkan bagaimana masyarakat Desa Aek Sipitudai tetap menghormati warisan leluhur mereka, menghubungkan masa lalu dengan masa kini, dan merayakan berkah dengan cara yang penuh makna. Tradisi ini memastikan bahwa setiap nikmat yang diterima tidak hanya disyukuri secara pribadi, tetapi juga dirayakan bersama-sama dalam semangat gotong royong yang menjadi ciri khas desa ini.',
      img: '/images/Adat.jpg'
    }
  };

  
  const [currentContent, setCurrentContent] = useState(content[activeItem]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setCurrentContent(content[activeItem]);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeItem]);

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
        <div className="flex gap-10 w-full h-full max-md:flex-col max-md:gap-3">
          <div className="flex flex-col w-full h-full max-md:ml-0 max-md:w-full">
            <h3 className="text-xl font-semibold leading-8 text-indigo-900 max-md:max-w-full">
              {activeItem}
            </h3>
            <div className="mt-5 leading-7 font-sm text-stone-500 max-md:max-w-full text-sm">
              {isLoading ? (
                <div className="shimmer h-[500px] w-full bg-gray-300 rounded-md max-md:h-[100px]"></div>
              ) : (
                currentContent.text.split('\n').map((paragraph, index) => (
                  <p key={index} className="justified-text">
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col w-full h-full items-start max-md:ml-0 max-md:w-full">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <motion.img
                src={currentContent.img}
                className="w-full h-full object-cover shadow-[0_2px_10px_rgba(0,0,0,0.5)] max-md:mt-0 max-md:max-w-full"
                alt={activeItem}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const sidebarItems = [
  { label: 'Deskripsi', isActive: true },
  { label: 'Sejarah', isActive: false },
  { label: 'Penduduk', isActive: false },
  { label: 'Wilayah', isActive: false },
  { label: 'Lingkungan', isActive: false },
  { label: 'Komoditas', isActive: false },
  { label: 'Dusun', isActive: false },
  { label: 'Tradisi', isActive: false },
];

const ExploreState = () => {
  const [activeItem, setActiveItem] = useState('Deskripsi');
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
          Mengenal Lebih Dalam
        </h2>
        <h1 className="self-center mt-3 text-2xl font-semibold text-center text-indigo-900">
          Keadaan dan Informasi Desa Aek Sipitudai
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