export const Section = ({ mainTitle }) => {
  return (
    <div data-testid='section'>
      {mainTitle ? <h1>{mainTitle}</h1> : ''}
    </div>
  );
};
