import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

describe('Components > Header', () => {
  it('should render correctly', () => {
    render(<Home />);

    expect(screen.getByAltText('Girl coding')).toBeInTheDocument();
    expect(screen.getByText(/news about/i)).toBeInTheDocument();

    expect(screen.getByText(/react/i)).toHaveStyle('color: var(--cyan-500)');
    expect(screen.getByText(/for \$9.90 month/i)).toHaveStyle(
      'color: var(--cyan-500)'
    );
  });
});
