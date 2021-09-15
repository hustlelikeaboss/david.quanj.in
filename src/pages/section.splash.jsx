import { Link } from 'gatsby';
import React from 'react';
import artist from '../images/artist.svg';
import geek from '../images/geek.svg';
import hiker from '../images/hiker.svg';
import '../styles/main.scss';

const Splash = () => (
  <section className="flex-container--persona">
    {/* <Link to="/#portfolio" className="no-underline">
          <img src={artist} alt="designer" className="persona--1" />
        </Link> */}
    <a
      href="https://www.hustlelikeaboss.design/"
      className="no-underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={artist} alt="designer" className="persona--1" />
    </a>
    <Link to="/#profile" className="no-underline">
      <img src={geek} alt="developer" className="persona--2" />
    </Link>
    {/* <Link to="/#gallery" className="no-underline">
          <img src={hiker} alt="photographer" className="persona--3" />
        </Link> */}
    <a
      href="https://vimeo.com/choicejadephotography"
      className="no-underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={hiker} alt="photographer" className="persona--3" />
    </a>
  </section>
);

export default Splash;
