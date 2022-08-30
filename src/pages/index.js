import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Footer } from '../components/footer/Footer';
import { Section } from '../components/section/Section';
import { sectionsData } from '../data';

const pageStyles = {
  color: 'black',
  padding: 0,
  fontFamily: '"Montserrat", sans-serif, serif',
  backgroundColor: '#e1f2f7',
  transition: 'background-color 0.25s ease-in-out',
};

const basicPageStyle = {
  minHeight: '100vh',
};

const IndexPage = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);
  const sectionRef6 = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('#e1f2f7');
  const [scrolingDown, setScrolingDown] = useState(true);
  const backgroundColors = [
    '#e1f2f7',
    '#90d9e2',
    '#ffa551',
    '#ff6353',
    '#a6f9fb',
    '#84efc9',
    '#5597a9',
    '#d74e40',
    '#ffc668',
  ];

  const scroolIsOnSection = () => {
    const currentScrollPosition = scrolingDown
      ? window.scrollY + window.innerHeight
      : window.scrollY;
    if (currentScrollPosition <= firstSectionRef.current?.offsetHeight) {
      return 1;
    }

    if (
      currentScrollPosition > secondSectionRef.current?.offsetTop &&
      currentScrollPosition <=
        secondSectionRef.current?.offsetTop +
          secondSectionRef.current?.offsetHeight
    ) {
      return 2;
    }

    if (
      currentScrollPosition > thirdSectionRef.current?.offsetTop &&
      currentScrollPosition <=
        thirdSectionRef.current?.offsetTop +
          thirdSectionRef.current?.offsetHeight
    ) {
      return 3;
    }

    if (
      currentScrollPosition > sectionRef4.current?.offsetTop &&
      currentScrollPosition <=
        sectionRef4.current?.offsetTop + sectionRef4.current?.offsetHeight
    ) {
      return 4;
    }

    if (
      currentScrollPosition > sectionRef5.current?.offsetTop &&
      currentScrollPosition <=
        sectionRef5.current?.offsetTop + sectionRef5.current?.offsetHeight
    ) {
      return 5;
    }
    if (
      currentScrollPosition > sectionRef6.current?.offsetTop &&
      currentScrollPosition <=
        sectionRef6.current?.offsetTop + sectionRef6.current?.offsetHeight
    ) {
      return 6;
    }
  };

  useEffect(() => {
    const threshold = 10;
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        return;
      }
      setScrolingDown(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;

      setBackgroundColor(backgroundColors[scroolIsOnSection() - 1]);
    };

    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolingDown, backgroundColors, scroolIsOnSection]);

  return (
    <div
      data-testid='indexPage'
      style={{
        ...pageStyles,
        ...{ backgroundColor: `${backgroundColor}` },
      }}>
      <div className='container mx-auto p-[5%] max-w-[1000px]'>
        <div
          data-testid='section1'
          style={basicPageStyle}
          data-testid='section1'
          ref={firstSectionRef}>
          <Section
            mainTitle='Lorem ipsum'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a laoreet lorem. Donec erat nisl, pretium ut purus vel, tempus volutpat justo. Aenean dictum sagittis elit mollis facilisis. Donec lacus neque, hendrerit vel tincidunt vitae, finibus id nulla. Integer efficitur, neque sit amet semper dictum, dui lorem condimentum libero, id mattis lectus enim vel libero. Mauris maximus, odio quis facilisis accumsan, orci eros tincidunt tortor, non feugiat nisi justo quis risus. Donec ipsum sapien, venenatis ut condimentum a, finibus sed augue. Praesent dapibus mattis urna et pretium.'
            isMainTitle={true}
          />
        </div>
        <div
          data-testid='section2'
          style={basicPageStyle}
          ref={secondSectionRef}>
          <Section
            mainTitle='Lorem ipsum'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a laoreet lorem. Donec erat nisl, pretium ut purus vel, tempus volutpat justo. Aenean dictum sagittis elit mollis facilisis. Donec lacus neque, hendrerit vel tincidunt vitae, finibus id nulla. Integer efficitur, neque sit amet semper dictum, dui lorem condimentum libero, id mattis lectus enim vel libero. Mauris maximus, odio quis facilisis accumsan, orci eros tincidunt tortor, non feugiat nisi justo quis risus. Donec ipsum sapien, venenatis ut condimentum a, finibus sed augue. Praesent dapibus mattis urna et pretium.'
            isMainTitle={false}
          />
        </div>
        <div
          data-testid='section3'
          style={basicPageStyle}
          ref={thirdSectionRef}>
          <Section
            mainTitle='Lorem ipsum'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a laoreet lorem. Donec erat nisl, pretium ut purus vel, tempus volutpat justo. Aenean dictum sagittis elit mollis facilisis. Donec lacus neque, hendrerit vel tincidunt vitae, finibus id nulla. Integer efficitur, neque sit amet semper dictum, dui lorem condimentum libero, id mattis lectus enim vel libero. Mauris maximus, odio quis facilisis accumsan, orci eros tincidunt tortor, non feugiat nisi justo quis risus. Donec ipsum sapien, venenatis ut condimentum a, finibus sed augue. Praesent dapibus mattis urna et pretium.'
          />
        </div>
        <div
          data-testid='section4'
          style={basicPageStyle}
          ref={sectionRef4}>
          <Section
            mainTitle='Lorem ipsum'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a laoreet lorem. Donec erat nisl, pretium ut purus vel, tempus volutpat justo. Aenean dictum sagittis elit mollis facilisis. Donec lacus neque, hendrerit vel tincidunt vitae, finibus id nulla. Integer efficitur, neque sit amet semper dictum, dui lorem condimentum libero, id mattis lectus enim vel libero. Mauris maximus, odio quis facilisis accumsan, orci eros tincidunt tortor, non feugiat nisi justo quis risus. Donec ipsum sapien, venenatis ut condimentum a, finibus sed augue. Praesent dapibus mattis urna et pretium.'
          />
        </div>
        <div
          data-testid='section5'
          style={basicPageStyle}
          ref={sectionRef5}>
          <Section
            mainTitle='Lorem ipsum'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a laoreet lorem. Donec erat nisl, pretium ut purus vel, tempus volutpat justo. Aenean dictum sagittis elit mollis facilisis. Donec lacus neque, hendrerit vel tincidunt vitae, finibus id nulla. Integer efficitur, neque sit amet semper dictum, dui lorem condimentum libero, id mattis lectus enim vel libero. Mauris maximus, odio quis facilisis accumsan, orci eros tincidunt tortor, non feugiat nisi justo quis risus. Donec ipsum sapien, venenatis ut condimentum a, finibus sed augue. Praesent dapibus mattis urna et pretium.'
          />
        </div>
        <div
          data-testid='section6'
          style={basicPageStyle}
          ref={sectionRef6}>
          <Section
            mainTitle='Lorem ipsum'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a laoreet lorem. Donec erat nisl, pretium ut purus vel, tempus volutpat justo. Aenean dictum sagittis elit mollis facilisis. Donec lacus neque, hendrerit vel tincidunt vitae, finibus id nulla. Integer efficitur, neque sit amet semper dictum, dui lorem condimentum libero, id mattis lectus enim vel libero. Mauris maximus, odio quis facilisis accumsan, orci eros tincidunt tortor, non feugiat nisi justo quis risus. Donec ipsum sapien, venenatis ut condimentum a, finibus sed augue. Praesent dapibus mattis urna et pretium.'
          />
        </div>
      </div>
      <div className='bg-[#1C1D28] text-white'>
        <div className='container mx-auto px-[5%] py-10 md:py-16 max-w-[1000px] text-center'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
