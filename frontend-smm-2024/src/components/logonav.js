import React, { useState, useEffect, useMemo } from 'react';
import { FaHome, FaInfo, FaSitemap, FaMapMarkedAlt, FaNewspaper, FaMap, FaHandsHelping, FaBuilding } from 'react-icons/fa';

const LogoNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('Home');

  const navItems = useMemo(() => [
    { name: 'Home', icon: <FaHome />, path: '/home' },
    { name: 'Tentang Desa', icon: <FaInfo />, path: '/tentang-desa' },
    { name: 'Struktur Pemerintahan', icon: <FaSitemap />, path: '/struktur-pemerintahan' },
    { name: 'Wisata', icon: <FaMapMarkedAlt />, path: '/wisata' },
    { name: 'Fasilitas Umum', icon: <FaBuilding />, path: '/fasilitas-umum' },
    { name: 'Berita', icon: <FaNewspaper />, path: '/berita' },
    { name: 'Peta', icon: <FaMap />, path: '/peta' },
    { name: 'KKN', icon: <FaHandsHelping />, path: '/kkn' },
  ], []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeItem = navItems.find(item => currentPath.startsWith(item.path));
    if (activeItem) {
      setActiveNavItem(activeItem.name);
    }
  }, [navItems]);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  const handleSelectNavItem = (item) => {
    setActiveNavItem(item.name);
    setIsNavOpen(false);
  };

  const styles = {
    sideSlideBar: {
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100%',
      width: '250px',
      backgroundColor: 'white',
      boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.5)',
      transform: isNavOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 1000,
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    navItem: {
      textAlign: 'center',
      padding: '10px 10px',
      width: '100%',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    navItemHover: {
      color: '#008BF9',
    },
    closeBtn: {
      alignSelf: 'flex-end',
      padding: '10px',
      cursor: 'pointer',
    },
    header: {
      marginBottom: '20px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    footer: {
      marginTop: 'auto',
      paddingBottom: '20px',
      fontSize: '12px',
      color: 'grey',
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between self-center w-full max-w-[1100px] max-md:flex-wrap max-md:max-w-full transition-all duration-300">
      <div className="flex gap-2.5 justify-between">
        <div className="flex justify-center items-center">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98111513cd45d7e0286b6140cdb19313444abe998eec3ae057beb3cc9562cf1c?apiKey=7fd2b033b9574f39882fe9ef4728cd45&" 
            alt="Logo" 
            className="aspect-[0.81] w-[30px]" 
          />
          <div className="flex flex-col justify-center my-auto text-indigo-900">
            <div className="flex flex-col px-5">
              <div className="text-sm font-black">
                Pemerintah Kabupaten Samosir
              </div>
              <div className="mt-1.5 text-[15px] font-medium">
                Desa Aek Sipitudai
              </div>
            </div>
          </div>
        </div>
        <button
          className="sm:hidden text-indigo-900 focus:outline-none text-2xl" 
          onClick={handleNavToggle}
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
        >
          ☰
        </button>
      </div>
      <nav className="hidden md:flex md:flex-row gap-5 justify-between my-auto text-[13px] font-medium leading-5 text-right text-[#666666]">
        {navItems.map((item, index) => (
          <a
            key={index} 
            href={item.path} 
            className={`nav-item ${activeNavItem === item.name ? 'text-sky-500' : ''}`}
            onClick={() => handleSelectNavItem(item)}
          >
            {item.name}
          </a>
        ))}
      </nav>
      <div style={styles.sideSlideBar}>
        <button style={styles.closeBtn} onClick={handleCloseNav} aria-label="Close navigation">
          ✕
        </button>
        <div style={styles.header}>Menu Navigasi</div>
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.path} 
            className={`nav-item ${activeNavItem === item.name ? 'text-blue-500' : ''}`}
            onClick={() => handleSelectNavItem(item)}
            style={styles.navItem}
          >
            {item.icon}
            {item.name}
          </a>
        ))}
        <div style={styles.footer}>© 2024 Desa Aek Sipitudai</div>
      </div>
    </div>
  );
};

export default LogoNav;