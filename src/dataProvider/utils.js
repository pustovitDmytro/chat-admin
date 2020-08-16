import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    DELETE,
    GET_MANY,
    GET_MANY_REFERENCE,
} from 'react-admin';

import {DUMPS} from './constants'

export function getApiAttributes({type, resource, params}){
    switch (type) {
        case GET_LIST: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            const query = {
                sort: JSON.stringify([field, order]),
                range: JSON.stringify([
                    (page - 1) * perPage,
                    page * perPage - 1,
                ]),
                filter: JSON.stringify(params.filter),
            };
            return [query]
        }
        case GET_ONE:
            return [params.id]
        // case CREATE:
        //     url = `${apiUrl}/${resource}`;
        //     options.method = 'POST';
        //     options.body = JSON.stringify(params.data);
        //     break;
        // case UPDATE:
        //     url = `${apiUrl}/${resource}/${params.id}`;
        //     options.method = 'PUT';
        //     options.body = JSON.stringify(params.data);
        //     break;
        // case UPDATE_MANY:
        //     const query = {
        //         filter: JSON.stringify({ id: params.ids }),
        //     };
        //     url = `${apiUrl}/${resource}?${stringify(query)}`;
        //     options.method = 'PATCH';
        //     options.body = JSON.stringify(params.data);
        //     break;
        // case DELETE:
        //     url = `${apiUrl}/${resource}/${params.id}`;
        //     options.method = 'DELETE';
        //     break;
        // case DELETE_MANY:
        //     const query = {
        //         filter: JSON.stringify({ id: params.ids }),
        //     };
        //     url = `${apiUrl}/${resource}?${stringify(query)}`;
        //     options.method = 'DELETE';
        //     break;
        case GET_MANY: {
            const query = {
                filter: JSON.stringify({ id: params.ids }),
            };
            return [query]
        }
        // case GET_MANY_REFERENCE: {
        //     const { page, perPage } = params.pagination;
        //     const { field, order } = params.sort;
        //     const query = {
        //         sort: JSON.stringify([field, order]),
        //         range: JSON.stringify([
        //             (page - 1) * perPage,
        //             page * perPage - 1,
        //         ]),
        //         filter: JSON.stringify({
        //             ...params.filter,
        //             [params.target]: params.id,
        //         }),
        //     };
        //     url = `${apiUrl}/${resource}?${stringify(query)}`;
        //     break;
        // }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }
}

export function dumpResponse({data, linked, meta}, {type, resource}){
    const dump = DUMPS[resource];
    switch (type) {
        case GET_LIST: {
            return {
                data: data.map(dump),
                total: meta? meta.total: data.length
            }
        }
        case GET_MANY: {
            return {
                data: data.map(dump),
            }
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }
}

// GET_LIST	{ data: {Record[]}, total: {int} }
// GET_ONE	{ data: {Record} }
// CREATE	{ data: {Record} }
// UPDATE	{ data: {Record} }
// UPDATE_MANY	{ data: {mixed[]} } The ids which have been updated
// DELETE	{ data: {Record} }
// DELETE_MANY	{ data: {mixed[]} } The ids which have been deleted
// GET_MANY	{ data: {Record[]} }
// GET_MANY_REFERENCE	{ data: {Record[]}, total: {int} }