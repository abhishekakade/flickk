// import { fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure, FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "../actions";
import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
  // CHANGE_SEARCHFIELD
} from "../actions/Types";

const initialState = {
  movies: [],
  loading: false,
  error: null
};

export const fetchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
