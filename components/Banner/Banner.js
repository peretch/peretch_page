import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

const Banner = ({ sectionName, nextSection }) => (
  <div
    id={sectionName}
    className="lg:h-screen sm:h-auto relative text-center grid sm:grid-cols-2 pb-20 pt-20 sm:pt-30 lg:pt-40"
  >
    <div className="hidden sm:col-span-1 sm:visible sm:flex justify-center h-64">
      <img className="w-full lg:w-3/4" src="/img/peretch.svg" alt="Peretch" />
    </div>
    <div className="sm:col-span-1 flex justify-center">
      <p className="text-2xl lg:text-4xl sm:text-3xl font-thin">
        <p className="w-full">
          <span className="text-xl sm:text-2xl lg:text-3xl italic">
            Hard work{' '}
          </span>
          <span className="text-green-400 text-4xl sm:text-5xl lg:text-6xl  font-semibold">
            Passion{' '}
          </span>
          <span className="text-lg sm:text-xl lg:text-2xl">Study</span>
        </p>
        <p className="w-full">
          <span className="text-purple-400 lg:text-5xl sm:text-2xl">
            Compromise{' '}
          </span>
          <span>solidarity</span>
        </p>
        <p className="w-full">
          <span className="text-red-400 lg:text-6xl sm:text-xl  ">Love</span>
          <span className=" font-serif font-thin italic text-4xl">
            Big Dreams
          </span>
        </p>
        <p className="w-full text-orange-400 lg:text-5xl sm:text-2xl">
          Professionalism
        </p>
        <p className="w-full text-blue-400 lg:text-6xl sm:text-2xl">Fun!</p>
      </p>
    </div>
    <div className="invisible lg:visible absolute inset-x-0 bottom-0 pb-32">
      <a href={`#${nextSection}`}>
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

Banner.propTypes = {
  sectionName: PropTypes.string,
  nextSection: PropTypes.string,
};

export default Banner;
