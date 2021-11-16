import movieReducer from "./movie";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  movie: movieReducer
})

export default rootReducers;