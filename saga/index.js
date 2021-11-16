import { all } from "@redux-saga/core/effects";
import movieSaga from "./movieSaga";

export default function* rootSaga() {
  yield all([movieSaga()]);
}