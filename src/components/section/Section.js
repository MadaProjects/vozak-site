import * as React from 'react';

const headingStyles = {
  fontFamily: '"Oswald", sans-serif',
  fontWeight: 800,
};

export const Section = ({ mainTitle, text, isMainTitle }) => {
  return (
    <div data-testid='section'>
      {mainTitle ? (
        isMainTitle ? (
          <h1
            className='text-center text-[5vw] lg:text-6xl mb-[6vw] font-bold uppercase'
            style={headingStyles}>
            {mainTitle}
          </h1>
        ) : (
          <div>
            <h2
              className='text-center text-[5vw] lg:text-6xl mb-[6vw] lg:mb-14 font-bold uppercase'
              style={headingStyles}>
              {mainTitle}
            </h2>
          </div>
        )
      ) : (
        ''
      )}
      {text ? (
        <div className='text-lg leading-8 md:text-[2.35vw] md:leading-[4vw] lg:text-2xl lg:leading-10'>
          <p>{text}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
