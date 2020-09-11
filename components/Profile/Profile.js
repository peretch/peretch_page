import React from 'react';
import Social from './Social';

const Profile = () => (
  <div
    id="profile"
    className="min-h-screen max-h-full relative lg:px-16 sm:px-10 py-10 fill-current bg-peretch-2 text-white"
  >
    <h1 className="text-4xl text-center mb-10">Profile</h1>
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
    <div className="absolute inset-x-0 bottom-0 pb-12">
      <a href="#portfolio">
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

export default Profile;
