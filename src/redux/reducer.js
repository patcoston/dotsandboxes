import game from '../data/game';
import {combineReducers} from 'redux';

function player(state=game.player, action) {
    console.log('reducer player', state, action);
    switch (action.type) {
        case 'SET_PLAYER':
            state[action.index] = action.player;
            return state;
        case 'ADD_PLAYER':
            return state;
        case 'REMOVE_PLAYER':
            return state;
    }
    return state;
}

function size(state=game.size, action) {
    console.log('reducer size', state, action);
    switch (action.type) {
        case 'UPDATE_BOARD_SIZE':
            state.boardRows = action.rows;
            state.boardCols = action.cols;
            state.tableRows = action.rows * 2 + 1;
            state.tableCols = action.cols * 2 + 1;
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
