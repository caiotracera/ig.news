import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

export function SignInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <Container>
      <FaGithub color="#04d361" />
      Caio Tracera
      <FiX color="#737380" className="closeIcon" />
    </Container>
  ) : (
    <Container>
      <FaGithub color="var(--yellow-500)" />
      Sign in with Github
    </Container>
  );
}
