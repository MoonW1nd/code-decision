// @flow
import GphApiClient from 'giphy-js-sdk-core';

export const giphyClientSDK = GphApiClient(process.env.REACT_APP_GIPHY_API_KEY);

export * from './getRandomGif';
