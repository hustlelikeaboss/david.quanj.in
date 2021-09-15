import React from 'react';
import PropTypes from 'prop-types';

import bg from '../images/bg.svg';

const WithBg = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${bg}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
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
