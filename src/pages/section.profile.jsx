import React from 'react';
import profile from '../images/profile.jpg';
import '../styles/main.scss';

const Profile = () => (
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
          A T-shaped, user-centered, detail-oriented full-stack software
          developer who writes clean, well- tested code; is always learning and
          experimenting; enjoys working with a variety of languages, frameworks,
          and cloud technologies in agile teams; has a passion for developing
          applications that exceed business expectations, delight end users, and
          make a lasting impact; and takes great pleasure in mentoring and
          helping people grow.
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

export default Profile;
