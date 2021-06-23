import { ActionTypes } from "../constants/action-types";


const initialState = {
    movies: [],
}

export const movieReducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return {...state, movies:payload};
        default:
            return state; 
    }
}

export const selectedMovieReducer = (state ={}, action) => {
    const {type, payload} = action;
    switch(type) {
        case ActionTypes.SELECTED_MOVIE:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_MOVIE:
            return {}
        default:
            return state;
    }
}