import { takeLatest, all, call, put } from 'redux-saga/effects';
import movieApi from '../services/movieApi';
import { movieUpdated, setMovies } from '../actions/movie';
import { GET_MOVIES, UPDATE_MOVIE } from '../actions/actionType';



function* fetchMovies() {
  try {
    const movies = yield call(movieApi.getAll);
    yield put(setMovies(movies));
  } catch (error) {
    console.log(error);
  }
}
function* fetchUpdateMovie(action) {
  try {
    // console.log(data);
    const movie = yield call(movieApi.updateOne, action.payload);
    console.log(movie);
    yield put(movieUpdated(movie));
  } catch (error) {
    console.log(error)
  }
}

function* watchGetMovies() {
  yield takeLatest(GET_MOVIES, fetchMovies);
}

function* watchUpdateMovie() {
  yield takeLatest(UPDATE_MOVIE, fetchUpdateMovie)
}

export default function* movieSaga() {
  yield all([watchGetMovies(), watchUpdateMovie()]);
}