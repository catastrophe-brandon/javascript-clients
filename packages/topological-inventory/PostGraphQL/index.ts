// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { GraphQLRequest, GraphQLResponse } from '../types';


export type PostGraphQLParams = {
  /**
  * GraphQL Query Request
  * @type { GraphQLRequest }
  * @memberof PostGraphQLApi
  */
  graphQLRequest: GraphQLRequest,
  options?: AxiosRequestConfig
}

export type PostGraphQLReturnType = AxiosPromise<GraphQLResponse>;

const isPostGraphQLObjectParams = (params: [PostGraphQLParams] | unknown[]): params is [PostGraphQLParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'graphQLRequest')
}
/**
* Performs a GraphQL Query
* @summary Perform a GraphQL Query
* @param {PostGraphQLParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const postGraphQLParamCreator = async (...config: ([PostGraphQLParams] | [GraphQLRequest, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isPostGraphQLObjectParams(config) ? config[0] : ['graphQLRequest', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as PostGraphQLParams;
    const { graphQLRequest, options = {} } = params;
    const localVarPath = `/graphql`;
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
        serializeData: graphQLRequest,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default postGraphQLParamCreator;
