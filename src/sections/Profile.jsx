import React from 'react';
import PropTypes from 'prop-types';

import profile from '../images/profile.jpg';

const Profile = () => {
  return (
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
          <h6 className="card-subtitle">A Software Developer Who Can Design</h6>
          <h2 className="card-title">HELLO, I'M DAVID Q. JIN.</h2>
          <p className="card-body">
            I'm a T-shaped, user-centered, results-oriented full-stack software
            developer who writes clean, well tested code; is always learning and
            experimenting; enjoys working with a variety of languages,
            frameworks & cloud technologies in startup or enterprise
            environments; and has a passion for developing applications that
            solve business needs, delight end users & make a lasting impact.
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
  );
};

Profile.propTypes = {};

export default Profile;
