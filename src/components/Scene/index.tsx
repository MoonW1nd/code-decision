import React, { ReactNode } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.scss";
import type { StateType } from "../../types";
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

function mapStateToProps({ app }: StateType): ScenePropsType {
  return { gifUrl: app.currentGifUrl, text: app.currentAnswer };
}

const connectedScene = connect(mapStateToProps)(Scene);

export default connectedScene;
export { connectedScene as Scene };
