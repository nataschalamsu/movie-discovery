export const fetchMovieDetails = async (id: string) => {
  const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=1b869b3ccf57d089047ded4b1de007b8&language=en-US`;

  const results = await (await fetch(endpoint)).json();
  console.log(results);

  return results;
};