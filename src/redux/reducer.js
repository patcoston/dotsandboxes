import game from '../data/game';
import {combineReducers} from 'redux';

function users(state={}, action) {
    switch (action.type) {
        case 'ADD_USER':
            return state;
        case 'REMOVE_USER':
            return state;
    }
    return state;
}

function lines(state={}, action) {
    switch (action.type) {
        case 'ADD_LINE':
            return state;
    }
    return state;
}

const rootReducer = combineReducers({users, lines});

export default rootReducer;
