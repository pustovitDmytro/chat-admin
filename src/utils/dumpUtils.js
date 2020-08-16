import {
    USER_ROLES
} from '../constants/types';

export function dumpUser(user){
    return {
        id: user._id,
        roleName: USER_ROLES[user.role],
        login: user.login,
        registered: user.createdAt
    }
}

export function dumpChat(chat){
    return {
        id: chat._id,
        name: chat.name,
        users: chat.users.map(dumpUser),
        created: chat.createdAt
    }
}