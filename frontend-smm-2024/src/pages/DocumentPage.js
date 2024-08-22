import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentCard from '../components/documentcard';
import Header from '../components/header';
import CopyrightSection from '../components/copyright';
import { motion } from 'framer-motion';
import LogoNav from '../components/logonav';

function DocumentListPage() {
  const [documentsData, setDocumentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    axios.get('https://backend-smm-2024-production.up.railway.app/api/documents')
      .then(response => {
        if (isMounted) {
          const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          const formattedData = sortedData.map(doc => {
            const date = new Date(doc.createdAt);
            const formattedDate = date.toLocaleDateString('id-ID', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            });
            return { ...doc, createdAt: formattedDate };
          });
          setDocumentsData(formattedData);
          setLoading(false);
        }
      })
      .catch(error => {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return (
    <div className="spinner gap-3">
      <div className="gg"></div>
      <div className="gg"></div>
      <div className="gg"></div>
    </div>
  );
  if (error) return <div>Error fetching data: {error.message}</div>;

  const documentChunks = chunkArray(documentsData, 3);

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
      <section className="flex flex-col items-center px-16 pt-3 pb-10 bg-white max-md:px-5">
        <div className="flex flex-col w-full max-w-[1350px] max-md:max-w-full">
          <header className="flex flex-col self-center text-center max-md:max-w-full">
            <h2 className="self-center text-xl font-medium leading-1 text-sky-500">
              Dokumen & Surat Desa
            </h2>
            <h1 className="mt-3 text-2xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-2xl">
              Kumpulan Dokumen dan Surat Resmi Desa
            </h1>
          </header>
          <div className="mt-7 max-md:mt-5 max-md:max-w-full">
            {documentChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="flex gap-5 max-md:flex-col mb-5">
                {chunk.map((document) => (
                  <DocumentCard key={document._id} {...document} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <header className="flex flex-col self-center text-center max-md:max-w-full">
          <h2 className="mt-10 px-7 self-center text-[15px] font-medium leading-1 text-[#666666] max-md:text-[13px]">
            Developer berfokus pada pembuatan fungsionalitas fitur dan memastikan fitur dapat digunakan agar mampu diskalakan untuk jumlah arsip dan dokumen yang lebih besar. Untuk penambahan dokumen dan arsip, dapat dilakukan dengan mengupload file melalui API oleh admin.
          </h2>
        </header>
      </section>
      <CopyrightSection />
    </div>
  );
}

export default DocumentListPage;

// Utility function to split data into chunks
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};