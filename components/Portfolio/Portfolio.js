import React from 'react';

import Project from './Project';

const Portfolio = () => (
  <div
    id="portfolio"
    className="min-h-screen max-h-full relative lg:px-16 sm:px-10 py-10 bg-peretch-1 fill-current bg-black"
  >
    <h1 className="text-4xl text-gray-900 text-center mb-10">Portfolio</h1>
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center">
      <Project
        title="Facturation System"
        bgImage="/img/projects/facturation_system.png"
        bgClasses="bg-green-900 object-contain"
        tags={['#laravel', '#jquery', '#mysql']}
        description={
          <>
            This is a facturation system, developed with Laravel 5.6 and MySql
            5.7. It was made in 2017 and was uploaded free to{' '}
            <a
              className="text-blue-500"
              href="https://github.com/peretch/facturacion"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            in 2020.
          </>
        }
      />
      <Project
        title="Space Runner"
        bgImage="/img/projects/space_runner.webp"
        bgClasses="object-contain bg-black"
        tags={['#unity3D', '#C#']}
        description={
          <>
            This game was released in 2014. This is one of my first projects
            related to programming. Find out more in{' '}
            <a
              className="text-blue-500"
              href="https://play.google.com/store/apps/details?id=com.SebastianPerezEtchandy.games.SpaceRunner&hl=es_UY"
              target="_blank"
              rel="noreferrer"
            >
              Google Play Store
            </a>
          </>
        }
      />
      <Project
        title="Other repositories"
        bgImage="/img/peretch.svg"
        bgClasses="bg-black"
        tags={['#Laravel', '#React', '#Express', '#NEXTjs']}
        description={
          <>
            This is a facturation system, developed with Laravel 5.6 and MySql
            5.7. It was made in 2017 and was uploaded free to{' '}
            <a
              className="text-blue-500"
              href="https://github.com/peretch/facturacion"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            in 2020.
          </>
        }
      />
      <Project
        title="And there is more comming soon..."
        bgImage="/img/undraw/undraw_developer_activity_bv83.svg"
        bgClasses="bg-blue-300"
        tags={['#dreaming', '#coding', '#neveGiveUp']}
        description={<></>}
      />
    </div>
    <div className="absolute inset-x-0 bottom-0 pb-10">
      <a href="#partners">
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
  </div>
);

export default Portfolio;
