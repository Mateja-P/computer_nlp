import React, { useState, useRef, useEffect } from 'react';
import chatImg from '../public/Chat/chat.png';
import sendImg from '../public/Chat/send.png';
import shape1Img from '../public/Chat/chatShape1.png';
import shape2Img from '../public/Chat/chatShape2.png';
import { url } from '../url';
import axios from 'axios';

export const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([
    {
      text: 'Kako vam mogu pomoći?',
      type: 'answer',
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = input => {
    setLoading(true);

    const payload = {
      question: input,
    };

    setMessage([
      ...messages,
      {
        text: input,
        type: 'question',
      },
    ]);

    const p = JSON.stringify(payload);

    axios.post(`${url}/home`, p).then(res => {
      setMessage([
        ...messages,
        { text: payload.question, type: 'question' },
        {
          text: res.data,
          type: 'answer',
        },
      ]);

      setLoading(false);
    });
  };

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
          <div className='bg-[#FBFBFB] flex flex-col flex-1 overflow-y-scroll custom__scrollbar px-2'>
            {messages.length > 0 &&
              messages.map(e => {
                return (
                  <div
                    className={`flex items-start ${
                      e.type == 'answer'
                        ? 'justify-end text-right'
                        : 'justify-start'
                    }`}
                  >
                    <div className='bg-[#007AFF] my-3 text-white px-2 py-1 text-[13px] rounded-md'>
                      {e.text}
                    </div>
                    {e.type == 'answer' && (
                      <img className='h-[30px]' src={chatImg.src} />
                    )}
                  </div>
                );
              })}
            {loading && (
              <div className='flex justify-end gap-2'>
                <div className='text-right'>Vraća odgovor...</div>
                <img className='h-[30px]' src={chatImg.src} />
              </div>
            )}
          </div>
          <div className='flex justify-between border-t pr-2 border-black py-1'>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className='flex-1 pl-2 outline-none'
              placeholder='Napiši pitanje...'
              onKeyUp={e => {
                if (e.keyCode == 13) {
                  sendMessage(input);
                  setInput('');
                }
              }}
            />
            <div
              onClick={() => {
                sendMessage(input);
                setInput('');
              }}
              className='bg-[#19185A] h-[35px] w-[35px] flex justify-center items-center rounded-full'
            >
              <img className='w-[80%]' src={sendImg.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
