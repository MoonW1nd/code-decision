import { FC, ReactNode } from "react";

type TextSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";

type Props = {
  text?: string;
  as?: "p" | "span";
  size: TextSize;
  children?: ReactNode;
};

export type IText = FC<Props>;
