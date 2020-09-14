import React from 'react';
import PropTypes from 'prop-types';

const About = ({ sectionName, nextSection }) => (
  <div
    id={sectionName}
    className="h-screen relative lg:px-16 sm:px-10 py-10 text-center"
  >
    <div className="grid grid-cols-2 py-20">
      <div className="grid-span-1 px-5">
        <div className="row-span-1 col-span-2 py-4">
          <img
            className="h-64 w-full "
            src="/img/undraw/undraw_relaunch_day_902d.svg"
            alt="Fly to your dreams"
          />
        </div>
        <div className="row-span-2 col-span-2 py-4">
          <p>Help us to grow</p>
        </div>
      </div>

      <div className="grid-span-1 px-5">
        <h1 className="text-4xl animate__animated animate__bounceInDown ">
          Title
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          mollitia id accusantium beatae consequuntur enim ut labore nisi
          exercitationem hic voluptatum reiciendis aspernatur eveniet nemo
          molestias asperiores, doloremque laborum debitis?
        </p>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 pb-32">
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

About.propTypes = {
  sectionName: PropTypes.string,
  nextSection: PropTypes.string,
};

export default About;
