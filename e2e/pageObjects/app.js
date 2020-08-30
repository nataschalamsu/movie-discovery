import { root } from './index';

const headerTitleSelector = '.header_title';
const popularityBtnSelector = '#popularity';
const releaseDateBtnSelector = '#release_date';
const voteCountBtnSelector = '#vote_count';

export const getHeaderTitle = async () => {
  const app = await root();
  return await app.$eval(headerTitleSelector, el => el.innerText.toLowerCase());
};

export const clickPopularityBtn = async () => {
  return await page.click(popularityBtnSelector);
};
