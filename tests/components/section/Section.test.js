import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Section } from '../../../src/components/section/Section';

describe('Section', () => {
  it('render compnent', () => {
    render(<Section />);
    expect(screen.getByTestId('section')).toBeInTheDocument();
  });

  it('render title as h1', () => {
    render(<Section mainTitle='Test' />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      'Test'
    );
  });
});
