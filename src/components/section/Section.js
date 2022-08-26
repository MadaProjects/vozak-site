export const Section = ({ mainTitle, text }) => {
  return (
    <div data-testid='section'>
      {mainTitle ? <h1>{mainTitle}</h1> : ''}
      {text ? <p>{text}</p> : ''}
    </div>
  );
};
