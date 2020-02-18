import React from 'react';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

import '../styles/main.scss';

export default function Footer() {
  return (
    <footer className="flex-container--justified">
      <p>
        &copy; {new Date().getFullYear()}, Brewed with
        ❤️ and a pinch of sarcasm
      </p>
      <p>
        <a
          href="https://github.com/hustlelikeaboss"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <img src={github} alt="GitHub logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/davidqjin/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <img src={linkedin} alt="LinkedIn logo" />
        </a>
      </p>
    </footer>
  );
}
