import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing useSelector
import { fetchBeers } from './actions/beerActions';
import BeerTable from './components/BeerTable';
import Pagination from './components/Pagination';
import DateFilters from './components/DateFilters';

const App = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage); // Selecting current page from Redux store
  const beers = useSelector((state) => state.beers);
  useEffect(() => {
    dispatch(fetchBeers(currentPage)); // Fetch beers based on the current page
  }, [dispatch, currentPage]);
  

  return (
    <div className="container">
      <h1>Beer App</h1>
     
      <DateFilters />
      {beers.length > 0 ? <BeerTable /> : <p>No beers available</p>}
      <Pagination />
    </div>
  );
};

export default App;
