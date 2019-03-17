// @flow

import React from 'react';
import GphApiClient from 'giphy-js-sdk-core';
import styles from './App.module.scss';
import { Scene } from './components/Scene';

const giphyClientSDK = GphApiClient(process.env.REACT_APP_GIPHY_API_KEY);
giphyClientSDK.random('gifs', {})
  .then((response: {}) => {
    console.log(response);
  })
  .catch((err: {}) => {
    console.log(err);
  });

const App = (): React$Node => (
  <div className={styles.App}>
    <Scene />
  </div>
);

export default App;
