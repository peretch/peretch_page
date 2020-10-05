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
    </Head>
    <Component {...pageProps} />
  </Store>
);

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

Store.propTypes = {
  children: PropTypes.array,
};

export default App;
