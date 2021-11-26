import { render, screen } from '@testing-library/react';
import { SubscribeButton } from './index';

describe('Components > SubscribeButton', () => {
  it('should render with SignIn button if user is not authenticated', () => {
    render(<SubscribeButton />);

    expect(screen.getByText(/subscribe now/i)).toBeInTheDocument();
  });
});
