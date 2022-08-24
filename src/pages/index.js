import * as React from 'react';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const basicPageStyle = {
  height: '100vh',
};

const IndexPage = () => {
  return (
    <div data-testid='indexPage'>
      <div data-testid='secton1'>
        <h1>Lucie Vozáková</h1>
        <p>Behaviorální terapeut</p>
      </div>
      <div data-testid='section2'></div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
