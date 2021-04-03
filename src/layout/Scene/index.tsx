import React, { ReactNode } from "react";

import styles from "./styles.module.scss";
import BackgroundImage from "../BackgroundImage";

type ScenePropsType = {
  children?: ReactNode;
};

const Scene = ({ children }: ScenePropsType): JSX.Element => (
  <div className={styles.root}>
    <React.Suspense fallback={() => "Loading..."}>
      <BackgroundImage className={styles.image} />
    </React.Suspense>

    <div className={styles.contentArea}>{children}</div>
  </div>
);

export default Scene;
