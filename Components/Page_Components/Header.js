import React, { useEffect, useState, useRef } from 'react';
import logoImg from '../../public/Header/logo.png';
import headerImg from '../../public/Header/headerShape.png';
import Link from 'next/link';
import StickedHeader from './StickedHeader';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [stickHeader, setStickheader] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', e => {
      if (window.pageYOffset > headerRef.current.offsetTop) {
        setStickheader(true);
      } else {
        setStickheader(false);
      }
    });
  }, [headerRef]);

  return (
    <div className='relative'>
      <StickedHeader stickHeader={stickHeader} />
      <div
        ref={headerRef}
        className='flex justify-between items-center border-b h-[70px] border-[#F9F9F9] pl-5'
      >
        <div className='flex items-center gap-3'>
          <img className='w-[60px] z-[2] relative' src={logoImg.src} />
          <div className='z-[2] relative text-white font-medium'>OliBot.rs</div>
          <div className='absolute h-[100px] top- left-0 z-[1] w-[300px]'>
            <img src={headerImg.src} />
          </div>
        </div>
        <div className='flex gap-4 relative z-[2] lg:hidden'>
          <Link className='text-lightText text-[13px]' href='/'>
            Početna
          </Link>
          <Link className='text-lightText text-[13px]' href='/'>
            O Nama
          </Link>
          <Link className='text-lightText text-[13px]' href='/'>
            Rešenja
          </Link>
          <Link className='text-lightText text-[13px]' href='/'>
            Chat
          </Link>
          <Link className='text-lightText text-[13px]' href='/'>
            Testemonial
          </Link>
          <Link className='text-lightText text-[13px]' href='/'>
            Pošalji Poruku
          </Link>
        </div>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-full flex justify-center items-center px-7 rounded-bl-3xl text-white cursor-pointer lg:hidden'>
          <p className='font-medium text-[15px]'>30 Dana Besplatno</p>
        </div>

        <div
          className={`hidden z-[999] lg:flex flex-col absolute left-0 w-full bg-primaryDarkBlue rounded-b-xl py-5 ${
            openMenu ? 'top-[100%]' : 'top-[-1000%]'
          }`}
        >
          <div className='flex flex-col gap-4 text-center relative z-[2]'>
            <Link className='text-lightText text-[13px]' href='/'>
              Početna
            </Link>
            <Link className='text-lightText text-[13px]' href='/'>
              O nama
            </Link>
            <Link className='text-lightText text-[13px]' href='/'>
              Rešenja
            </Link>
            <Link className='text-lightText text-[13px]' href='/'>
              Chat
            </Link>
            <Link className='text-lightText text-[13px]' href='/'>
              Testemonial
            </Link>
            <Link className='text-lightText text-[13px]' href='/'>
              Pošalji poruku
            </Link>
          </div>
          <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-full flex justify-center items-center px-7 rounded-3xl py-3 mt-5 text-white cursor-pointer'>
            <p className='font-medium text-[15px]'>30 Dana Besplatno</p>
          </div>
        </div>

        <div
          className='hidden mr-5 lg:flex lg:flex-col lg:justify-between lg:w-5 lg:h-5 z-[3]'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div
            className={`w-full h-0.5 bg-black transition-all duration-200 ease-in ${
              openMenu ? 'rotate-[-45deg] translate-y-[9px]' : ''
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-black transition-all duration-200 ease-in ${
              openMenu ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`w-full h-0.5 bg-black transition-all duration-200 ease-in ${
              openMenu ? 'rotate-45 translate-y-[-9px]' : ''
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
