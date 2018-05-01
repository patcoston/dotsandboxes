export function addUser(user) {
    return {
        type: 'ADD_USER',
        user
    }
}

export function removeUser(user) {
    return {
        type: 'REMOVE_USER',
        user
    }
}

export function addLine(loc) {
    return {
        type: 'ADD_LINE',
        loc
    }
}
