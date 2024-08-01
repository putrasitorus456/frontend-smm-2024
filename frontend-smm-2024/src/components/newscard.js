import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ category, image, imageAlt, author, date, title, caption, _id }) {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow shadow-[0_2px_10px_rgba(0,0,0,0.15)] max-md:mt-6">
        <h3 className="px-16 py-4 text-xl font-semibold leading-8 text-center text-white whitespace-nowrap bg-indigo-900 max-md:px-5">
          {category}
        </h3>
        <div className="flex flex-col justify-center p-4 text-base font-medium leading-6 text-white bg-white">
          <div className="flex flex-col justify-center">
            <Link to={`/berita/${_id}`} className="flex overflow-hidden relative w-full aspect-[1.86]">
              <img loading="lazy" src={image} alt={imageAlt} className="absolute inset-0" />
              <div className="absolute bottom-0 left-0 w-full px-5 py-5 bg-black bg-opacity-50">
                {imageAlt}
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-4 py-5 w-full text-sm bg-white">
          <div className="flex gap-2 items-center self-start leading-[160%] text-neutral-400">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/84b9afb334c8d4fa7aadc2fb30a25717478c01b23046b82c13e25034b58ffd3f?apiKey=7fd2b033b9574f39882fe9ef4728cd45&&apiKey=7fd2b033b9574f39882fe9ef4728cd45" alt="" className="shrink-0 self-stretch aspect-square w-[25px]" />
            <span className="self-stretch my-auto font-light">{author}</span>
            <time className="self-stretch my-auto font-semibold">{date}</time>
          </div>
          <Link to={`/berita/${_id}`} className="mt-4 text-lg font-semibold leading-7 text-indigo-900">
            {title}
          </Link>
          <p className="mt-6 leading-6 text-justify text-stone-500">
            {caption}
          </p>
          <div className="flex flex-col justify-center mt-9 font-medium text-sky-500 leading-[165%] w-[91px]">
            <Link to={`/berita/${_id}`} className="flex gap-1.5 py-1">
              <span>View More</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e892971f69aac523d2bc89416d9a333016f7b308eca21774b630ea58f780f22?apiKey=7fd2b033b9574f39882fe9ef4728cd45&&apiKey=7fd2b033b9574f39882fe9ef4728cd45" alt="" className="shrink-0 my-auto w-3 aspect-[1.2]" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;