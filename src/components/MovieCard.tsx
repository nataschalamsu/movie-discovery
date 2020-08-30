import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL, truncateString} from '../pages/utils';
import posterPlaceholder from '../assets/image-placeholder/movie_poster_placeholder.jpg';

type MovieCardProps = {
  id: string;
  poster: string;
  title: string;
  genre: string[];
  popularity: number;
  description: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ id, poster, title, genre, popularity, description }) => {
  const posterPath = poster === null ? posterPlaceholder : `${IMAGE_BASE_URL}/w500${poster}` ;
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie_card">
        <img src={posterPath} alt={`${title}_movie_poster`}/>
        <p className="movie_title">{title}</p>
        <span>{genre.join(', ')}</span>
        <p>{popularity}</p>
        <p className="movie_desc">{truncateString(description)}</p>
      </div>
    </Link>
  );
};

export default MovieCard;