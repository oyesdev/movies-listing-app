import {combineReducers} from 'redux';
import {movieReducer, selectedMovieReducer, actionMovieReducer, adventureMovieReducer, animationMovieReducer, dramaMovieReducer, trendingMovieReducer} from "./movieReducer";
import {showReducer, selectedShowReducer} from "./showReducer";

const reducers = combineReducers({
    allMovies: movieReducer,
    movie: selectedMovieReducer,
    actionMovie: actionMovieReducer,
    adventureMovie: adventureMovieReducer,
    animationMovie: animationMovieReducer,
    dramaMovie: dramaMovieReducer,
    trendingMovies: trendingMovieReducer,
    allShows: showReducer,
    show: selectedShowReducer,
});

export default reducers;