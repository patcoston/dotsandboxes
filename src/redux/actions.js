export function setPlayers(players) {
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

export function updateBoardSize(rows, cols) {
    return {
        type: 'UPDATE_BOARD_SIZE',
        rows,
        cols,
    }
}

export function updateTableLine(row, col) {
    return {
        type: 'UPDATE_TABLE_LINE',
        row,
        col
    }
}
