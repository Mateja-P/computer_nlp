import React from 'react';

const Button = ({ text }) => {
  return (
    <div
      className={`bg-primaryOrange py-2.5 px-5 font-semibold text-[15px] relative z-[2] rounded-md inline cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Button;
