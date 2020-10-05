import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { countries } from '../../config/countries';

const Contact = ({ sectionName, nextSection, bgImage }) => {
  const [contactName, setContactName] = useState({ value: false, error: '' });
  const [contactEmail, setContactEmail] = useState({ value: false, error: '' });
  const [contactCountry, setContactCountry] = useState({
    value: false,
    error: '',
  });
  const [contactNumber, setContactNumber] = useState({
    value: false,
    error: '',
  });
  const [contactMessage, setContactMessage] = useState({
    value: false,
    error: '',
  });
  return (
    <div id={sectionName} className="h-screen relative bg-gray-900">
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

      <div className="h-auto text-white lg:px-16 sm:px-10 py-10 flex justify-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl mb-8 text-center">Contact me</h2>
          <div className="flex items-center">
            <form className="w-full px-4">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Full name
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        contactName.value === ''
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
                      id="grid-first-name"
                      type="text"
                      placeholder="Taylor Otwell"
                      onChange={event =>
                        setContactName({
                          ...contactName,
                          value: event.target.value,
                        })
                      }
                    />
                  </label>
                  <p className="text-red-500 text-xs italic h-6">
                    {contactName.error}
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Email
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        contactEmail.value === ''
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                      id="grid-last-name"
                      type="email"
                      placeholder="Hello@peretch.com"
                      onChange={event =>
                        setContactEmail({
                          ...contactEmail,
                          value: event.target.value,
                        })
                      }
                    />
                  </label>
                  <p className="text-red-500 text-xs italic h-6">
                    {contactEmail.error}
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Country
                    <select
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        contactCountry.value === ''
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
                      id="grid-first-name"
                      type="text"
                      placeholder="Taylor"
                      onChange={event =>
                        setContactCountry({
                          ...contactCountry,
                          value: event.target.value,
                        })
                      }
                    >
                      {countries.map(country => (
                        <option value={country.name}>{country.name}</option>
                      ))}
                    </select>
                  </label>
                  <p className="text-red-500 text-xs italic h-6">
                    {contactCountry.error}
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Phone number
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        contactNumber.value === ''
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                      id="grid-last-name"
                      type="text"
                      placeholder="+598 099123456"
                      onChange={event =>
                        setContactNumber({
                          ...contactNumber,
                          value: event.target.value,
                        })
                      }
                    />
                  </label>
                  <p className="text-red-500 text-xs italic h-6">
                    {contactNumber.error}
                  </p>
                </div>
                <div className="w-full md:w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Message
                    <textarea
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        contactMessage.value === ''
                          ? 'border-red-500'
                          : 'border-gray-200'
                      } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                      id="grid-last-name"
                      type="textarea"
                      placeholder="Hi!, I'm interested in work with you in my new page."
                      onChange={event =>
                        setContactMessage({
                          ...contactMessage,
                          value: event.target.value,
                        })
                      }
                      rows="4"
                    />
                  </label>
                  <p className="text-red-500 text-xs italic h-6">
                    {contactMessage.error}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-center mx-4 pt-4">
            <button
              type="submit"
              tabIndex="0"
              onKeyPress=""
              className="w-3/4 py-2 bg-blue-700 text-white text-xl rounded-full"
            >
              Send message
            </button>
          </div>
        </div>
        {/* <div className="grid-span-1 align-middle">
        <img
          className="h-full w-full p-32"
          src="img/peretch.svg"
          alt="Peretch"
        />
      </div> */}
      </div>
    </div>
  );
};

Contact.propTypes = {
  bgImage: PropTypes.string,
  sectionName: PropTypes.string,
  nextSection: PropTypes.string,
};

export default Contact;
