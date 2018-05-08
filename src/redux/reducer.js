import game from '../data/game';
import {combineReducers} from 'redux';

function players(state=game.players, action) {
    console.log('reducer players', state, action);
    switch (action.type) {
        case 'SET_PLAYERS':
            let newState = Object.assign({}, state, {
                names: [...action.players.names]
            });
            return newState;
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
            let newState = Object.assign({}, state, {
                boardRows: action.rows,
                boardCols: action.cols,
                tableRows: action.rows * 2 + 1,
                tableCols: action.cols * 2 + 1,
            });
            delete newState.owner; // remove owner array
            delete newState.lines; // remove lines array
            newState.owner = []; // create new owner array
            newState.lines = []; // create new lines array
            for (let row=0; row<newState.boardRows; row++) {
                newState.owner[row] = [];
                for (let col=0; col<newState.boardCols; col++) {
                    newState.owner[row][col] = false; // no player owns this square
                }
            }
            for (let row=0; row<newState.tableRows; row++) {
                newState.lines[row] = [];
                for (let col=0; col<newState.tableCols; col++) {
                    newState.lines[row][col] = false; // no lines in here in the table
                }
            }
            console.log('newState', newState);
            return newState;
        default: return state;
    }
}

const rootReducer = combineReducers({players, board});

export default rootReducer;
