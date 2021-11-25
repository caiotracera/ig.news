import LogoImg from '../../assets/images/logo.svg';

import { SignInButton } from '../SignInButton';

import { Container, Content, NavigationMenu } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="ig.news" />
        <NavigationMenu>
          <a className="active">Home</a>
          <a>Posts</a>
        </NavigationMenu>

        <SignInButton />
      </Content>
    </Container>
  );
}
