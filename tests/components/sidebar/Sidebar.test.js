import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../../src/components/sidebar/Sidebar';

describe('Sidebar', () => {
  it('render component', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
