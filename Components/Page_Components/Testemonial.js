import React, { useState } from 'react';
import arrowImg from '../../public/arrow.png';
import starImg from '../../public/star.png';

const testemonials = [
  {
    id: 1,
    name: 'Marko S.',
    text: 'Chatbot je postao nezamenjiv deo naše korisničke podrške, omogućavajući nam da pružimo brze odgovore i personalizovanu podršku našim korisnicima. Osim toga, analitika koju dobijamo od chatbota nam pomaže da bolje razumemo potrebe naših korisnika i unapredimo naše usluge.',
  },
  {
    id: 2,
    name: 'Ana K.',
    text: 'AI chatbot nam je donio značajno olakšanje u pružanju podrške našim kupcima. Sada možemo odgovarati na veliki broj upita istovremeno, bez gubitka kvaliteta ili brzine. Naši kupci su zadovoljni zbog brzih odgovora koje dobijaju i visokog nivoa personalizacije. Preporučujem AI chatbot svim preduzetnicima koji žele da unaprede svoju podršku.',
  },
  {
    id: 3,
    name: 'Nikola P.',
    text: 'AI chatbot je postao naš najbolji prodajni agent. Sposobnost chatbota da pruži relevantne informacije, preporuke i odgovore na pitanja našim potencijalnim klijentima je izvanredna. Videli smo značajan porast konverzija i smanjenje vremena potrebnog za zaključivanje prodaje. Oduševljeni smo rezultatima koje smo postigli uz pomoć AI chatbota.',
  },
];

const Testemonial = () => {
  let [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className='bg-secondaryLightBlue py-20'>
      <div className='w1 flex md:flex-col md:items-start md:gap-5 justify-between items-center'>
        <div className='flex-1 text-[28px] font-semibold xs:text-[25px]'>
          <h2>
            Evo šta naši klijenti kažu o <br /> OliBotu
          </h2>
          <div className='flex mt-3'>
            <img
              onClick={() =>
                setActiveSlide(
                  activeSlide === 1 ? (activeSlide = 1) : activeSlide - 1
                )
              }
              className='w-[50px]'
              src={arrowImg.src}
            />
            <img
              onClick={() =>
                setActiveSlide(
                  activeSlide === testemonials.length
                    ? (activeSlide = testemonials.length)
                    : activeSlide + 1
                )
              }
              className='w-[50px] rotate-[180deg]'
              src={arrowImg.src}
            />
          </div>
        </div>
        <div className='flex-1'>
          {testemonials.map(e => {
            return (
              <>
                {e.id === activeSlide && (
                  <div className='bg-white py-4 px-3 flex items-center justify-center h-full rounded-lg drop-shadow-xl'>
                    <div>
                      <div className='font-semibold text-[20px] mb-4'>
                        {e.name}
                      </div>
                      <div className='mb-4'>{e.text}</div>
                      <div className='flex gap-2'>
                        {[1, 2, 3, 4, 5].map(() => {
                          return <img src={starImg.src} />;
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testemonial;
