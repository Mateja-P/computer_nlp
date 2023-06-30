import React from 'react';
import heroImg from '../../public/Hero/hero.png';
import heroShape1Img from '../../public/Hero/heroShape1.png';
import heroShape2Img from '../../public/Hero/heroShape2.png';
import Button from '../Button';

const Hero = () => {
  return (
    <div className='relative pt-[150px] pb-[150px] xl:pb-[100px]'>
      <img
        className='absolute top-[200px] left-[-23%] 2xl:hidden'
        src={heroShape2Img.src}
      />
      <div className='w1 flex items-center justify-between md:flex-col'>
        <div className='flex-1 relative z-[2]'>
          <img
            className='absolute top-[-100px] left-[-140px]'
            src={heroShape1Img.src}
          />
          <p className='text-[15px] text-[#44D1CB] relative z-[2] md:text-[13px]'>
            AI-POWERED
          </p>
          <h1 className='text-[37px] xl:text-[33px] mb-9 relative z-[2] leading-[60px]'>
            Unapredite <br />{' '}
            <span className='font-bold'>
              User-Experience i Efikasnost <br /> Svog StartUp-a
            </span>
          </h1>
          <p className='mb-9 text-lightText text-[13px]'>
            Koristeći najnovije tehnologije veštačke inteligencije, naši
            chatboti unapređuju korisničko iskustvo, poboljšavaju efikasnost
            poslovanja i otvaraju nove mogućnosti za rast i uspeh vašeg
            startapa.
          </p>
          <div>
            <div className='inline-block relative'>
              <Button text='30 Dana Besplatno' />
              <div className='w-[80px] h-[80px] rounded-full bg-secondaryGray absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%]'></div>
            </div>
          </div>
        </div>
        <div className='flex-1 flex justify-end md:mt-10'>
          <img className='w-[500px] xl:w-[400px] sm:w-full' src={heroImg.src} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
