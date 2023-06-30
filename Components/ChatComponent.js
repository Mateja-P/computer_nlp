import React from 'react';
import chatImg from '../public/Chat/chat.png';
import sendImg from '../public/Chat/send.png';
import shape1Img from '../public/Chat/chatShape1.png';
import shape2Img from '../public/Chat/chatShape2.png';

export const ChatComponent = () => {
  return (
    <div className='relative  w-[650px] md:w-[97%]'>
      <img
        className='lg:hidden absolute top-[-40px] left-[-200px]'
        src={shape1Img.src}
      />
      <img
        className='lg:hidden absolute bottom-[-40px] right-[-200px]'
        src={shape2Img.src}
      />
      <div className='relative border border-black rounded-lg overflow-hidden mt-16'>
        <div className='h-[400px] flex flex-col'>
          <div className='flex items-center pl-5 py-2 gap-1'>
            <div className='h-[7px] w-[7px] rounded-full bg-green-500'></div>
            <div className='font-medium'>OliBot</div>
          </div>
          <div className='bg-[#FBFBFB] flex flex-col flex-1'>
            <div className='flex gap-3 items-center self-end mt-5 mb-32'>
              <div className='bg-primaryDarkBlue py-1 px-3 text-white rounded-md text-[13px]'>
                Kako vam mogu pomoci danas?
              </div>
              <img className='w-[35px]' src={chatImg.src} />
            </div>
          </div>
          <div className='flex justify-between border-t pr-2 border-black py-1'>
            <input className='flex-1 pl-2' placeholder='Napisi pitanje...' />
            <div className='bg-[#19185A] h-[35px] w-[35px] flex justify-center items-center rounded-full'>
              <img className='w-[80%]' src={sendImg.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
