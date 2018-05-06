export function setPlayers(players) {
    console.log('function setPlayers', players);
    return {
        type: 'SET_PLAYERS',
        players,
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
