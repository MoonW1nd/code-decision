import React, { FC, ReactNode } from "react";
import type { IText } from "../interfaces";
import styles from "./styles.module.scss";

export const Text: IText = ({ text, as = "p", children, size }) => {
  const Tag = as;

  return (
    <Tag className={`${styles.text} ${styles[`fontSize_${size}`]}`}>
      {text}

      {children}
    </Tag>
  );
};

export default Text;
