import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const headingStyles = {
  fontFamily: '"Oswald", sans-serif',
  fontWeight: 800,
};

const textStyle = {
  textAlign: 'justify',
};

export const Section = ({ mainTitle, text, isMainTitle }) => {
  return (
    <div data-testid='section' className='mt-24'>
      <div
        className='text-center mb-10'
        data-sal='zoom-in'
        data-sal-easing='ease-out-back'>
        <StaticImage
          className='m-auto '
          src='../../images/mail.png'
          alt=''
          width={400}
          height={290}
        />
      </div>
      <div data-sal='zoom-in' data-sal-easing='ease-out-back'>
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
      </div>
      {text ? (
        <div
          data-sal='zoom-in'
          data-sal-easing='ease-out-back'
          style={textStyle}
          className='text-lg leading-8 md:text-[2.35vw] md:leading-[4vw] lg:text-2xl lg:leading-10'>
          <p>{text}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
