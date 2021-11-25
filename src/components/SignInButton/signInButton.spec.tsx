import { render, screen } from '@testing-library/react';
import { SignInButton } from './index';

describe('Components > SignInButton', () => {
  it('should render with SignIn button if user is not authenticated', () => {
    render(<SignInButton />);

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  });
});
