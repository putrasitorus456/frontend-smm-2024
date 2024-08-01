import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const CopyrightSection = () => {
  return (
      <section
        id="copyright"
        className="flex flex-col items-center justify-center px-16 py-10 w-full bg-indigo-900 text-white max-md:px-5 max-md:max-w-full"
      >
        <p>&copy; 2024 Desa Aek Sipitudai. All rights reserved.</p>
        <div className="flex gap-4 mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-sky-500 transition duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-sky-500 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/sianjurmulamula" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-sky-500 transition duration-300" />
          </a>
          <a href="https://www.tiktok.com/@kknsianjurmulamula" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaTiktok className="text-white hover:text-sky-500 transition duration-300" />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">Designed and developed by KKN-PPM UGM Sianjur Mula Mula</p>
      </section>
  );
};

export default CopyrightSection;