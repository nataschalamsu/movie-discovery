import { root } from './index';

const headerTitleSelector = '.header_title';
const popularityBtnSelector = '#popularity';
const releaseDateBtnSelector = '#release_date';
const voteCountBtnSelector = '#vote_count';
const movieCardSelector = '.movie_card';

export const getHeaderTitle = async () => {
  const app = await root();
  return await app.$eval(headerTitleSelector, el => el.innerText.toLowerCase());
};

export const getPopularityBtnValue = async () => {
  const app = await root();
  return await app.$eval(popularityBtnSelector, el => el.value);
};

export const getReleaseDateBtnValue = async () => {
  const app = await root();
  return await app.$eval(releaseDateBtnSelector, el => el.value);
};

export const getVoteCountBtnValue = async () => {
  const app = await root();
  return await app.$eval(voteCountBtnSelector, el => el.value);
};

export const clickPopularityBtn = async () => {
  await page.click(popularityBtnSelector);
  await page.waitForSelector(movieCardSelector);
};

export const clickReleaseDateBtn = async () => {
  await page.click(releaseDateBtnSelector);
  await page.waitForSelector(movieCardSelector);
};

export const clickVoteCountBtn = async () => {
  await page.click(voteCountBtnSelector);
  await page.waitForSelector(movieCardSelector);
};

export const clickMovieCard = async () => {
  await page.click(movieCardSelector);
};


