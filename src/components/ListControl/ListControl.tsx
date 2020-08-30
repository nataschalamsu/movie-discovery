import React from 'react';
import DatePicker from '../DatePicker/DatePicker';
import './ListControl.styles.css';

enum SortBy {
  POPULARITY = 'popularity.',
  RELEASE_DATE = 'release_date.',
  VOTE_COUNT = 'vote_count.',
};

type ListControlProps = {
  handleSortByBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  order: string;
  handleDatePicker: (startDate: any, endDate: any) => void;
};

const ListControl: React.FC<ListControlProps> = ({ handleDatePicker, handleSortByBtn, order }) => {
  return (
    <div className="list_control">
      <div className="sort_ctrl">
        <p>Sort by:</p>
        <button className="control_btn" value={SortBy.POPULARITY} onClick={handleSortByBtn}>Popularity</button>
        <button className="control_btn" value={SortBy.RELEASE_DATE} onClick={handleSortByBtn}>Release Date</button>
        <button className="control_btn" value={SortBy.VOTE_COUNT} onClick={handleSortByBtn}>Vote Count</button>
        <p className="order">{order === 'asc' ? 'desc' : 'asc'  }</p>
      </div>
      <div className="filter_ctrl">
        <p>Filter by Primary Release Date:</p>
        <DatePicker onChange={handleDatePicker} />
      </div>
    </div>
  );
};

export default ListControl;