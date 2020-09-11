import React from 'react';
import PropTypes from 'prop-types';

const NavbarLink = ({ href, text }) => (
  <a
    href={href}
    className="block mt-4 md:inline-block md:mt-0 text-gray-100 hover:text-white mr-4"
  >
    {text}
  </a>
);

NavbarLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default NavbarLink;
