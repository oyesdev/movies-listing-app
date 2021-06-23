// Action Type:
import {ActionTypes} from "../constants/action-types";

// Actions:
export const setMovies = (movies) => {
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies
    }
}

export const selectedMovie = (movie) => {
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: movie
    }
}

export const removeSelectedMovie = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_MOVIE,
    }
}

export const setMovieAction = (movies) => {
    return {
        type: ActionTypes.SET_MOVIE_ACTION,
        payload: movies
    }
}

export const setMovieAdventure = (movies) => {
    return {
        type: ActionTypes.SET_MOVIE_ADVENTURE,
        payload: movies
    }
}

export const setMovieAnimation = (movies) => {
    return {
        type: ActionTypes.SET_MOVIE_ANIMATION,
        payload: movies
    }
}

export const setMovieDrama = (movies) => {
    return {
        type: ActionTypes.SET_MOVIE_DRAMA,
        payload: movies
    }
}

export const setTrendingMovies = (movies) => {
    return {
        type: ActionTypes.SET_TRENDING_MOVIES,
        payload: movies
    }
}