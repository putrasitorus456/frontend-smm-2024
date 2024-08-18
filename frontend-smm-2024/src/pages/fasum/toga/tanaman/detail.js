import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../../components/header';
import CopyrightSection from '../../../../components/copyright';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoNav from '../../../../components/logonav';

function TogaDetailPage() {
  const { _id } = useParams();
  const [toga, setToga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://backend-smm-2024-production.up.railway.app/api/toga/${_id}`)
      .then((response) => {
        const togaData = response.data;
        const date = new Date(togaData.date);
        const formattedDate = date.toLocaleDateString('id-ID', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        });
        setToga({ ...togaData, date: formattedDate });
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [_id]);

  if (loading)
    return (
      <div className="spinner gap-3">
        <div className="gg"></div>
        <div className="gg"></div>
        <div className="gg"></div>
      </div>
    );
  if (error) return <div>Error fetching data: {error.message}</div>;

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
        <div className="flex flex-col w-full max-w-[1350px] max-md:max-w-full">
          <header className="flex flex-col self-center text-center max-md:max-w-full">
            <h2 className="self-center text-xl font-medium leading-1 text-sky-500">
              Tanaman Obat Keluarga
            </h2>
            <p className="mt-3 text-3xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-2xl">
              {toga.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {toga.author} - {toga.date}
            </p>
          </header>
          <div className="mt-7 flex flex-row gap-5 max-md:flex-col max-md:mt-5 max-md:max-w-full">
            <div className="mt-2 w-1/2 max-md:w-full">
              <img
                src={toga.imagePath}
                alt={toga.title}
                className="shadow-[0_2px_10px_rgba(0,0,0,1)] w-full h-full mb-6 object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            <div className="w-1/2 max-md:w-full">
              <div
                className="body text-sm leading-6 text-gray-700 w-full max-md:w-full multi-row"
                style={{ textAlign: 'justify', columnGap: '20px' }}
              >
                <h3 className="text-xl mb-2 font-semibold text-indigo-900">Deskripsi</h3>
                <p className="mb-4">{toga.description}</p>
                <h3 className="mb-2 text-xl font-semibold text-indigo-900 mt-5">
                  Manfaat, Bahan dan Langkah
                </h3>
                <div className="benefit-list">
                  {toga.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="benefit-item flex flex-col gap-2 mb-4"
                    >
                      <div className="flex items-start gap-2">
                        <div className="mt-1 benefit-number font-semibold text-[17px]">
                          {index + 1}.
                        </div>
                        <h4 className="mt-1 text-[17px] font-semibold">{benefit}</h4>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-start gap-5">
                        <div className="flex-1">
                          <h4 className="mb-1 font-semibold text-left">Bahan:</h4>
                          <ul className="list-disc list-inside mb-2 text-left">
                            {toga.ingredients[index].map((ingredient, i) => (
                              <li key={i}>{ingredient}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 text-left">Langkah:</h4>
                          <ol className="list-disc list-inside text-left">
                            {toga.steps[index].map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <CopyrightSection />
    </div>
  );
}

export default TogaDetailPage;