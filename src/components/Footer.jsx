import React from 'react';
import LOGO from '../assets/img/logo.png';
const Footer = () => {
    return (

        <div className='bg-white/5 border-t-[1px] flex flex-col justify-center items-start border-[#2b2b2b] mt-[100px] py-[40px] sm:py-[30px] px-[40px] sm:px-[40px] md:px-[100px] lg:px-[200px]'>
            <div className='flex items-center gap-x-2'>
                <img src={LOGO} className="w-[50px] h-auto" alt="" />
                <h1 className="font-neue text-white text-[18px] sm:text-[18px] md:text-[20px] lg:text-[25px]">
                    AuraMind
                </h1>
            </div>

            <p className='font-[300]'>Сайт разработан в рамках конкурса <a className='title-animated-gradient' href="https://altairdonso.ru/2025/04/02/iv-regionalnyj-investiczionnyj-konkurs-tehnostartap-2025/">Техностартап-2025</a> командой "Восход"</p>
        </div>

    );
};

export default Footer;