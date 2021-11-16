import { GET_MOVIES, MOVIE_UPDATED, SET_MOVIES, UPDATE_MOVIE } from "./actionType"

export function updateMovie(movie) {
  return {
    type: UPDATE_MOVIE,
    payload: movie
  }
}
export function movieUpdated(movie) {
  return {
    type: MOVIE_UPDATED,
    payload: movie
  }
}
export function getMovies() {
  return {
    type: GET_MOVIES,
  }
}
export function setMovies(movies) {
  return {
    type: SET_MOVIES,
    payload: movies
  }
}