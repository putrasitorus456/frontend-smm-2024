import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import CopyrightSection from '../components/copyright';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoNav from '../components/logonav';

console.log("NewsDetailPage component rendered");

function NewsDetailPage() {
  const { _id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://backend-smm-2024-production.up.railway.app/api/articles/${_id}`)
      .then(response => {
        const article = response.data;
        const date = new Date(article.date);
        const formattedDate = date.toLocaleDateString('id-ID', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        });
        setNews({ ...article, date: formattedDate });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [_id]);

  if (loading) return (
    <div className="spinner gap-3">
      <div className="gg"></div>
      <div className="gg"></div>
      <div className="gg"></div>
    </div>
  );
  if (error) return <div>Error fetching data: {error.message}</div>;

  const paragraphs = news.content.split('\n').map((paragraph, index) => (
    <p key={index} className="mb-4">{paragraph}</p>
  ));

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
        transition={{ delay: 0.2, duration: 0.75, ease: "easeInOut" }}
      >
        <div className="flex flex-col w-full max-w-[1350px] max-md:max-w-full">
          <header className="flex flex-col self-center text-center max-md:max-w-full">
            <h2 className="self-center text-xl font-medium leading-1 text-sky-500">
              {news.category}
            </h2>
            <p className="mt-3 text-2xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-2xl">
              {news.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {news.author} - {news.date}
            </p>
          </header>
          <div className="mt-7 flex flex-row gap-5 max-md:flex-col max-md:mt-5 max-md:max-w-full">
            <div className="mt-2 w-1/2 max-md:w-full">
              <img 
                src={news.image} 
                alt={news.imageAlt} 
                className="shadow-[0_2px_10px_rgba(0,0,0,1)] w-full h-auto mb-6 object-cover" 
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            <div className="w-1/2 max-md:w-full">
              <div className="body text-sm leading-6 text-gray-700 w-full max-md:w-full multi-column" style={{ textAlign: 'justify', columnGap: '20px' }}>
                {paragraphs}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <CopyrightSection />
    </div>
  );
}

export default NewsDetailPage;