import game from '../data/game';
import {combineReducers} from 'redux';

function player(state=game.player, action) {
    switch (action.type) {
        case 'ADD_USER':
            return state;
        case 'REMOVE_USER':
            return state;
    }
    return state;
}

function size(state=game.size, action) {
    switch (action.type) {
        case 'UPDATE_BOARD_SIZE':
            state.boardSize.rows = action.rows;
            state.boardSize.cols = action.cols;
            state.tableSize.rows = action.rows * 2 + 1;
            state.tableSize.cols = action.cols * 2 + 1;
            return state;
    }
    return state;
}

function board(state=game.board, action) {
    switch (action.type) {
        case 'ADD_LINE':
            return state.board;
    }
    return state;
}

const rootReducer = combineReducers({player, size, board});

export default rootReducer;
