// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Endpoint } from '../types';


export type CreateEndpointParams = {
  /**
  * Endpoint attributes to create
  * @type { Endpoint }
  * @memberof CreateEndpointApi
  */
  endpoint: Endpoint,
  options?: AxiosRequestConfig
}

export type CreateEndpointReturnType = AxiosPromise<Endpoint>;

const isCreateEndpointObjectParams = (params: [CreateEndpointParams] | unknown[]): params is [CreateEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpoint')
}
/**
* Creates a Endpoint object
* @summary Create a new Endpoint
* @param {CreateEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const createEndpointParamCreator = async (...config: ([CreateEndpointParams] | [Endpoint, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isCreateEndpointObjectParams(config) ? config[0] : ['endpoint', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as CreateEndpointParams;
    const { endpoint, options = {} } = params;
    const localVarPath = `/endpoints`;
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'POST' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: endpoint,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default createEndpointParamCreator;
