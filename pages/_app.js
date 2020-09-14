/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';

import PropTypes from 'prop-types';

import Store from '../store/Store';

const App = ({ Component, pageProps }) => (
  <Store>
    <Head>
      <title>Peretch</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="css/tailwind.css" rel="stylesheet" />
      <link rel="stylesheet" href="css/owlcarousel/dist/owl.carousel.min.js" />
      <link
        rel="stylesheet"
        href="css/owlcarousel/dist/assets/owl.theme.default.min.css"
      />
    </Head>
    <Component {...pageProps} />
  </Store>
);

App.propTypes = {
  Component: PropTypes.object,
  pageProps: PropTypes.object,
};

export default App;
