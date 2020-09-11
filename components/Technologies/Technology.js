import React from 'react';
import PropTypes from 'prop-types';

const Technology = ({ name, bgImage, bgClasses }) => (
  <div className="justify-items-center text-center">
    <div
      className={`h-40 w-40 flex items-center justify-center text-white text-xl bg-contain bg-center bg-no-repeat
      } ${bgClasses}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <p className="text-yellow-500 text-lg sr-only">{name}</p>
  </div>
);

Technology.propTypes = {
  name: PropTypes.string,
  bgImage: PropTypes.string,
  bgClasses: PropTypes.string,
};

export default Technology;
