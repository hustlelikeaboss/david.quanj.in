import React from 'react';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import user from '../images/user-secret-solid.svg';
import '../styles/main.scss';

export default function Footer() {
  return (
    <footer className="flex-container--justified">
      <p>
        &copy; {new Date().getFullYear()}, Brewed with ❤️ and a pinch of sarcasm
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
        <a
          href="https://drive.google.com/file/d/1tulJ1VANkbgO8FngmNRcHklWrxpKZaxZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <img src={user} alt="Resume logo" />
        </a>
      </p>
    </footer>
  );
}
