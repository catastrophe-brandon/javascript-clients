// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { ErrorNotFound, ListClustersSortByParameter, ServiceOfferingsCollection } from '../types';


export type ListTagServiceOfferingsParams = {
  /**
  * ID of the resource
  * @type { string }
  * @memberof ListTagServiceOfferingsApi
  */
  id: string,
  /**
  * The numbers of items to return per page.
  * @type { number }
  * @memberof ListTagServiceOfferingsApi
  */
  limit?: number,
  /**
  * The number of items to skip before starting to collect the result set.
  * @type { number }
  * @memberof ListTagServiceOfferingsApi
  */
  offset?: number,
  /**
  * Filter for querying collections.
  * @type { object }
  * @memberof ListTagServiceOfferingsApi
  */
  filter?: object,
  /**
  * The list of attribute and order to sort the result set by.
  * @type { ListClustersSortByParameter }
  * @memberof ListTagServiceOfferingsApi
  */
  sortBy?: ListClustersSortByParameter,
  options?: AxiosRequestConfig
}

export type ListTagServiceOfferingsReturnType = AxiosPromise<ServiceOfferingsCollection>;

const isListTagServiceOfferingsObjectParams = (params: [ListTagServiceOfferingsParams] | unknown[]): params is [ListTagServiceOfferingsParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'id') && true && true && true && true
}
/**
* Returns an array of ServiceOffering objects
* @summary List ServiceOfferings for Tag
* @param {ListTagServiceOfferingsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const listTagServiceOfferingsParamCreator = async (...config: ([ListTagServiceOfferingsParams] | [string, number, number, object, ListClustersSortByParameter, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isListTagServiceOfferingsObjectParams(config) ? config[0] : ['id', 'limit', 'offset', 'filter', 'sortBy', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ListTagServiceOfferingsParams;
    const { id, limit, offset, filter, sortBy, options = {} } = params;
    const localVarPath = `/tags/{id}/service_offerings`
        .replace(`{${"id"}}`, encodeURIComponent(String(id)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (filter !== undefined) {
        localVarQueryParameter['filter'] = filter;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        auth:[
        {
        // authentication UserSecurity required
        // http basic authentication required
        authType: AuthTypeEnum.Basic,
        }
        ]
    };
}

export default listTagServiceOfferingsParamCreator;