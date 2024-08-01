import React, { useState, useEffect } from 'react';

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getFormattedDate = () => {
    const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const day = days[dateTime.getDay()];
    const date = dateTime.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const time = dateTime.toLocaleTimeString('id-ID');
    return `${date} | ${day} | ${time}`;
  };

  return (
    <header className="flex justify-center items-center py-1.5 w-full text-xs text-white bg-indigo-900 px-5">
      <div className="flex gap-5 w-full max-w-[892px] flex-wrap">
        <div className="flex-auto my-auto text-center md:text-left text-base md:text-xs">
          {getFormattedDate()}
        </div>
        <div className="flex gap-3 items-center justify-center md:justify-start pl-0 md:pl-20 flex-wrap text-base md:text-xs">
            <div className="my-auto text-center md:text-left">
                Berkolaborasi dengan
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7a0d7641bef3cf5d49b845dec9edf06f6b6acb6c4cf66544bf72726a549fe87?apiKey=7fd2b033b9574f39882fe9ef4728cd45&" alt="" className="hidden md:inline-flex shrink-0 self-stretch my-auto w-px border border-white border-solid aspect-[0.07] stroke-[0.8px] stroke-white" />
            <div className="my-auto text-center md:text-left">
                KKN-PPM UGM Sianjur Mula Mula 2024
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98193a80b351180978f9f53f39607e684ed05b488c2555b3d43ac514934ef855?apiKey=7fd2b033b9574f39882fe9ef4728cd45&" alt="" className="shrink-0 self-stretch aspect-[0.95] w-[22px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;