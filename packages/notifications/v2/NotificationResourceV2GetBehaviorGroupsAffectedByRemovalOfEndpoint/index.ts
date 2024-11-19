// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { BehaviorGroup } from '../types';


export type NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams = {
  /**
  *
  * @type { string }
  * @memberof NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointApi
  */
  endpointId: string,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointReturnType = AxiosPromise<Array<BehaviorGroup>>;

const isNotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointObjectParams = (params: [NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams] | unknown[]): params is [NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'endpointId')
}
/**
* Lists the behavior groups that are affected by the removal of an endpoint. Use this endpoint to understand how removing an endpoint affects existing behavior groups.
* @summary List the behavior groups affected by the removal of an endpoint
* @param {NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator = async (...config: ([NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isNotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointObjectParams(config) ? config[0] : ['endpointId', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParams;
    const { endpointId, options = {} } = params;
    const localVarPath = `/notifications/behaviorGroups/affectedByRemovalOfEndpoint/{endpointId}`
        .replace(`{${"endpointId"}}`, encodeURIComponent(String(endpointId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    return {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };
}

export default notificationResourceV2GetBehaviorGroupsAffectedByRemovalOfEndpointParamCreator;