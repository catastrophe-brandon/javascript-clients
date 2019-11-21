[@redhat-cloud-services/vulnerabilities-client](../README.md) > [DefaultApi](../classes/defaultapi.md)

# Class: DefaultApi

DefaultApi - object-oriented interface

*__export__*: 

*__class__*: DefaultApi

*__extends__*: {BaseAPI}

## Hierarchy

 [BaseAPI](baseapi.md)

**↳ DefaultApi**

## Index

### Constructors

* [constructor](defaultapi.md#constructor)

### Properties

* [axios](defaultapi.md#axios)
* [basePath](defaultapi.md#basepath)
* [configuration](defaultapi.md#configuration)

### Methods

* [deleteSystem](defaultapi.md#deletesystem)
* [getAffectedSystemsByCve](defaultapi.md#getaffectedsystemsbycve)
* [getBusinessRiskList](defaultapi.md#getbusinessrisklist)
* [getCveDetails](defaultapi.md#getcvedetails)
* [getCveList](defaultapi.md#getcvelist)
* [getCveListBySystem](defaultapi.md#getcvelistbysystem)
* [getExecutiveReport](defaultapi.md#getexecutivereport)
* [getStatusList](defaultapi.md#getstatuslist)
* [getSystemDetails](defaultapi.md#getsystemdetails)
* [getSystemsList](defaultapi.md#getsystemslist)
* [getVersion](defaultapi.md#getversion)
* [setCveBusinessRisk](defaultapi.md#setcvebusinessrisk)
* [setCveStatus](defaultapi.md#setcvestatus)
* [setStatus](defaultapi.md#setstatus)
* [setSystemOptOut](defaultapi.md#setsystemoptout)
* [setSystemsOptOut](defaultapi.md#setsystemsoptout)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultApi**(configuration?: *[Configuration](configuration.md)*, basePath?: *`string`*, axios?: *`AxiosInstance`*): [DefaultApi](defaultapi.md)

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

*Defined in [git-api/api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L49)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` configuration | [Configuration](configuration.md) | - |
| `Default value` basePath | `string` |  BASE_PATH |
| `Default value` axios | `AxiosInstance` |  globalAxios |

**Returns:** [DefaultApi](defaultapi.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

*Inherited from [BaseAPI](baseapi.md).[axios](baseapi.md#axios)*

*Defined in [git-api/api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L51)*

___
<a id="basepath"></a>

### `<Protected>` basePath

**● basePath**: *`string`*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#basepath)*

*Defined in [git-api/api.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L51)*

___
<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md) \| `undefined`*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#configuration)*

*Defined in [git-api/api.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L49)*

___

## Methods

<a id="deletesystem"></a>

###  deleteSystem

▸ **deleteSystem**(inventoryId: *`string`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [git-api/api.ts:2839](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2839)*

Deletes system from database.

*__summary__*: Delete system.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inventoryId | `string` |  Inventory ID. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="getaffectedsystemsbycve"></a>

###  getAffectedSystemsByCve

▸ **getAffectedSystemsByCve**(cveId: *`string`*, filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, statusId?: *`string`*, dataFormat?: *`string`*, options?: *`any`*): `AxiosPromise`<[AffectedSystemsOut](../interfaces/affectedsystemsout.md)>

*Defined in [git-api/api.ts:2859](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2859)*

Report of affected systems for a given CVE.

*__summary__*: Affected systems for a given CVE.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveId | `string` |  CVE id. |
| `Optional` filter | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` page | `number` |
| `Optional` pageSize | `number` |
| `Optional` sort | `string` |
| `Optional` statusId | `string` |
| `Optional` dataFormat | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[AffectedSystemsOut](../interfaces/affectedsystemsout.md)>

___
<a id="getbusinessrisklist"></a>

###  getBusinessRiskList

▸ **getBusinessRiskList**(options?: *`any`*): `AxiosPromise`<[BusinessRiskListOut](../interfaces/businessrisklistout.md)>

*Defined in [git-api/api.ts:2870](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2870)*

Returns available business risk and business\_risk\_id pairs where business\_risk\_id is internal ID of the business risk.

*__summary__*: Available business risk/business\_risk\_id pairs.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[BusinessRiskListOut](../interfaces/businessrisklistout.md)>

___
<a id="getcvedetails"></a>

###  getCveDetails

▸ **getCveDetails**(cveId: *`string`*, options?: *`any`*): `AxiosPromise`<[CveDetailOut](../interfaces/cvedetailout.md)>

*Defined in [git-api/api.ts:2882](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2882)*

Show all information about given CVE.

*__summary__*: Details of a CVE.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveId | `string` |  CVE id. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[CveDetailOut](../interfaces/cvedetailout.md)>

___
<a id="getcvelist"></a>

###  getCveList

▸ **getCveList**(filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, cvssFrom?: *`number`*, cvssTo?: *`number`*, publicFrom?: *`string`*, publicTo?: *`string`*, impact?: *`string`*, dataFormat?: *`string`*, businessRiskId?: *`string`*, statusId?: *`string`*, showAll?: *`boolean`*, options?: *`any`*): `AxiosPromise`<[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)>

*Defined in [git-api/api.ts:2908](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2908)*

Overview of vulnerabilities across whole host inventory.

*__summary__*: Vulnerabilities overview.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` page | `number` |
| `Optional` pageSize | `number` |
| `Optional` sort | `string` |
| `Optional` cvssFrom | `number` |
| `Optional` cvssTo | `number` |
| `Optional` publicFrom | `string` |
| `Optional` publicTo | `string` |
| `Optional` impact | `string` |
| `Optional` dataFormat | `string` |
| `Optional` businessRiskId | `string` |
| `Optional` statusId | `string` |
| `Optional` showAll | `boolean` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VulnerabilitiesOut](../interfaces/vulnerabilitiesout.md)>

___
<a id="getcvelistbysystem"></a>

###  getCveListBySystem

▸ **getCveListBySystem**(inventoryId: *`string`*, filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, cvssFrom?: *`number`*, cvssTo?: *`number`*, publicFrom?: *`string`*, publicTo?: *`string`*, impact?: *`string`*, statusId?: *`string`*, dataFormat?: *`string`*, businessRiskId?: *`string`*, options?: *`any`*): `AxiosPromise`<[SystemCvesOut](../interfaces/systemcvesout.md)>

*Defined in [git-api/api.ts:2934](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2934)*

Shows detailed information about all CVEs the system is exposed to.

*__summary__*: CVE report for a system.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inventoryId | `string` |  Inventory ID. |
| `Optional` filter | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` page | `number` |
| `Optional` pageSize | `number` |
| `Optional` sort | `string` |
| `Optional` cvssFrom | `number` |
| `Optional` cvssTo | `number` |
| `Optional` publicFrom | `string` |
| `Optional` publicTo | `string` |
| `Optional` impact | `string` |
| `Optional` statusId | `string` |
| `Optional` dataFormat | `string` |
| `Optional` businessRiskId | `string` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemCvesOut](../interfaces/systemcvesout.md)>

___
<a id="getexecutivereport"></a>

###  getExecutiveReport

▸ **getExecutiveReport**(options?: *`any`*): `AxiosPromise`<[ExecutiveReport](../interfaces/executivereport.md)>

*Defined in [git-api/api.ts:2945](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2945)*

Returns top level overview of vulnerabilities affecting given account.

*__summary__*: Top level overview of vulnerabilities.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[ExecutiveReport](../interfaces/executivereport.md)>

___
<a id="getstatuslist"></a>

###  getStatusList

▸ **getStatusList**(options?: *`any`*): `AxiosPromise`<[StatusListOut](../interfaces/statuslistout.md)>

*Defined in [git-api/api.ts:2956](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2956)*

Returns available status and status\_id pairs where status\_id is internal ID of the status.

*__summary__*: Available status/status\_id pairs.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatusListOut](../interfaces/statuslistout.md)>

___
<a id="getsystemdetails"></a>

###  getSystemDetails

▸ **getSystemDetails**(inventoryId: *`string`*, options?: *`any`*): `AxiosPromise`<[SystemDetailsOut](../interfaces/systemdetailsout.md)>

*Defined in [git-api/api.ts:2968](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2968)*

Provides details of a system, e.g. it's opt out status.

*__summary__*: System details.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inventoryId | `string` |  Inventory ID. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemDetailsOut](../interfaces/systemdetailsout.md)>

___
<a id="getsystemslist"></a>

###  getSystemsList

▸ **getSystemsList**(filter?: *`string`*, limit?: *`number`*, offset?: *`number`*, page?: *`number`*, pageSize?: *`number`*, sort?: *`string`*, dataFormat?: *`string`*, optOut?: *`boolean`*, options?: *`any`*): `AxiosPromise`<[SystemListOut](../interfaces/systemlistout.md)>

*Defined in [git-api/api.ts:2987](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2987)*

List systems visible to logged in account with basic information related to vulnerabilities.

*__summary__*: List systems.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` filter | `string` |
| `Optional` limit | `number` |
| `Optional` offset | `number` |
| `Optional` page | `number` |
| `Optional` pageSize | `number` |
| `Optional` sort | `string` |
| `Optional` dataFormat | `string` |
| `Optional` optOut | `boolean` |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[SystemListOut](../interfaces/systemlistout.md)>

___
<a id="getversion"></a>

###  getVersion

▸ **getVersion**(options?: *`any`*): `AxiosPromise`<[VersionOut](../interfaces/versionout.md)>

*Defined in [git-api/api.ts:2998](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L2998)*

Get application version.

*__summary__*: Application version

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[VersionOut](../interfaces/versionout.md)>

___
<a id="setcvebusinessrisk"></a>

###  setCveBusinessRisk

▸ **setCveBusinessRisk**(cveRiskIn: *[CveRiskIn](../interfaces/cveriskin.md)*, options?: *`any`*): `AxiosPromise`<[BulkChangeOut](../interfaces/bulkchangeout.md)>

*Defined in [git-api/api.ts:3010](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3010)*

Sets business risk for a CVE.

*__summary__*: Set business risk for a CVE.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveRiskIn | [CveRiskIn](../interfaces/cveriskin.md) |  Values to be set. At least one of the &amp;quot;business\_risk\_id&amp;quot; or &amp;quot;business\_risk\_text&amp;quot; parameters is required. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[BulkChangeOut](../interfaces/bulkchangeout.md)>

___
<a id="setcvestatus"></a>

###  setCveStatus

▸ **setCveStatus**(cveStatusIn: *[CveStatusIn](../interfaces/cvestatusin.md)*, options?: *`any`*): `AxiosPromise`<[BulkChangeOut](../interfaces/bulkchangeout.md)>

*Defined in [git-api/api.ts:3022](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3022)*

Sets status for a CVE.

*__summary__*: Set status for a CVE.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| cveStatusIn | [CveStatusIn](../interfaces/cvestatusin.md) |  Values to be set. At least one of the &amp;quot;status\_id&amp;quot; or &amp;quot;status\_text&amp;quot; parameters is required. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[BulkChangeOut](../interfaces/bulkchangeout.md)>

___
<a id="setstatus"></a>

###  setStatus

▸ **setStatus**(statusIn: *[StatusIn](../interfaces/statusin.md)*, options?: *`any`*): `AxiosPromise`<[StatusOut](../interfaces/statusout.md)>

*Defined in [git-api/api.ts:3034](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3034)*

Sets status for given hosts and CVEs.

*__summary__*: Set status for system vulnerabilities.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| statusIn | [StatusIn](../interfaces/statusin.md) |  Values to be set. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[StatusOut](../interfaces/statusout.md)>

___
<a id="setsystemoptout"></a>

###  setSystemOptOut

▸ **setSystemOptOut**(inventoryId: *`string`*, value: *`boolean`*, options?: *`any`*): `AxiosPromise`<`Response`>

*Defined in [git-api/api.ts:3047](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3047)*

Opts in/out a systems. Opted out system is not shown and manageable by the vulnerability application.

*__summary__*: Opt in/out a system to/from vulnerability application.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inventoryId | `string` |  Inventory ID. |
| value | `boolean` |  opt\_out setting of the host. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<`Response`>

___
<a id="setsystemsoptout"></a>

###  setSystemsOptOut

▸ **setSystemsOptOut**(optOutIn: *[OptOutIn](../interfaces/optoutin.md)*, options?: *`any`*): `AxiosPromise`<[BulkChangeOut](../interfaces/bulkchangeout.md)>

*Defined in [git-api/api.ts:3059](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/vulnerabilities/git-api/api.ts#L3059)*

Opts in/out a systems. Opted out system is not shown and manageable by the vulnerability application.

*__summary__*: Opt in/out a system to/from vulnerability application.

*__throws__*: {RequiredError}

*__memberof__*: DefaultApi

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| optOutIn | [OptOutIn](../interfaces/optoutin.md) |  Values to be set. |
| `Optional` options | `any` |

**Returns:** `AxiosPromise`<[BulkChangeOut](../interfaces/bulkchangeout.md)>

___
