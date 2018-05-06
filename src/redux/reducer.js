import game from '../data/game';
import {combineReducers} from 'redux';

function players(state=game.players, action) {
    console.log('reducer players', state, action);
    switch (action.type) {
        case 'SET_PLAYERS':
            return Object.assign({}, state, { name: [...action] });
        case 'ADD_PLAYER':
            return state;
        case 'REMOVE_PLAYER':
            return state;
        default: return state;
    }
}

function board(state=game.board, action) {
    console.log('reducer size', state, action);
    switch (action.type) {
        case 'UPDATE_BOARD_SIZE':
            return Object.assign({}, state, {
                boardRows: action.rows,
                boardCols: action.cols,
                tableRows: action.rows * 2 + 1,
                tableCols: action.cols * 2 + 1,
            });
        default: return state;
    }
}

const rootReducer = combineReducers({players, board});

export default rootReducer;
