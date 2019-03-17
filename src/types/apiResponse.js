// @flow

export type ResponseMetaType = {
  status: number,
  msg: string,
  response_id: string
};

export type ResponseUserType = {
  username: string
};

export type ResponseImageDataType = {
  gif_url: string,
  height: string,
  width: string
};

export type ResponseOriginalDataType = {
  frames: string,
  gif_url: string,
  mp4: string,
  height: string,
  width: string
};

export type ResponseImagesType = {
  fixed_height_downsampled: ResponseImageDataType,
  fixed_height_small: ResponseImageDataType,
  fixed_width_downsampled: ResponseImageDataType,
  fixed_width_small: ResponseImageDataType,
  fixed_width_small_still: ResponseImageDataType,
  id: string,
  original: {}
};

export type ResponseDataType = {
  images: number,
  type: string,
  url: string,
  user: ResponseUserType
};

export type ResponseType = {
  data: ResponseDataType,
  meta: ResponseMetaType
};
