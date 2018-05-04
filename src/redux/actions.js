export function addUser(user) {
    return {
        type: 'ADD_USER',
        user,
    }
}

export function removeUser(user) {
    return {
        type: 'REMOVE_USER',
        user,
    }
}

export function addLine(loc) {
    return {
        type: 'ADD_LINE',
        loc,
    }
}

export function updateBoardSize(rows, cols) {
    return {
        type: 'UPDATE_BOARD_SIZE',
        rows,
        cols,
    }
}
