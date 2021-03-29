import React, { ReactNode } from "react";

import styles from "./styles.module.scss";
import Text from "../Text";

type ScenePropsType = {
  gifUrl: string;
  text: string;
  children?: ReactNode;
};

const Scene = ({ gifUrl, text }: ScenePropsType): JSX.Element => (
  <div className={styles.root}>
    <img src={gifUrl} className={styles.image} alt="gif" />

    <div className={styles.contentArea}>
      <Text text={text} size="xxl" />
    </div>
  </div>
);

Scene.defaultProps = {
  children: "",
};

export default Scene;
