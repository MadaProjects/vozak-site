import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import IndexPage from '../../src/pages';

const originalOffsetHeight = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'offsetHeight'
);
const originalOffsetWidth = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'offsetWidth'
);

describe('IndexPage', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 1000,
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      value: 1000,
    });
  });

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetHeight',
      originalOffsetHeight
    );
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetWidth',
      originalOffsetWidth
    );
  });

  it('render a page', () => {
    render(<IndexPage />);
    expect(screen.getByTestId('indexPage')).toBeInTheDocument();
  });

  describe('section 1', () => {
    it('render a section', () => {
      render(<IndexPage />);
      expect(screen.getByTestId('section1')).toBeInTheDocument();
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

  describe('section 2', () => {
    it('render second section', () => {
      render(<IndexPage />);
      expect(screen.getByTestId('section2')).toBeInTheDocument();
    });
  });

  describe('scroll', () => {
    const firstSectionColor = '#e1f2f7';
    const secondSectionColor = '#90d9e2';

    it('has default background', async () => {
      render(<IndexPage />);

      expect(screen.getByTestId('indexPage')).toHaveStyle(
        `background-color: ${firstSectionColor}`
      );
    });

    it('change background color on scroll when there is second section on view', async () => {
      render(<IndexPage />);
      fireEvent.scroll(window, {
        target: {
          scrollY: screen.getByTestId('section2').offsetHeight,
        },
      });

      expect(await screen.getByTestId('indexPage')).toHaveStyle(
        `background-color: ${secondSectionColor}`
      );
    });

    it('does not change background color on scroll on first secton', async () => {
      render(<IndexPage />);
      fireEvent.scroll(window, {
        target: {
          scrollY: 200,
        },
      });

      expect(await screen.getByTestId('indexPage')).toHaveStyle(
        `background-color: ${firstSectionColor}`
      );
    });

    it('change background color back on default on scroll to first section', async () => {
      render(<IndexPage />);

      fireEvent.scroll(window, {
        target: {
          scrollY: screen.getByTestId('section2').offsetHeight,
        },
      });

      expect(await screen.getByTestId('indexPage')).toHaveStyle(
        `background-color: ${secondSectionColor}`
      );

      fireEvent.scroll(window, {
        target: {
          scrollY: -screen.getByTestId('section2').offsetHeight,
        },
      });

      expect(await screen.getByTestId('indexPage')).toHaveStyle(
        `background-color: ${firstSectionColor}`
      );
    });
  });
});
