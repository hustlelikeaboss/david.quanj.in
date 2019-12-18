import React from 'react';
import PropTypes from 'prop-types';

import artist from '../images/artist.svg';
import geek from '../images/geek.svg';
import hiker from '../images/hiker.svg';
import ImgLink from '../components/ImgLink';

const Personas = () => {
  return (
    <section className="flex-container--persona">
      <ImgLink
        to="/#portfolio"
        src={artist}
        alt="designer"
        className="persona--1"
      />
      <ImgLink
        to="/#profile"
        src={geek}
        alt="developer"
        className="persona--2"
      />
      <ImgLink
        to="/#gallery"
        src={hiker}
        alt="photographer"
        className="persona--3"
      />
    </section>
  );
};

Personas.propTypes = {};

export default Personas;
