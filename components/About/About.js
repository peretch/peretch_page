import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';

const About = ({ sectionName, nextSection }) => (
  <div id={sectionName} className="py-12 bg-peretch-1">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="text-xl leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          About
        </p>
        <div className="mt-8 flex items-center justify-center">
          <div
            className="h-56 w-56 rounded-full bg-gray-200 m-2 justify-center bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(/img/seba.jpeg)` }}
          />
        </div>
        <h3 className="text-2xl font-medium leading-8 text-blue-900 sm:leading-10">
          Sebastián Pérez Etchandy
        </h3>
        <h4 className="text-lg font-normal leading-8 text-gray-600">
          Founder of <span className="font-extrabold">Peretch</span>
        </h4>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto italic">
          <span className="font-bold text-red-700">Hi there!</span>, my name is
          Sebastián, and I'm the founder of Peretch. I live in Montevideo,
          Uruguay, and I work as a developer since 2017. However you got here,
          welcome aboard!! We are here to provide you with quality technology
          solutions. Always working with professionalism and respect.
        </p>
      </div>
    </div>
    {/* <div className="pt-12">
      <a href={`#${nextSection}`}>
        <svg
          className="animate-bounce text-gray-900 h-12 w-full"
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
    </div> */}
  </div>
);

About.propTypes = {
  sectionName: PropTypes.string,
  nextSection: PropTypes.string,
};

export default About;
