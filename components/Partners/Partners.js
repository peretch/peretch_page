import React from 'react';

const Partners = () => (
  <div
    id="partners"
    className="h-screen relative text-white lg:px-16 sm:px-10 py-10 bg-white bg-peretch-3"
  >
    <h1 className="text-4xl text-center mb-10">Partners</h1>
    <p>
      Along my years working in the inustry, I have met many differents
      professionals who I consider as partners and friends. Together, we make up
      a multidisciplinary team capable of solving any technological problem that
      comes our way.
    </p>
    <div className="absolute text-white inset-x-0 bottom-0 pb-10">
      <a href="#technologies">
        <svg
          className="animate-bounce text-yellow-600 h-12 w-full"
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

export default Partners;
