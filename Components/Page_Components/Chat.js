import React from 'react';
import chatImg from '../../public/Chat/chat.png';
import arrowImg from '../../public/arrow.png';
import { ChatComponent } from '../ChatComponent';

const Chat = () => {
  return (
    <div className='flex justify-center items-center flex-col text-center my-40 md:mt-20'>
      <h1 className='text-[33px] font-semibold xl:text-[30px] xs:text-[25px] mb-5'>
        Isprobaj Chat
      </h1>
      <img className='w-[80px] my-7' src={chatImg.src} />
      <div className='md:text-[13px]'>
        <p className='mb-3'>
          Ovaj OliBot je naučen da rešava probleme oko interneta.
        </p>
        <p className='mb-3'>
          Dnevno, OliBot može sačuvati od 2 do 5 sati oepraterima u call centru
          i korisnicima dati rešenja u sekundi.
        </p>
        <div className='inline-flex items-center justify-center cursor-pointer font-medium'>
          Postavite pitanje OliBotu -
          <div className='flex items-center'>
            <div className='text-lightText'> Najčešća pitanja</div>
            <img className='rotate-[270deg] w-[35px]' src={arrowImg.src} />
          </div>
        </div>
      </div>
      <ChatComponent />
    </div>
  );
};

export default Chat;
