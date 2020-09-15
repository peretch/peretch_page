import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';

const Profile = ({ sectionName, nextSection }) => (
  <div id={sectionName} className="py-12 bg-peretch-1">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="lg:text-center">
        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
          About me
        </p>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Hi there!
        </h3>
        <div className="flex items-center justify-center">
          <div className="h-56 w-56 rounded-full bg-gray-200 m-2" />
        </div>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Hi!, my name is Sebastián, I'm a full stack developer from Montevideo,
          Uruguay. I work as a developer since 2017.
        </p>
      </div>
    </div>
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
  </div>
);

Profile.propTypes = {
  sectionName: PropTypes.string,
  nextSection: PropTypes.string,
};

export default Profile;
