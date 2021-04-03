import React, { ReactNode } from "react";

import styles from "./styles.module.scss";
import Text from "../Text";

type ScenePropsType = {
  gifUrl: string;
  children?: ReactNode;
};

const Scene = ({ gifUrl, children }: ScenePropsType): JSX.Element => (
  <div className={styles.root}>
    <img src={gifUrl} className={styles.image} alt="gif" />

    <div className={styles.contentArea}>
      <Text text="chooser" size="m" />

      {children}
    </div>
  </div>
);
// <Text text={text} size="xxl" />

export default Scene;
