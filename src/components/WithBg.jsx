import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const WithBg = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "bg.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <div
      style={{
        backgroundImage: `url("${data.img.publicURL}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  );
};

WithBg.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithBg;
