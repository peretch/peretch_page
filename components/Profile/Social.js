import React from 'react';
import PropTypes from 'prop-types';

const Social = ({ name, bgImage, bgClasses, externalLink }) => (
  <div
    className={`rounded-full h-12 w-12 flex items-center justify-center bg-no-repeat bg-contain bg-center ${bgClasses}`}
    title={name}
    style={{ backgroundImage: `url(${bgImage})` }}
  />
);

Social.propTypes = {
  name: PropTypes.string,
  bgImage: PropTypes.string,
  bgClasses: PropTypes.string,
  externalLink: PropTypes.string,
};

export default Social;
