import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../../src/components/footer/Footer';

describe('Footer', () => {
  it('render component', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('render made by link', () => {
    render(<Footer />);
    expect(screen.getByText('Made by')).toBeInTheDocument();
  });

  it('render link to author website', () => {
    render(<Footer />);
    expect(
      screen.getByRole('link', { name: 'Peter Mada' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Peter Mada' }).href).toMatch(
      'https://www.petermada.info'
    );
  });

  it('has link to author website with target blank', () => {
    render(<Footer />);
    expect(
      screen
        .getByRole('link', { name: 'Peter Mada' })
        .getAttribute('target')
    ).toMatch('_blank');
  });

  it('has link to author website with noopener and noreferrer', () => {
    render(<Footer />);
    expect(
      screen.getByRole('link', { name: 'Peter Mada' }).getAttribute('rel')
    ).toMatch('noopener noreferrer');
  });
});
