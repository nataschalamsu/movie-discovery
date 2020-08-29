import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { fetchMovies } from '../../api/discover';
import './Home.styles.css';
import MovieCard from '../../components/MovieCard';
import ListControl from '../../components/ListControl';
import Loading from '../../components/Loading/Loading';

type Movies = {
  id: string;
  title: string;
  poster: string;
  description: string;
  popularity: number;
  genre: string[];
};

enum SortBy {
  POPULARITY = 'popularity.',
  RELEASE_DATE = 'release_date.',
  VOTE_COUNT = 'vote_count.',
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movies[]>([]);
  const [order, setOrder] = useState('desc');

  const discoverMovies = async (sortBy: string | null) => {
    setLoading(true);
    const result = await fetchMovies(sortBy, null, null);

    setMovies(result);
    setLoading(false);
  };

  const handleSortByBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const sortedBy = `${value}${order}`;

    const result = await fetchMovies(sortedBy, null, null);
    
    setMovies(result);

    if (order === 'asc') {
      setOrder('desc')
    } else {
      setOrder('asc');
    }
  };

  const handleDatePicker = async (startDate: any, endDate: any) => {
    const parseStartDate = moment(startDate).format('YYYY-MM-DD');
    const parseEndDate = moment(endDate).format('YYYY-MM-DD');
    const result = await fetchMovies(null, parseStartDate, parseEndDate);

    setMovies(result);
  };

  useEffect(() => {
    discoverMovies(`${SortBy.POPULARITY}${order}`);
    setOrder('asc');
  }, []);

  if (loading) return (
    <Loading />
  );

  return (
    <div className="home">
      <header>
        <h1>discovery movie</h1>
      </header>
      <div className="movies">
        <ListControl
          handleDatePicker={handleDatePicker}
          handleSortByBtn={handleSortByBtn}
          order={order}
        />
        <div className="movie_list">
          {movies.map(value => 
            <MovieCard
              id={value.id}
              title={value.title}
              poster={value.poster}
              genre={value.genre}
              popularity={value.popularity}
              description={value.description}
            />
          )}
        </div>
      </div>
      <footer>2020</footer>
    </div>
  );
};

export default Home;