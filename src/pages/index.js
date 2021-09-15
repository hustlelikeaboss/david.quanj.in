import React from 'react';
import Footer from '../components/Footer';
import SEO from '../components/seo';
import WithBg from '../components/WithBg';
import '../styles/main.scss';
import Profile from './section.profile';
import Splash from './section.splash';

const IndexPage = () => (
  <WithBg>
    <SEO title="Home" />
    <main>
      <Splash />
      {/* <Profile /> */}
    </main>
    <Footer />
  </WithBg>
);

export default IndexPage;
