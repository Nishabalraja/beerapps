import React, { useState } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { setFilteredBrewDate, clearFilteredBrewDate } from '../actions/beerActions';

const DateFilters = () => {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  
  const handleFilterChange = () => {
    const formattedDate = `${month}/${year}`;
    console.log('Filtered Brew Date:', formattedDate);
    dispatch(setFilteredBrewDate(formattedDate));
  };
  

  const clearFilter = () => {
    setMonth('');
    setYear('');
    dispatch(clearFilteredBrewDate(beers)); 
  };
  return (
    <div className="date-filters">
      <label htmlFor="brewMonth">Filter by Brew Date:</label>
      <input
        type="text"
        id="brewMonth"
        maxLength="2"
        placeholder="MM"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <span>/</span>
      <input
        type="text"
        id="brewYear"
        maxLength="4"
        placeholder="YYYY"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className='filter-button'
      />
      <button onClick={handleFilterChange} className="filter-button">Filter</button>
      <button onClick={clearFilter} className="clear-filter-button">Clear Filter</button>
    </div>
  );
};

export default DateFilters;
