import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import 'moment-duration-format';
import { fetchMovieDetails } from '../../api/details';
import './Details.styles.css';
import { IMAGE_BASE_URL, toCurrency } from '../utils';

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

const detailsContainerStyle = (backdrop: string) => (
  {
    backgroundImage: `url(${IMAGE_BASE_URL}/original${backdrop})`,
  }
);

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
    <div className="details_container" style={detailsContainerStyle(backdrop_path)}>
      <div className="movie_details">
        <Link to="/">← Back to Home</Link>
        <a href={homepage}><h1>{title}</h1></a>
        <img src={`${IMAGE_BASE_URL}/w500${poster_path}`} alt="movie-poster" className="movie_poster"/>
        <h3>Movie Info</h3> 
        <p className="overview">{overview}</p>
        <div className="details">
          <span>Duration: {moment.duration(runtime, 'minutes').format("h [hours] m [minute]")}</span>
          <span>Release Date: {release_date}</span>
          <span>Genres: {genres.join(', ')}</span>
          <span>Revenue: {toCurrency(revenue)}</span>
          <span>Languages: {spoken_languages.join(', ')}</span>
          <span>Production: {production_companies.join(', ')}</span>
          <span>Popularity: {popularity}</span>
          <span>Vote Average: {vote_average}</span>
          <span>Vote Count: {vote_count}</span>
        </div>
      </div>
      <footer>2020</footer>
    </div>
  );
};

export default Details;