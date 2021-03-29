import React from "react";
import styles from "./App.module.scss";
import Scene from "./containers/Scene";

const App = (): JSX.Element => (
  <div className={styles.App}>
    <Scene />
  </div>
);

export default App;
