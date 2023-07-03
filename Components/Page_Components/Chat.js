import React, { useState } from 'react';
import chatImg from '../../public/Chat/chat.png';
import arrowImg from '../../public/arrow.png';
import { ChatComponent } from '../ChatComponent';

const Chat = () => {
  const [visibleQuestion, setVisibility] = useState(false);

  return (
    <div
      id='chat'
      className='flex justify-center items-center flex-col text-center my-40 md:mt-20'
    >
      <h1 className='text-[33px] font-semibold xl:text-[30px] xs:text-[25px] mb-5'>
        Isprobaj Chat
      </h1>
      <img className='w-[80px] my-7' src={chatImg.src} />
      <div className='md:text-[13px]'>
        <p className='mb-3'>
          Ovaj OliBot je naučen da rešava probleme oko računara.
        </p>
        <p className='mb-3'>
          Dnevno, OliBot može sačuvati od 2 do 5 sati operaterima u call centru
          i korisnicima dati rešenja u sekundi.
        </p>
        <div
          onClick={() => setVisibility(!visibleQuestion)}
          className='inline-flex items-center justify-center cursor-pointer font-medium'
        >
          Postavite pitanje OliBotu -
          <div className='flex items-center'>
            <div className='text-lightText'> Najčešći problemi</div>
            <img
              className={`${
                visibleQuestion ? 'rotate-[90deg]' : 'rotate-[270deg]'
              } w-[35px]`}
              src={arrowImg.src}
            />
          </div>
        </div>
        {visibleQuestion && (
          <div className='mt-5'>
            <div className='text-lightText text-[13px]'>
              Kompijuter se ne pali
            </div>
            <div className='text-lightText text-[13px]'>
              Kako da vratim izgubljene podatke sa uredjaja?
            </div>
            <div className='text-lightText text-[13px]'>
              Kompijuter se ne povezuje sa internetom
            </div>
          </div>
        )}
      </div>
      <ChatComponent />
    </div>
  );
};

export default Chat;
