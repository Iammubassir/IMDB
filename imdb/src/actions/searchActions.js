import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../APIKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  
  {/* here axios method is used to fetch api and get method followed by api link */}
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,            //http://www.omdbapi.com/?i=tt3896198&apikey=c9467e8b
        payload: response.data       //c9467e8b
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  
  {/* here axios method is used to fetch api with movie id and get method followed by api link */}
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>                          //https://www.omdbapi.com/?apikey=${APIKey}&i=${id}
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
