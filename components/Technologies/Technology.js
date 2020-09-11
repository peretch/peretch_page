import React from 'react';
import PropTypes from 'prop-types';

const Technology = ({ name, bgImage, bgClasses }) => (
  <div className="justify-items-center text-center">
    <div
      className={`h-40 w-40 bg-contain bg-center bg-no-repeat
      } ${bgClasses}`}
      style={{ backgroundImage: `url(${bgImage})` }}
      title={name}
    />
    <p className="text-gray-200 text-lg">{name}</p>
  </div>
);

Technology.propTypes = {
  name: PropTypes.string,
  bgImage: PropTypes.string,
  bgClasses: PropTypes.string,
};

export default Technology;
