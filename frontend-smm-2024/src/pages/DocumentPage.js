import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentCard from '../components/documentcard';
import Header from '../components/header';
import CopyrightSection from '../components/copyright';
import { motion } from 'framer-motion';
import LogoNav from '../components/logonav';

console.log("DocumentPage component rendered");

const ImmediateMotionSection = ({ children, delay = 0.2, duration = 0.75 }) => (
  <motion.section
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
    transition={{ delay, duration, ease: "easeInOut" }}
  >
    {children}
  </motion.section>
);

function DocumentPage() {
  const [documentData, setDocumentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    axios.get('https://hvdt3sb5-5000.asse.devtunnels.ms/api/documents')
      .then(response => {
        if (isMounted) {
          setDocumentData(response.data);
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
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
  if (error) return <div>Error fetching data: {error.message}</div>;

  // Function to split documentData into chunks of 3
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const documentChunks = chunkArray(documentData, 3);

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
      <ImmediateMotionSection delay={0.2} duration={0.75}>
        <section className="flex flex-col items-center px-16 pt-3 pb-20 bg-white max-md:px-5">
          <div className="flex flex-col w-full max-w-[1350px] max-md:max-w-full">
            <header className="flex flex-col self-center text-center max-md:max-w-full">
              <h2 className="self-center text-xl font-medium leading-1 text-green-500">
                Dokumen Desa
              </h2>
              <h1 className="mt-3 text-2xl font-semibold text-indigo-900 max-md:max-w-full max-md:text-2xl">
                Dokumen Resmi dan Publikasi Desa
              </h1>
            </header>
            <div className="mt-7 max-md:mt-5 max-md:max-w-full">
              {documentChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="flex gap-5 max-md:flex-col mb-5">
                  {chunk.map((document) => (
                    <DocumentCard key={document.id} {...document} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ImmediateMotionSection>
      <CopyrightSection />
    </div>
  );
}

export default DocumentPage;