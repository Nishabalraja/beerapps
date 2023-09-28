import { FETCH_BEERS_SUCCESS, SET_CURRENT_PAGE } from '../actions/types';
export const SET_FILTERED_BREW_DATE = 'SET_FILTERED_BREW_DATE';
export const CLEAR_FILTERED_BREW_DATE = 'CLEAR_FILTERED_BREW_DATE';

const initialState = {
  allBeers: [],
    beers: [],
    currentPage: 1,
    totalPages: 0,
    filteredBrewDate: null,
    brewedBeforeFilter: null,
    brewedAfterFilter: null,
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEERS_SUCCESS:
      return {
        ...state,
        allBeers: action.payload.beers, // Update allBeers when fetching beers
        beers: action.payload.beers,
        totalPages: action.payload.totalPages,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
      case SET_FILTERED_BREW_DATE:
  const filteredDate = action.payload;
  return {
    ...state,
    filteredBrewDate: filteredDate,
    beers: state.beers.filter(beer => {
      const [month, year] = filteredDate.split('/');
      const [beerMonth, beerYear] = beer.first_brewed.split('/');
      return beerMonth === month && beerYear === year;
    })
  };
  case CLEAR_FILTERED_BREW_DATE:
  return {
    ...state,
    filteredBrewDate: null,
    beers: state.allBeers, // Reset beers to the original array
  };

  
    default:
      return state;
  }
};

export default beerReducer;