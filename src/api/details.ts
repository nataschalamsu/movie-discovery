export const fetchMovieDetails = async (id: string) => {
  const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=1b869b3ccf57d089047ded4b1de007b8&language=en-US`;

  const results = await (await fetch(endpoint)).json();
  const {
    backdrop_path,
    genres,
    homepage,
    overview,
    popularity,
    production_companies,
    poster_path,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    title,
    vote_average,
    vote_count,
  } = results;



  return {
    backdrop_path,
    genres: results.genres.map((genre: any) => genre.name),
    homepage,
    overview,
    popularity,
    production_companies: results.production_companies.map((comp: any) => comp.name),
    poster_path,
    release_date,
    revenue,
    runtime,
    spoken_languages: results.spoken_languages.map((lang: any) => lang.name),
    title,
    vote_average,
    vote_count,
  };
};