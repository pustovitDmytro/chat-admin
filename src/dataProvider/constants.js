import {
    dumpUser,
    dumpChat
} from '../utils/dumpUtils';

import api from '../api';

export const RESOURCES = {
    users: api.users,
    chats: api.chats
}
export const TYPES = {
    GET_LIST: 'list',
    GET_ONE: null,
    CREATE: null,
    UPDATE: null,
    UPDATE_MANY: null,
    DELETE: null,
    DELETE_MANY: null,
    GET_MANY: 'list',
    GET_MANY_REFERENCE: null
}
export const DUMPS = {
    users: dumpUser,
    chats: dumpChat
}