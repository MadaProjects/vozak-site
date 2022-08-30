import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../../src/components/sidebar/Sidebar';

describe('Sidebar', () => {
  it('render component', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('render links', () => {
    const links = ['First link title', 'Second link title'];
    render(<Sidebar links={links} />);
    expect(screen.getAllByRole('link').length).toBe(2);
    expect(
      screen.getByRole('link', { name: links[0] })
    ).toBeInTheDocument();
  });

  it('render diferent links', () => {
    const links = ['Test first', 'Test second'];
    render(<Sidebar links={links} />);
    expect(
      screen.getByRole('link', { name: links[0] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: links[1] })
    ).toBeInTheDocument();
  });

  it('render all links', () => {
    const links = [
      'Test first',
      'Test second',
      'Test second',
      'Test second',
      'Test second',
    ];
    render(<Sidebar links={links} />);
    expect(screen.getAllByRole('link').length).toBe(links.length);
  });
});
