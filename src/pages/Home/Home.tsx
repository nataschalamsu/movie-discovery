import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../api/discover';
import DatePicker from '../../components/DatePicker';
import moment from 'moment';
import { start } from 'repl';

type Movies = {
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
    <div>Loading...</div>
  );

  return (
    <div>
      <h1>Home</h1>
      <p>Sort by:</p>
      <button value={SortBy.POPULARITY} onClick={handleSortByBtn}>Popularity</button>
      <button value={SortBy.RELEASE_DATE} onClick={handleSortByBtn}>Release Date</button>
      <button value={SortBy.VOTE_COUNT} onClick={handleSortByBtn}>Vote Count</button>
      <p>Filter by Primary Release Date:</p>
      <DatePicker onChange={handleDatePicker} />
      {movies.map(value => <p>{value.title}</p>)}
    </div>
  );
};

export default Home;