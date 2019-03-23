// @flow
import React from 'react';
import styles from './styles.module.scss';

type TextPropsType = {
  text: string
};

export const Text = ({ text }: TextPropsType): React$Node => (
  <p className={styles.text}>
    {text}
  </p>
);

export default Text;
