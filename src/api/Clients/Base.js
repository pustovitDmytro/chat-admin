export default class BaseApiClient {
    constructor({ prefix, apiUrl, apiKey } = {}) {
        this.prefix = prefix;
        this.apiUrl = apiUrl;
        this.apiKey = apiKey;
        this.token  = '';
    }

    async get(url, params = {}) {
        return this.request({
            url,
            params,
            method   : 'GET',
        });
    }

    async post(url, payload = {}) {
        return this.request({
            url,
            method : 'POST',
            body   : payload
        });
    }

    async put(url, payload = {}) {
        return this.request({
            url,
            method : 'PUT',
            body   : payload
        });
    }

    async patch(url, payload = {}) {
        return this.request({
            url,
            method : 'PATCH',
            body   : payload
        });
    }

    async delete(url, payload = {}) {
        return this.request({
            url,
            method : 'DELETE',
            body   : payload
        });
    }

    setToken(token) {
        this.token = token;
    }
}
