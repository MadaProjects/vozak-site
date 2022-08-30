import * as React from 'react';

const linkStyles = {
  fontFamily: '"Oswald", sans-serif',
  fontWeight: 800,
};

export const Footer = () => {
  return (
    <div data-testid='footer' className='text-3xl'>
      <p className='whitespace-normal	'>
        <span className='block'>Made by&nbsp;</span>
        <a
          href='https://www.petermada.info'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#f58572] uppercase whitespace-nowrap hover:underline'
          style={linkStyles}>
          Peter Mada
        </a>
      </p>
    </div>
  );
};
