// @flow
import React from 'react';
import styles from './styles.module.scss';

type TextSizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

type TextPropsType = {
  text?: string,
  size: TextSizeType,
  children?: React$Node
};

export const Text = ({ text, children, size }: TextPropsType): React$Node => (
  <div>
    <div className={`${styles.text} ${styles[`fontSize_${size}`]}`}>
      {text}
      {children}
    </div>
  </div>
);

Text.defaultProps = {
  children: '',
  text: '',
};


export default Text;
