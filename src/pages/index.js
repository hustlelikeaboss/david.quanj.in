import React from 'react';

import SEO from '../components/seo';
import WithBg from '../components/WithBg';
import Footer from '../components/Footer';
import Personas from '../sections/Personas';
import Profile from '../sections/Profile';
import { Gallery } from '../sections/Gallery';

import '../styles/main.scss';

const IndexPage = () => (
  <WithBg>
    <SEO title="Home" />
    <main>
      <Personas />
      <Profile />
      <Gallery />
    </main>
    <Footer />
  </WithBg>
);

export default IndexPage;
