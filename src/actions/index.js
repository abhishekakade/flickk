import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./Types";

// Action Creators that return object
export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});
export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
});
export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});

export function fetchMovies() {
  return dispatch => {
    dispatch(fetchMoviesBegin());
    return fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=df6f6314c5440cba12e1c99403e78dc3"
    )
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMoviesSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}
