export type ResponseMetaType = {
  status: number;
  msg: string;
  response_id: string;
};

export type ResponseUserType = {
  username: string;
};

export type ResponseImageDataType = {
  frames: string;
  url: string;
  mp4: string;
  height: string;
  width: string;
};

export type ResponseImagesType = {
  fixed_height_downsampled: ResponseImageDataType;
  fixed_height_small: ResponseImageDataType;
  fixed_width_downsampled: ResponseImageDataType;
  fixed_width_small: ResponseImageDataType;
  fixed_width_small_still: ResponseImageDataType;
  original: ResponseImageDataType;
  id: string;
};

export type ResponseDataType = {
  images: ResponseImagesType;
  type: string;
  url: string;
  user: ResponseUserType;
};

export type ResponseType = {
  data: ResponseDataType[];
  meta: ResponseMetaType;
};

export type RandomResponseType = {
  data: ResponseDataType;
  meta: ResponseMetaType;
};
