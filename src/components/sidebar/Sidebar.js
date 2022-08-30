import * as React from 'react';

export const Sidebar = ({ links = [] }) => {
  return (
    <div data-testid='sidebar'>
      {links.map((link, i) => (
        <a href={`#section-${i}`}>{link}</a>
      ))}
    </div>
  );
};
