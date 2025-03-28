// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { Rule } from '../types';


export type TopicRulesWithTagListParams = {
  /**
  *
  * @type { string }
  * @memberof TopicRulesWithTagListApi
  */
  slug: string,
  options?: AxiosRequestConfig
}

export type TopicRulesWithTagListReturnType = AxiosPromise<Array<Rule>>;

const isTopicRulesWithTagListObjectParams = (params: [TopicRulesWithTagListParams] | unknown[]): params is [TopicRulesWithTagListParams] => {
  return params.length === 1 && Object.prototype.hasOwnProperty.call(params, 'slug')
}
/**
* Lists the available rules that have this tag.  This shows the rule information for rules with this tag.
* @param {TopicRulesWithTagListParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const topicRulesWithTagListParamCreator = async (...config: ([TopicRulesWithTagListParams] | [string, AxiosRequestConfig])): Promise<RequestArgs> => {
    const params = isTopicRulesWithTagListObjectParams(config) ? config[0] : ['slug', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as TopicRulesWithTagListParams;
    const { slug, options = {} } = params;
    const localVarPath = `/api/insights/v1/topic/{slug}/rules_with_tag/`
        .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
        auth:[
        {
        // authentication x-rh-identity required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };
}

export default topicRulesWithTagListParamCreator;
