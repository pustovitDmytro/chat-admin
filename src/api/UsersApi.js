import Base from './Base.js';

class Users extends Base {
    list(params) {
        return this.apiClient.get('users', params);
    }
}

export default Users;
