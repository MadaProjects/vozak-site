import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../../src/components/sidebar/Sidebar';

describe('Sidebar', () => {
  it('render component', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('render links', () => {
    render(<Sidebar links={['First link title', 'Second link title']} />);
    expect(screen.getAllByRole('link').length).toBe(2);
    expect(
      screen.getByRole('link', { name: 'First link title' })
    ).toBeInTheDocument();
  });

  it('render diferent links', () => {
    render(<Sidebar links={['Test first', 'Test second']} />);
    expect(
      screen.getByRole('link', { name: 'Test first' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Test second' })
    ).toBeInTheDocument();
  });
});
