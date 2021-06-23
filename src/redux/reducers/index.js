import {combineReducers} from 'redux';
import {movieReducer, selectedMovieReducer} from "./movieReducer";
import {showReducer, selectedShowReducer} from "./showReducer";

const reducers = combineReducers({
    allMovies: movieReducer,
    movie: selectedMovieReducer,
    allShows: showReducer,
    show: selectedShowReducer,
});

export default reducers;