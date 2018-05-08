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
            for (let row=0; row<action.rows; row++) {
                newState.owner[row] = [];
                for (let col=0; col<action.cols; col++) {
                    newState.owner[row][col] = -1; // nobody owns this square
                }
            }
            console.log('newState', newState);
            return newState;
        default: return state;
    }
}

const rootReducer = combineReducers({players, board});

export default rootReducer;
