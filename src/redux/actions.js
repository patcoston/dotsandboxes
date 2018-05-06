export function setPlayer(player, index) {
    console.log('function setPlayer', player, index);
    return {
        type: 'SET_PLAYER',
        player,
        index,
    }
}

export function addPlayer(player) {
    return {
        type: 'ADD_PLAYER',
        player,
    }
}

export function removePlayer(player) {
    return {
        type: 'REMOVE_PLAYER',
        player,
    }
}

export function addLine(loc) {
    return {
        type: 'ADD_LINE',
        loc,
    }
}

export function updateBoardSize(rows, cols) {
    console.log('updateBoardSize', rows, cols);
    return {
        type: 'UPDATE_BOARD_SIZE',
        rows,
        cols,
    }
}
