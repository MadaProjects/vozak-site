import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

const pageStyles = {
  color: 'black',
  padding: 0,
  fontFamily: '"Montserrat", sans-serif, serif',
  backgroundColor: '#e1f2f7',
  transition: 'background-color 0.25s ease-in-out',
};

const headingStyles = {
  fontFamily: '"Oswald", sans-serif',
  fontWeight: 800,
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

  const backgroundColors = ['#e1f2f7', '#90d9e2', '#ffa551'];

  const scroolIsOnSection = () => {
    const currentScrollPosition = window.scrollY + window.innerHeight;

    if (
      currentScrollPosition > firstSectionRef.current?.offsetHeight &&
      currentScrollPosition <=
        firstSectionRef.current?.offsetHeight +
          secondSectionRef.current?.offsetHeight
    ) {
      return 2;
    }

    if (
      currentScrollPosition >
        firstSectionRef.current?.offsetHeight +
          secondSectionRef.current?.offsetHeight &&
      currentScrollPosition <=
        firstSectionRef.current?.offsetHeight +
          secondSectionRef.current?.offsetHeight +
          thirdSectionRef.current?.offsetHeight
    ) {
      return 3;
    }

    return 1;
  };

  const handleScroll = () => {
    const offset = 100;
    if (typeof window !== 'undefined') {
      setBacgkroundColor({
        backgroundColor: backgroundColors[scroolIsOnSection() - 1],
      });
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
      className='sectionSecondBackground '
      style={{ ...pageStyles, ...backgroundColor }}>
      <div className='container mx-auto'>
        <div
          style={basicPageStyle}
          data-testid='section1'
          ref={firstSectionRef}>
          <h1
            className='text-[5vw] font-bold underline'
            style={headingStyles}>
            Lucie Vozáková
          </h1>
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
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
