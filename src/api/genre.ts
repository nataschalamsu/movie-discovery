export const fetchMovieGenres = async () => {
  const endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=1b869b3ccf57d089047ded4b1de007b8&language=en-US`;
  const data = await (await fetch(endpoint)).json();

  return data;
};