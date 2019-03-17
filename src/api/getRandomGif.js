// @flow
import { giphyClientSDK } from './index';

export const getRandomGif = (): Promise<{}> => giphyClientSDK.random('gifs', {})
  .then((response: {}): {} => response);
