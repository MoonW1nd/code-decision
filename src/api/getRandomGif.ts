import { giphyClientSDK } from "./index";
import type { RandomResponseType } from "../types";

export const getRandomGif = (): Promise<RandomResponseType> =>
  giphyClientSDK.random("gifs", {});
