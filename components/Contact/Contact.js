import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Profile/Social';

const Contact = ({ sectionName, nextSection, bgImage }) => (
  <div id={sectionName} className="h-screen relative">
    <div
      className="h-auto lg:px-32 sm:px-24 py-24 text-white bg-contain bg-fixed bg-center align-middle"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <p className="italic text-3xl">
        “There is a driving force more powerful than steam, electricity and
        atomic energy: the will.”
      </p>
      <p className="text-xl text-right mt-4">Albert Einstein</p>
    </div>

    <div className="h-auto text-white lg:px-16 sm:px-10 py-10 grid grid-cols-2">
      <div className="grid-span-1">
        <h2 className="text-3xl mb-8 text-center">Contact me</h2>
        <div className="flex items-center">
          <form className="w-full px-4">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                </label>
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />
                </label>
                <p className="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                  />
                </label>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  State
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </label>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Zip
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder="90210"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-between mx-20 mt-8">
          <Social
            name="GitHub"
            externalLink="https://github.com/peretch"
            bgImage="/img/social/github.svg"
            bgClasses=""
          />
          <Social
            name="Linkedin"
            externalLink="https://www.linkedin.com/in/sebasti%C3%A1n-p%C3%A9rez-etchandy-98489612b/"
            bgImage="/img/social/linkedin.svg"
            bgClasses=""
          />
          <Social
            name="Stack Overflow"
            externalLink="https://stackoverflow.com/users/9301236/sebasti%c3%a1n-p%c3%a9rez"
            bgImage="/img/social/stackoverflow.svg"
            bgClasses="bg-white"
          />
          <Social
            name="sebastian@peretch.com"
            externalLink="sebastian@peretch.com"
            bgImage="/img/social/mail-with-circle.svg"
            bgClasses=""
          />
        </div>
      </div>
      <div className="grid-span-1 align-middle">
        <img
          className="h-full w-full p-32"
          src="img/peretch.svg"
          alt="Peretch"
        />
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  bgImage: PropTypes.string,
  sectionName: PropTypes.string,
  nextSection: PropTypes.string,
};

export default Contact;
