import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import '../styles/main.scss';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="flex-container--persona">
      <Link to="/">
        <img
          src="https://via.placeholder.com/250/38d39f?text=DESIGNER"
          alt="designer"
          className="persona--1"
        />
      </Link>
      <Link to="/">
        <img
          src="https://via.placeholder.com/250/92c952?text=DEVELOPER"
          alt="developer"
          className="persona--2"
        />
      </Link>
      <Link to="/">
        <img
          src="https://via.placeholder.com/250/6c63ff?text=PHOTOGRAPHER"
          alt="photographer"
          className="persona--3"
        />
      </Link>
    </div>
  </div>
);

export default IndexPage;
