import queryString from 'query-string';
import Base from './Base';

export default class RestApiClient extends Base {

    getResourceUrl(resource, query){
        return new URL(`${this.apiUrl}${this.prefix}/${resource}${query}`);
    }

    async request({ url, method, params = {}, body }) {
        const query = Object.keys(params).length ? `?${queryString.stringify(params)}` : '';
        const response = await fetch(
            this.getResourceUrl(url, query),
            {
                method,
                headers : {
                    'Content-Type'  : 'application/json',
                    'Cache-Control' : 'no-cache',
                    'pragma'        : 'no-cache',
                    'Authorization' : this.token,
                },
                withCredentials : true,
                crossDomain     : false,
                body            : method !== 'GET' 
                    ? JSON.stringify({ data: body }) 
                    : undefined
            }
        );

        const json = await response.json();

        if (!json.status) throw json.error;

        return json;
    }
}
