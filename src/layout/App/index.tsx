import React from "react";
import AnswerText from "../AnswerText";
import Scene from "../Scene";

import styles from "./styles.module.scss";

const App = (): JSX.Element => (
  <div className={styles.App}>
    <Scene>
      <AnswerText />
    </Scene>
  </div>
);

export default App;
