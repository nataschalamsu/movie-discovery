export const fetchDiscoverMovie = async (sortBy: string | null) => {
  const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=1b869b3ccf57d089047ded4b1de007b8&language=en-US&sort_by=${sortBy}`;
  const data = await (await fetch(endpoint)).json();

  return data.results;
};

export const fetchMovieGenres = async () => {
  const endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=1b869b3ccf57d089047ded4b1de007b8&language=en-US`;
  const data = await (await fetch(endpoint)).json();

  return data.genres;
};

export const fetchMovies = async (sortBy: string | null) => {
  const movies = await fetchDiscoverMovie(sortBy);
  const genres = await fetchMovieGenres();

  const result = movies.map((value: any) => ({
    title: value.title,
    poster: value.poster_path,
    description: value.overview,
    popularity: value.popularity,
    genre: genres
      .filter((val: any) => value.genre_ids.includes(val.id))
      .map((value: any) => value.name),
  }));

  return result;
}