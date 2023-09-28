import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, fetchBeers } from '../actions/beerActions'; // Import fetchBeers action
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  console.log('Current Page:', currentPage); // Add similar logs in relevant places
  console.log('Total Pages:', totalPages);
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      dispatch(setCurrentPage(Number(savedPage)));
    } else {
      dispatch(setCurrentPage(1)); // Set default page if none is saved
    }
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    localStorage.setItem('currentPage', newPage);
    dispatch(setCurrentPage(newPage));
    dispatch(fetchBeers(newPage)); // Fetch beers for the new page
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="text-center mb-5 mt-5">
      <div className="pagination-buttons">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='filter-button'
        >
          Previous
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='clear-filter-button'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
