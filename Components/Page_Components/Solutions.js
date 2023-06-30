import React from 'react';
import solutionsImg from '../../public/Solutions/solutions.png';

const Solutions = () => {
  return (
    <div className="bg-[url('/Solutions/solutionsShape.png')] pt-56 pb-[300px] mb-10 xl:pt-24 md:pb-[100px] 2xl:pt-40">
      <div className='w1 flex justify-between items-center md:flex-col-reverse'>
        <div className='flex-1'>
          <img className='w-[400px] md:w-full md:mt-5' src={solutionsImg.src} />
        </div>
        <div className='flex-1'>
          <h1 className='text-[33px] font-semibold xl:text-[30px] xs:text-[25px] mb-5'>
            Šta OliBot nudi?
          </h1>
          <div className='text-[15px] sm:text-[13px]'>
            <div className='flex gap-3 mb-4'>
              1.
              <p>
                Efikasna Korisnička Podrška: AI chatbotovi mogu automatski
                odgovarati na uobičajena pitanja i probleme korisnika, pružajući
                trenutne odgovore 24/7. Ovo smanjuje opterećenje korisničke
                podrške, skraćuje vreme odgovora i povećava zadovoljstvo
                korisnika.
              </p>
            </div>
            <div className='flex gap-3 mb-4'>
              2.
              <p>
                Personalizovano Korisničko Iskustvo: AI chatbotovi koriste
                algoritme veštačke inteligencije kako bi razumeli potrebe i
                preferencije korisnika. Na osnovu prikupljenih podataka, mogu
                pružiti personalizovane preporuke, savete i informacije,
                poboljšavajući korisničko iskustvo i povećavajući angažovanost.
              </p>
            </div>
            <div className='flex gap-3 mb-4'>
              3.
              <p>
                Napredna Analitika: Naši AI chatbotovi prikupljaju dragocene
                podatke o korisničkim interakcijama, preferencijama i pitanjima.
                Koristeći moć analitike, možete dobiti dublji uvid u potrebe
                korisnika, identifikovati trendove i poboljšati svoje
                poslovanje. Ovi podaci mogu vam pomoći da donosite informisane
                odluke i prilagodite svoju strategiju za bolje rezultate.
              </p>
            </div>
            <div className='flex gap-3'>
              4.
              <p>
                Prvih 30 Dana Besplatno. Po isteku 30 dana plaća se niska cena
                mesečno u zavisnosti od vašeg biznisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
