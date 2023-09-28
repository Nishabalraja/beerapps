import axios from 'axios';
import { FETCH_BEERS_SUCCESS, SET_CURRENT_PAGE } from './types';
export const SET_FILTERED_BREW_DATE = 'SET_FILTERED_BREW_DATE';
export const CLEAR_FILTERED_BREW_DATE = 'CLEAR_FILTERED_BREW_DATE';
// ...
// Example in your action creator
export const fetchBeers = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
    const totalPages = Math.ceil(response.headers['x-total-count'] / 10);
    dispatch({
      type: FETCH_BEERS_SUCCESS,
      payload: {
        beers: response.data,
        totalPages: totalPages,
      },
    });
    dispatch(setCurrentPage(page)); 
  } catch (error) {
    console.error('Error fetching beers:', error);
  }
};


 
  

  export const setCurrentPage = (page) => {
    return {
      type: SET_CURRENT_PAGE,
      payload: page,
    };
  };
export const setFilteredBrewDate = (date) => {
  return {
    type: SET_FILTERED_BREW_DATE,
    payload: date,
  };
};

export const clearFilteredBrewDate = () => {
  return {
    type: CLEAR_FILTERED_BREW_DATE,
  };
};