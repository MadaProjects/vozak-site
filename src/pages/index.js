import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

const pageStyles = {
  color: 'black',
  padding: 0,
  fontFamily: '"Montserrat", sans-serif, serif',
  backgroundColor: '#e1f2f7',
  transition: 'background-color 0.25s ease-in-out',
};

const basicPageStyle = {
  height: '100vh',
  padding: 25,
};

const IndexPage = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(1);
  const [backgroundColor, setBacgkroundColor] = useState({
    backgroundColor: '#e1f2f7',
  });

  const scroolIsOnSection = () => {};

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      /*
      const sectionsDimensions = {
        1: {
          top: 0,
          bottom: firstSectionRef.current?.clientHeight,
        },
        2: {
          top: secondSectionRef.current?.offsetTop,
          bottom:
            secondSectionRef.current?.offsetTop +
            secondSectionRef.current?.clientHeight,
        },
        3: {
          top: thirdSectionRef.current?.offsetTop,
          bottom:
            thirdSectionRef.current?.offsetTop +
            thirdSectionRef.current?.clientHeight,
        },
      };
      */
      /*
      console.log(window.scrollY);
      console.log(window.innerHeight);
      console.log(firstSectionRef.current?.offsetHeight);
      console.log('scroll');
      */
      if (
        window.scrollY + window.innerHeight >
        firstSectionRef.current?.offsetHeight
      ) {
        setBacgkroundColor({
          backgroundColor: '#90d9e2',
        });
      } else {
        setBacgkroundColor({
          backgroundColor: '#e1f2f7',
        });
      }

      //console.log(window.scrollY);
      //console.log(sectionsDimensions);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
  });

  return (
    <div
      data-testid='indexPage'
      className='sectionSecondBackground'
      style={{ ...pageStyles, ...backgroundColor }}>
      <div
        style={basicPageStyle}
        data-testid='section1'
        ref={firstSectionRef}>
        <h1>Lucie Vozáková</h1>
        <p>Behaviorální terapeut</p>
      </div>
      <div
        data-testid='section2'
        style={basicPageStyle}
        ref={secondSectionRef}>
        <h2>TEST</h2>
      </div>
      <div
        data-testid='section3'
        style={basicPageStyle}
        ref={thirdSectionRef}>
        <h2>TEST 2</h2>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
