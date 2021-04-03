import React from "react";
import type { IImage } from "../interfaces";

export const Image: IImage = ({ url, title, className }) => (
  <img className={className} src={url} title={title} alt={title} />
);

export default Image;
