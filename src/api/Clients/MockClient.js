import queryString from 'query-string';
import Base from './Base';

export default class MockApiClient extends Base {
    getResourceUrl(resource, query){
        return new URL(`${this.apiUrl}/${resource}.json${query}`);
    }

    async request({ url, method, params = {}, body }) {
        const query = Object.keys(params).length ? `?${queryString.stringify(params)}` : '';
        const response = await fetch(
            this.getResourceUrl(url, query),
            {
                method,
                headers : {
                    'X-API-Key'     : this.apiKey,
                },
                body            : method !== 'GET' 
                    ? JSON.stringify({ data: body }) 
                    : undefined
            }
        );

        const json = await response.json();

        return {data: json};
    }
}
