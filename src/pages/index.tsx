import type { NextPage } from 'next';
import Head from 'next/head';

import avatarImg from '../assets/images/avatar.svg';

import { Header } from '../components/Header';
import { SubscribeButton } from '../components/SubscribeButton';

import { Container, Hero } from '../styles/pages/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <Header />

      <Container>
        <Hero>
          <span>👋 Hey, welcome</span>
          <h1>
            News about
            <br /> the <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </Hero>

        <img src={avatarImg} alt="Girl coding" />
      </Container>
    </>
  );
};

export default Home;
