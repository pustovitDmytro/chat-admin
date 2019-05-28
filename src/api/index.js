import ApiClient from './Clients/ApiClient';
import MockClient from './Clients/MockClient';

import Users  from './UsersApi';
import Chats  from './ChatsApi';
import config from '../config';

const api = /mock/.test(config.apiUrl)
    ? new MockClient({ apiKey: config.apiKey, apiUrl: config.apiUrl })
    : new ApiClient({ prefix: config.apiPrefix, apiUrl: config.apiUrl });

export default {
    users   : new Users({ apiClient: api }),
    chats   : new Chats({apiClient: api})
};
