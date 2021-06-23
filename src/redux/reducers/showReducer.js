import { ActionTypes } from "../constants/action-types";

const initialState = {
    shows: [],
}

export const showReducer = (state = initialState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case ActionTypes.SET_SHOWS:
            return {...state, shows:payload};
        default:
            return state; 
    }
}

export const selectedShowReducer = (state ={}, action) => {
    const {type, payload} = action;
    switch(type) {
        case ActionTypes.SELECTED_SHOW:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_SHOW:
            return {}
        default:
            return state;
    }
}