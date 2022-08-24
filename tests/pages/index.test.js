import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IndexPage from '../../src/pages';

describe('IndexPage', () => {
  it('render a page', () => {
    render(<IndexPage />);
    expect(screen.getByTestId('indexPage')).toBeInTheDocument();
  });

  describe('section 1', () => {
    it('render a section', () => {
      render(<IndexPage />);
      expect(screen.getByTestId('secton1')).toBeInTheDocument();
    });

    it('render a main title', () => {
      render(<IndexPage />);
      expect(
        screen.getByRole('heading', { level: 1 })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { level: 1 }).textContent
      ).toEqual('Lucie Vozáková');
    });

    it('render subtitle for main heading', () => {
      render(<IndexPage />);
      expect(screen.getByText('Behaviorální terapeut'));
    });
  });
});
