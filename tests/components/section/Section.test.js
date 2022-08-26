import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Section } from '../../../src/components/section/Section';

describe('Section', () => {
  it('render compnent', () => {
    render(<Section />);
    expect(screen.getByTestId('section')).toBeInTheDocument();
  });

  it('render title as h1', () => {
    const testTitle = 'Test';
    render(<Section mainTitle={testTitle} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      testTitle
    );
  });

  it('render diferent title as h1', () => {
    const testTitle = 'Lorem';
    render(<Section mainTitle={testTitle} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      testTitle
    );
  });

  it('does not render h1 on missing title', () => {
    const testTitle = 'Lorem';
    render(<Section />);
    expect(
      screen.queryByRole('heading', { level: 1 })
    ).not.toBeInTheDocument();
  });

  it('does not render h1 on empty title', () => {
    const testTitle = 'Lorem';
    render(<Section mainTitle='' />);
    expect(
      screen.queryByRole('heading', { level: 1 })
    ).not.toBeInTheDocument();
  });

  it('render a text', () => {
    const text = 'Lorem ipsum et donor';
    render(<Section text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('render a diferent text', () => {
    const text = 'Donor et lorem';
    render(<Section text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('render a text in paragraph', () => {
    const text = 'Donor et lorem';
    render(<Section text={text} />);
    expect(screen.getByText(text).tagName).toMatch('P');
  });
});
