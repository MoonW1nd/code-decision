import React, { ReactNode } from "react";

import BackgroundImage from "../BackgroundImage";
import Logo from "../Logo";
import Text from "../../components/Text";

import styles from "./styles.module.scss";

type ScenePropsType = {
  children?: ReactNode;
};

const Scene = ({ children }: ScenePropsType): JSX.Element => (
  <div className={styles.root}>
    <React.Suspense fallback={() => "Loading..."}>
      <BackgroundImage className={styles.image} />
    </React.Suspense>

    <div className={styles.contentArea}>
      {children}

      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <Text as="span" size="xs" weight={600}>
            designed by
          </Text>
          <Logo className={styles.logo} />
        </div>
      </footer>
    </div>
  </div>
);

export default Scene;
