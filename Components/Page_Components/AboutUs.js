import React from 'react';
import aboutImg from '../../public/AboutUs/aboutusImg.png';
import aboutShape2Img from '../../public/AboutUs/aboutusShape.png';
import Button from '../Button';
import Solutions from './Solutions';

const AboutUs = () => {
  return (
    <>
      <div className='h-[85vh] pt-10 md:h-auto md:pt-10 relative flex items-center'>
        <img
          className='absolute top-[-55%] 2xl:top-[-45%] !w-[100%] xl:h-[120%] aboutUs_img xs:h-[150%]'
          src={aboutShape2Img.src}
        />
        <div className='w1 relative z-[2] flex items-center justify-center md:flex-col'>
          <div className='flex-2'>
            <h1 className=' text-white text-[33px] font-semibold xl:text-[30px] xs:text-[25px]'>
              Šta Radi OliBot?
            </h1>
            <p className='text-lightText text-[15px] my-8 sm:text-[13px]'>
              Naša kompanija pruža napredna AI rešenja u vidu chatbotova
              specijalno prilagođena potrebama startapova. <br />
              Sa našim AI chatbot rešenjima, možete pružiti personalizovanu
              podršku korisnicima, automatizovati zadatke i odgovore, kao i
              ostvariti veću interakciju i angažovanost sa vašom ciljnom
              publikom. <br />
              Dopustite nam da vam pomognemo da ostvarite izuzetno korisničko
              iskustvo i postignete poslovne ciljeve kroz inovativne AI chatbot
              tehnologije.
            </p>
            <div className='mt-10'>
              <Button text='30 Dana Besplatno' />
            </div>
          </div>
          <div className='flex-1'>
            <img
              className='lg:w-[450px] sm:w-full sm:mt-5'
              src={aboutImg.src}
            />
          </div>
        </div>
      </div>
      <Solutions />
    </>
  );
};

export default AboutUs;
