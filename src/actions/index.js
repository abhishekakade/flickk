import { POPULAR_MOVIES_URL, API_KEY } from "../API";

import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  CHANGE_SEARCHFIELD
} from "./Types";

// Action Creators that return object
export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

// export const fetchMoviesBegin = () => ({
//   type: FETCH_MOVIES_BEGIN
// });
// export const fetchMoviesSuccess = movies => ({
//   type: FETCH_MOVIES_SUCCESS,
//   payload: { movies }
// });
// export const fetchMoviesFailure = error => ({
//   type: FETCH_MOVIES_FAILURE,
//   payload: { error }
// });

// export const fetchMovies = () => dispatch => {
//   dispatch({ type: FETCH_MOVIES_BEGIN });

//   fetch(`${POPULAR_MOVIES_URL}${API_KEY}`)
//     .then(res => res.json())
//     .then(json =>
//       dispatch({ type: FETCH_MOVIES_SUCCESS, payload: json.results })
//     )
//     .catch(error => dispatch({ type: FETCH_MOVIES_FAILURE, payload: error }));
// };

export function fetchMovies() {
  return function(dispatch) {
    dispatch({ type: FETCH_MOVIES_BEGIN });

    fetch(`${POPULAR_MOVIES_URL}${API_KEY}`)
      .then(res => res.json())
      .then(json =>
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: json.results })
      )
      .catch(error => dispatch({ type: FETCH_MOVIES_FAILURE, payload: error }));
  };
}
