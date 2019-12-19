import React from 'react';

import SEO from '../components/seo';
import WithBg from '../components/WithBg';
import Footer from '../components/Footer';
import Personas from '../sections/Personas';
import Profile from '../sections/Profile';

import '../styles/main.scss';
import Navbar from '../sections/Navbar';

const IndexPage = () => (
  <WithBg>
    <SEO title="Home" />
    <Navbar />
    <main>
      <Personas />
      <Profile />
    </main>
    <Footer />
  </WithBg>
);

export default IndexPage;
