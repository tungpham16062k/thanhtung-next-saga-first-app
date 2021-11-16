import { MOVIES } from "../constants"
const initialState = {
  list: []
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES': {
      return {
        ...state,
        list: action.payload
      };
    }

    case 'MOVIE_UPDATED': {
      const { id, name, viName } = action.payload;
      const prevMovies = [...state.list];
      console.log(prevMovies);
      const newMovies = prevMovies.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name: name,
            viName: viName,
          }
        }
        return item;
      });
      return {
        ...state,
        list: newMovies
      }
    }

    default:
      return state;
  }
}

export default movieReducer;