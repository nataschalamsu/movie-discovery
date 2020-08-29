import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import 'moment-duration-format';
import { fetchMovieDetails } from '../../api/details';

type ProductionCompanies = {
  name: string;
}

type SpokenLanguages = {
  name: string;
}

type Genres = {
  name: string;
}

interface Movie {
  backdrop_path: string;
  genres: Genres[];
  homepage: string;
  id: number;
  overview: string;
  popularity: number;
  production_companies: ProductionCompanies[];
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  title: string;
  vote_average: number;
  vote_count: number;
};

const movieObj = {
  backdrop_path: '',
  genres: [],
  homepage: '',
  id: 0,
  overview: '',
  popularity: 0,
  production_companies: [],
  poster_path: '',
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  title: '',
  vote_average: 0,
  vote_count: 0,
};

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500';

const toCurrency = (amount: number) => {
  return '$' + amount.toString().replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, '$1,');
};

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>(movieObj);
  const [loading, setLoading] = useState(false);

  const movieDetails = async () => {
    setLoading(true);
    const results = await fetchMovieDetails(id);

    setMovie(results);
    setLoading(false);
  };

  useEffect(() => {
    movieDetails();
  }, []);

  if (loading) return <div>Loading...</div>;

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
  } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <span>{moment.duration(runtime, 'minutes').format("h [hours] m [minute]")}</span>
      <span>{release_date}</span>
      {genres.map((genre: any) => <span>{genre.name}</span>)}
      <span>{popularity}</span>
      <span>Vote Average: {vote_average}</span>
      <span>Vote Count: {vote_count}</span>
      <p>{toCurrency(revenue)}</p>
      {spoken_languages.map((lang: any) => <span>{lang.name}</span>)}
      <a href={homepage}>Go To Movie Homepage</a>
      <p>{overview}</p>
      <img src={`${IMAGE_BASE_URL}${poster_path}`} alt="movie-poster"/>
      <img src={`${IMAGE_BASE_URL}${backdrop_path}`} alt="movie-poster"/>
    </div>
  );
};

export default Details;