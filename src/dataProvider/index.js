import{RESOURCES, TYPES} from './constants'
import {getApiAttributes, dumpResponse} from './utils'

export default async (type, resource, params) => {
    const apiResource = RESOURCES[resource];
    const apiType = TYPES[type];
    const apiAttributes = getApiAttributes({type, resource, params});
    const response = await apiResource[apiType](...apiAttributes);
    return dumpResponse(response, {type, resource});
};