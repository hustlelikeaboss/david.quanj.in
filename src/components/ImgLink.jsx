import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ImgLink = ({ to, src, alt, ...rest }) => {
  return (
    <Link to={to} className="no-underline">
      <img src={src} alt={alt} {...rest} />
    </Link>
  );
};

ImgLink.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  rest: PropTypes.array,
};
export default ImgLink;
