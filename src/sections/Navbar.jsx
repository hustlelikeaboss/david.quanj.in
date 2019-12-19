import React, { Component } from 'react';
import ImgLink from '../components/ImgLink';

import logo from '../images/logo.svg';
import artist from '../images/artist.svg';
import geek from '../images/geek.svg';
import hiker from '../images/hiker.svg';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollTop: 0, scrollY: 0 };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    this.setState({
      scrollY,
    });
  };

  render() {
    return (
      <div
        id="navbar"
        onScroll={this.onScroll}
        style={{
          top: this.state.scrollY > 300 ? '0' : '-80px',
          backgroundColor: this.state.scrollY > 300 ? '#b2acc7' : '#f2f2f2',
        }}
      >
        <div>
          <ImgLink to="/" src={logo} alt="logo" id="logo" />
        </div>
        <div id="menu--1">
          <ImgLink
            to="/#portfolio"
            src={artist}
            alt="designer"
            className="menu--1-item"
          />
          <ImgLink
            to="/#profile"
            src={geek}
            alt="developer"
            className="menu--1-item"
          />
          <ImgLink
            to="/#gallery"
            src={hiker}
            alt="photographer"
            className="menu--1-item"
          />
        </div>
        <div id="menu--2">=</div>
      </div>
    );
  }
}
