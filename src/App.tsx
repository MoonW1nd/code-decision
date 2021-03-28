import React from "react";
import styles from "./App.module.scss";
import { Scene } from "./components/Scene";
import AnswerText from "./containers/AnswerText";

const App = (): JSX.Element => (
  <div className={styles.App}>
    <Scene>
      <AnswerText />
    </Scene>
  </div>
);

export default App;
