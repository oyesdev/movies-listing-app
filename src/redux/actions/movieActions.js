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