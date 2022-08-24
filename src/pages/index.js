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
      <h1>Lucie Vozáková</h1>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
