import React from 'react';
import GphApiClient from 'giphy-js-sdk-core';
import logo from './logo.svg';
import styles from './App.module.scss';

const giphyClientSDK = GphApiClient(process.env.REACT_APP_GIPHY_API_KEY);
giphyClientSDK.random('gifs', {})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

const App = () => (
  <div className={styles.App}>
    <header className={styles['App-header']}>
      <img src={logo} className={styles['App-logo']} alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <a className={styles['App-link']} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
      </a>
    </header>
  </div>
);

export default App;
