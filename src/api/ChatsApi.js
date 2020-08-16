import Base from './Base.js';

class ChatsApi extends Base {
    list(params) {
        return this.apiClient.get('chats', params);
    }
}

export default ChatsApi;
