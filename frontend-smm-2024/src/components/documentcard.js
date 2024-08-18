import React from 'react';
import { Link } from 'react-router-dom';

function DocumentCard({ title, content, filePath, thumbnail, createdAt, _id }) {
  const baseURL = 'https://backend-smm-2024-production.up.railway.app/'; // Sesuaikan dengan URL server Anda
  const thumbnailUrl = `${baseURL}${thumbnail}`;
  const fileUrl = `${baseURL}${filePath}`;

  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-shadow duration-300 max-md:mt-6">
        <div className="flex flex-col justify-center p-4 text-base font-medium leading-6 text-white bg-white">
          <div className="flex flex-col justify-center">
            <Link to={fileUrl} className="flex overflow-hidden relative w-full aspect-[1.86]">
              <img loading="lazy" src={thumbnailUrl} alt={title} className="absolute inset-0 transition-transform duration-300 transform hover:scale-110" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-4 py-5 w-full text-sm bg-white">
          <Link to={fileUrl} target="_blank" className="mt-4 text-lg font-semibold leading-7 text-indigo-900">
            {title}
          </Link>
          <p className="mt-6 leading-6 text-justify text-stone-500">
            {content}
          </p>
        </div>
      </div>
    </article>
  );
}

export default DocumentCard;