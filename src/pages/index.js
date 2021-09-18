import React from 'react';
import Footer from '../components/Footer';
import Seo from '../components/seo';
import WithBg from '../components/WithBg';
import '../styles/main.scss';
import Splash from './section.splash';

const IndexPage = () => (
  <WithBg>
    <Seo title="Home" />
    <main>
      <Splash />
      {/* <Profile /> */}
    </main>
    <Footer />
  </WithBg>
);

export default IndexPage;
