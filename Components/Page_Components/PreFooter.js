import React from 'react';
import Button from '../Button';

const PreFooter = () => {
  return (
    <div className='my-52 md:my-32'>
      <div className='w1 flex flex-col bg-primaryDarkBlue py-24 rounded-xl'>
        <h1 className='text-center mb-24 text-white font-semibold text-[26px] sm:text-[22px]'>
          Ne možete izgubiti ništa, ali možete unaprediti svoj biznis!
        </h1>
        <div className='inline self-center'>
          <Button text='Započnite Svojih 30 Besplatnih Dana' />
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
