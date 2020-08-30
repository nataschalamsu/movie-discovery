export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p';

export const toCurrency = (amount: number) => {
  return '$' + amount.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,');
};

export const truncateString = (str: string) => {
  if (str.length <= 150) {
    return str;
  }
  return str.slice(0, 150) + '...';
}