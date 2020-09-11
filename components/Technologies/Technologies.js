import React from 'react';
import PropTypes from 'prop-types';

import Technology from './Technology';

const Technologies = ({ bgImage }) => (
  <div
    id="technologies"
    className="min-h-screen max-h-full relative w-full py-10 text-white bg-fixed bg-cover align-middle"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <h1 className="text-4xl text-white text-center mb-10">Main technologies</h1>
    <div className="grid mt-20 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-items-center h-auto bg-gray-900 py-32 bg-opacity-75">
      <div className="grid-span-1">
        <Technology name="Laravel" bgImage="/img/technologies/laravel.png" />
      </div>
      <div className="grid-span-1">
        <Technology name="React" bgImage="/img/technologies/react.png" />
      </div>
      <div className="grid-span-1">
        <Technology name="MySQL" bgImage="/img/technologies/mysql.png" />
      </div>
      <div className="grid-span-1">
        <Technology
          name="Node JS"
          bgImage="/img/technologies/node.svg"
          bgClasses=""
        />
      </div>
      <div className="grid-span-1">
        <Technology
          name="October CMS"
          bgImage="/img/technologies/octobercms.png"
        />
      </div>
      <div className="grid-span-1">
        <Technology name="Docker" bgImage="/img/technologies/docker.png" />
      </div>
    </div>
    <div className="absolute text-white inset-x-0 bottom-0 pb-10">
      <a href="#contact">
        <svg
          className="animate-bounce text-white h-12 w-full"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </div>
);

Technologies.propTypes = {
  bgImage: PropTypes.string,
};

export default Technologies;
