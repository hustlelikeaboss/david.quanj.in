import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import WithBg from '../components/WithBg';

import artist from '../images/artist.svg';
import geek from '../images/geek.svg';
import hiker from '../images/hiker.svg';
import '../styles/main.scss';

const IndexPage = () => (
  <WithBg>
    <SEO title="Home" />
    <main>
      <div className="flex-container--persona">
        <Link to="/">
          <img src={artist} alt="designer" className="persona--1" />
        </Link>
        <Link to="/">
          <img src={geek} alt="developer" className="persona--2" />
        </Link>
        <Link to="/">
          <img src={hiker} alt="photographer" className="persona--3" />
        </Link>
      </div>
    </main>
  </WithBg>
);

export default IndexPage;
