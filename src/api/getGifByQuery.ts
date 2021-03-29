import { giphyClientSDK } from "./index";
import type { ResponseType } from "../types";

export const getGifByQuery = (query: string): Promise<ResponseType> =>
  giphyClientSDK.search("gifs", { q: query });
