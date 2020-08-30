import { root } from './index';

const movieHomepageSelector = '.movie_homepage';
const movieTitleSelector = '.title';
const backToHomeSelector = '.back_home';

export const load = async () => {
  await page.goto(`${URL}/movie/605116`, {
    waitUntil: "networkidle0",
    timeout: 60000
  });
};

export const getHeaderTitle = async () => {
  const app = await root();
  return await app.$eval(movieTitleSelector, el => el.innerText.toLowerCase());
};

export const clickLink = async () => {
  return await page.click(movieHomepageSelector);
};

export const clickBackToHome = async () => {
  return await page.click(backToHomeSelector);
};