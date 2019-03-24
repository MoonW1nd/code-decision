// @flow

import React from 'react';
import styles from './App.module.scss';
import { Scene } from './components/Scene';
import { Text } from './components/Text';

const App = (): React$Node => (
  <div className={styles.App}>
    <Scene>
      <Text size="xxl">Тест</Text>
    </Scene>
  </div>
);

export default App;
