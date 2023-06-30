import React from 'react';
import rocketImg from '../../public/Footer/rocket.png';
import shapeImg from '../../public/Footer/footerShape.png';
import Button from '../Button';

const Footer = () => {
  return (
    <div className='relative pb-32'>
      <div className='w1 flex z-[2] relative md:flex-col md:gap-10'>
        <div className='flex-1'>
          <h2 className='text-[20px] font-semibold mb-5'>
            Započni svojih Besplatnih 30 Dana
          </h2>
          <p className='text-lightText text-[14px]'>
            Pošaljite poruku i naš tim će vam odgovoriti u najkraćem roku. Po
            dogovoru sa klijentom oko podataka implementacija može trajati od 3
            do 5 dana. 30 Besplatnih dana počinju od dana kada se implementacija
            završi.
          </p>
        </div>
        <div className='pt-[100px] flex-1 lg:hidden'>
          <img src={rocketImg.src} />
        </div>
        <div className='flex-1'>
          <div>
            <input
              placeholder='Vaše Ime'
              className='border border-black rounded-3xl pl-1.5 py-[10px] w-full'
            />
            <div className='my-2'>
              <p className='text-lightText text-[11px]'>
                Na ovaj emai će vam stići poruka
              </p>
              <input
                placeholder='Vaš email'
                className='border border-black rounded-3xl pl-1.5 py-[10px] w-full '
              />
            </div>
            <input
              placeholder='Industrija'
              className='border border-black rounded-3xl pl-1.5 py-[10px] w-full my-2'
            />
            <textarea
              placeholder='Napomena'
              className='border border-black rounded-xl pl-1.5 py-[6px] my-2 mb-5 w-full h-[200px]'
            ></textarea>
            <Button text='Pošalji' />
          </div>
        </div>
      </div>
      <img className='absolute bottom-0 w-full' src={shapeImg.src} />
    </div>
  );
};

export default Footer;
