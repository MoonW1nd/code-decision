// @flow

import React from 'react';
import styles from './App.module.scss';
import { Scene } from './components/Scene';

const App = (): React$Node => (
  <div className={styles.App}>
    <Scene />
  </div>
);

export default App;
