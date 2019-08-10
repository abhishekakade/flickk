// import { fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure, FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "../actions";
import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../actions/Types";

const initialState = {
  movies: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_BEGIN:
      return { ...state, loading: true, error: null };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, loading: false, items: action.payload.movies };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
