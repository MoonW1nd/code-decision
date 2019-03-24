// @flow
import { giphyClientSDK } from './index';
import type { ResponseType } from '../types';

export const getRandomGif = (): Promise<ResponseType> => giphyClientSDK.random('gifs', {});
