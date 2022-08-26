const React = require('react');
// Adds a class name to the body element

exports.onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
  setBodyAttributes({
    style: {
      margin: '0',
    },
  });
};
