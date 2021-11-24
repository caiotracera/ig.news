import { render, screen } from '@testing-library/react';
import { Header } from './index';

describe('Components > Header', () => {
  it('should render', () => {
    render(<Header />);
    expect(screen.getByAltText('ig.news')).toBeInTheDocument();
  });
});
