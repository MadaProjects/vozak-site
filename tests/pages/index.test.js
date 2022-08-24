import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IndexPage from '../../src/pages';

describe('404', () => {
  it('render a page', () => {
    render(<IndexPage />);
    expect(screen.getByTestId('indexPage')).toBeInTheDocument();
  });
});
