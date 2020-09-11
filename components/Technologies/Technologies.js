import React from 'react';
import PropTypes from 'prop-types';

const Technologies = ({ bgImage }) => (
  <div
    id="technologies"
    className="h-screen relative w-full py-10 text-white bg-fixed bg-cover align-middle"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <h1 className="text-4xl text-white text-center mb-10">Technologies</h1>
    <div className="grid mt-20 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 justify-items-center h-auto bg-gray-900 py-32">
      <p className="grid-span-1">Laravel</p>
      <p className="grid-span-1">Reacti</p>
      <p className="grid-span-1">Express</p>
      <p className="grid-span-1">Mysql</p>
      <p className="grid-span-1">Postgress</p>
      <p className="grid-span-1">MongoDB</p>
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
