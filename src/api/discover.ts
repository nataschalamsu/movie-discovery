export const fetchDiscoverMovie = async (sortBy: string | null, startDate: string | null, endDate: string | null) => {
  const baseEndpoint = `https://api.themoviedb.org/3/discover/movie?api_key=1b869b3ccf57d089047ded4b1de007b8&language=en-US&sort_by=${sortBy}`;
  const endpoint = startDate || endDate
    ? `${baseEndpoint}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`
    : baseEndpoint;
  console.log(endpoint);
  const data = await (await fetch(endpoint)).json();

  return data.results;
};

export const fetchMovieGenres = async () => {
  const endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=1b869b3ccf57d089047ded4b1de007b8&language=en-US`;
  const data = await (await fetch(endpoint)).json();

  return data.genres;
};

export const fetchMovies = async (sortBy: string | null, startDate: string | null, endDate: string | null) => {
  const movies = await fetchDiscoverMovie(sortBy, startDate, endDate);
  const genres = await fetchMovieGenres();

  const results = movies.map((value: any) => ({
    title: value.title,
    poster: value.poster_path,
    description: value.overview,
    popularity: value.popularity,
    genre: genres
      .filter((val: any) => value.genre_ids.includes(val.id))
      .map((value: any) => value.name),
  }));

  return results;
};