import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import WithBg from '../components/WithBg';
import Footer from '../components/Footer';

import artist from '../images/artist.svg';
import geek from '../images/geek.svg';
import hiker from '../images/hiker.svg';
import profile from '../images/profile.jpg'
import '../styles/main.scss';

const IndexPage = () => (
  <WithBg>
    <SEO title="Home" />
    <main>
      <section className="flex-container--persona">
        <Link to="/#portfolio" className="no-underline">
          <img src={artist} alt="designer" className="persona--1" />
        </Link>
        <Link to="/#profile" className="no-underline">
          <img src={geek} alt="developer" className="persona--2" />
        </Link>
        <Link to="/#gallery" className="no-underline">
          <img src={hiker} alt="photographer" className="persona--3" />
        </Link>
      </section>

      <section id="profile">
        <div className="card flex-container--profile">
          <div
            className="left"
            style={{
              backgroundImage: `url("${profile}")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className="right">
            <h6 className="card-subtitle">
              A Software Developer Who Can Design
            </h6>
            <h2 className="card-title">HELLO, I'M DAVID Q. JIN.</h2>
            <p className="card-body">
              I'm a T-shaped, user-centered, results-oriented full-stack
              software developer who writes clean, well tested code; is always
              learning and experimenting; enjoys working with a variety of
              languages, frameworks & cloud technologies in startup or
              enterprise environments; and has a passion for developing applications
              that solve business needs, delight end users & make a lasting
              impact.
            </p>
            <p className="card-footer">
              <a
                href="https://docs.google.com/document/d/1Ol_8gYAl9e_4q0kzXDbl99qdayzZphr4Kokyj5WRqvA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Resume
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </WithBg>
);

export default IndexPage;
