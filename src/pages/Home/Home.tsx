import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { fetchMovies } from '../../api/discover';
import './Home.styles.css';
import { ListControl, MovieCard } from '../../components';

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
  const [errorMsg, setErrorMsg] = useState('');

  const discoverMovies = async (sortBy: string | null) => {
    setLoading(true);
    
    try {
      const result = await fetchMovies(sortBy, null, null);
      setMovies(result);
      setLoading(false);
    } catch(err) {
      setErrorMsg(err.status_message);
      setLoading(false);
    }
  };

  const handleSortByBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    const sortedBy = `${value}${order}`;

    try {
      const result = await fetchMovies(sortedBy, null, null);
      setMovies(result);
      if (order === 'asc') {
        setOrder('desc')
      } else {
        setOrder('asc');
      }
    } catch(err) {
      setErrorMsg(err.status_message);
    }
  };

  const handleDatePicker = async (startDate: any, endDate: any) => {
    const parseStartDate = moment(startDate).format('YYYY-MM-DD');
    const parseEndDate = moment(endDate).format('YYYY-MM-DD');
    
    try {
      const result = await fetchMovies(null, parseStartDate, parseEndDate);
      setMovies(result);
    } catch(err) {
      setErrorMsg(err.status_message);
    }
  };

  useEffect(() => {
    discoverMovies(`${SortBy.POPULARITY}${order}`);
    setOrder('asc');
  }, []);

  return (
    <div className="home">
      <header>
        <h1 className="header_title">discovery movie</h1>
      </header>
      <div className="movies">
        <ListControl
          handleDatePicker={handleDatePicker}
          handleSortByBtn={handleSortByBtn}
          order={order}
        />
        <div className="movie_list">
          {loading && (<h2>Loading...</h2>)}
          {errorMsg && (<h2>{errorMsg}</h2>)}
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