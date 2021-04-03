import React, { FC, ReactNode } from "react";
import cn from "classnames";

import type { IText } from "../interfaces";

import styles from "./styles.module.scss";

export const Text: IText = ({
  text,
  as = "p",
  children,
  size = "m",
  weight = 400,
}) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        styles.text,
        styles[`fontSize_${size}`],
        styles[`weight_${weight}`]
      )}
    >
      {text}

      {children}
    </Tag>
  );
};

export default Text;
