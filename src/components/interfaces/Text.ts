import { FC, ReactNode } from "react";

type TextSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";

type TextWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Props = {
  text?: string;
  as?: "p" | "span";
  size?: TextSize;
  weight?: TextWeight;
  children?: ReactNode;
};

export type IText = FC<Props>;
