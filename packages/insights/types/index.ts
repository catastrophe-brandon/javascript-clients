/**
 *
 * @export
 * @interface Ack
 */
export interface Ack {
    /**
     *
     * @type {string}
     * @memberof Ack
     */
    'rule': string;
    /**
     * The reason the rule was acked
     * @type {string}
     * @memberof Ack
     */
    'justification'?: string;
    /**
     * The user who created the ack
     * @type {string}
     * @memberof Ack
     */
    'created_by'?: string;
    /**
     *
     * @type {string}
     * @memberof Ack
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof Ack
     */
    'updated_at': string;
}
/**
 * A rule_id and the number of acks on it
 * @export
 * @interface AckCount
 */
export interface AckCount {
    /**
     *
     * @type {string}
     * @memberof AckCount
     */
    'rule_id': string;
    /**
     *
     * @type {number}
     * @memberof AckCount
     */
    'ack_count': number;
}
/**
 *
 * @export
 * @interface AckInput
 */
export interface AckInput {
    /**
     *
     * @type {string}
     * @memberof AckInput
     */
    'rule_id': string;
    /**
     *
     * @type {string}
     * @memberof AckInput
     */
    'justification'?: string;
}
/**
 *
 * @export
 * @interface AckJustification
 */
export interface AckJustification {
    /**
     * The reason the rule was acked
     * @type {string}
     * @memberof AckJustification
     */
    'justification'?: string;
}
/**
 *
 * @export
 * @interface AllAck
 */
export interface AllAck {
    /**
     *
     * @type {string}
     * @memberof AllAck
     */
    'account': string;
    /**
     *
     * @type {string}
     * @memberof AllAck
     */
    'org_id': string;
    /**
     *
     * @type {string}
     * @memberof AllAck
     */
    'rule': string;
    /**
     * The reason the rule was acked
     * @type {string}
     * @memberof AllAck
     */
    'justification'?: string;
    /**
     * The user who created the ack
     * @type {string}
     * @memberof AllAck
     */
    'created_by'?: string;
    /**
     *
     * @type {string}
     * @memberof AllAck
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof AllAck
     */
    'updated_at': string;
}
/**
 * This is only available to internal users and lists ratings from all users.
 * @export
 * @interface AllRuleRatings
 */
export interface AllRuleRatings {
    /**
     * Rule ID from Insights
     * @type {string}
     * @memberof AllRuleRatings
     */
    'rule': string;
    /**
     * * `-1` - Dislike * `0` - Neutral * `1` - Like
     * @type {number}
     * @memberof AllRuleRatings
     */
    'rating': AllRuleRatingsRatingEnum;
    /**
     *
     * @type {string}
     * @memberof AllRuleRatings
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof AllRuleRatings
     */
    'updated_at': string;
    /**
     * The username that rated this rule
     * @type {string}
     * @memberof AllRuleRatings
     */
    'rated_by'?: string;
    /**
     *
     * @type {string}
     * @memberof AllRuleRatings
     */
    'account'?: string | null;
    /**
     *
     * @type {string}
     * @memberof AllRuleRatings
     */
    'org_id': string;
}

export const AllRuleRatingsRatingEnum = {
    NUMBER_MINUS_1: -1,
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type AllRuleRatingsRatingEnum = typeof AllRuleRatingsRatingEnum[keyof typeof AllRuleRatingsRatingEnum];

/**
 * Serializer specifically for listing all Pathways currently in the system
 * @export
 * @interface AutoSubscribe
 */
export interface AutoSubscribe {
    /**
     *
     * @type {string}
     * @memberof AutoSubscribe
     */
    'org_id': string;
    /**
     *
     * @type {boolean}
     * @memberof AutoSubscribe
     */
    'is_auto_subscribed': boolean;
}
/**
 * Serializer specifically for handling CREATE and UPDATE views for AutoSubscribe
 * @export
 * @interface AutoSubscribeInput
 */
export interface AutoSubscribeInput {
    /**
     *
     * @type {string}
     * @memberof AutoSubscribeInput
     */
    'org_id': string;
    /**
     *
     * @type {boolean}
     * @memberof AutoSubscribeInput
     */
    'is_auto_subscribed': boolean;
}
/**
 * The basic report information for each system affected by a rule.  Only lists basic details of the host and rule, and links to more information.
 * @export
 * @interface ExportHits
 */
export interface ExportHits {
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'hostname': string;
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'rhel_version': string;
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'uuid': string;
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'last_seen': string;
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'title': string;
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'solution_url': string;
    /**
     *
     * @type {number}
     * @memberof ExportHits
     */
    'total_risk': number;
    /**
     *
     * @type {number}
     * @memberof ExportHits
     */
    'likelihood': number;
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'publish_date': string;
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'stale_at': string;
    /**
     *
     * @type {string}
     * @memberof ExportHits
     */
    'results_url': string;
}
/**
 * Ignore reports of this rule on this system for this account.
 * @export
 * @interface HostAck
 */
export interface HostAck {
    /**
     *
     * @type {number}
     * @memberof HostAck
     */
    'id': number;
    /**
     * Rule ID from Insights
     * @type {string}
     * @memberof HostAck
     */
    'rule': string;
    /**
     *
     * @type {string}
     * @memberof HostAck
     */
    'system_uuid': string;
    /**
     *
     * @type {string}
     * @memberof HostAck
     */
    'justification'?: string;
    /**
     * The username that created this acknowledgement
     * @type {string}
     * @memberof HostAck
     */
    'created_by': string;
    /**
     *
     * @type {string}
     * @memberof HostAck
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof HostAck
     */
    'updated_at': string;
    /**
     *
     * @type {string}
     * @memberof HostAck
     */
    'display_name': string;
}
/**
 * Ignore reports of this rule on this system for this account.  Use this when creating a new HostAck.
 * @export
 * @interface HostAckInput
 */
export interface HostAckInput {
    /**
     * Rule ID from Insights
     * @type {string}
     * @memberof HostAckInput
     */
    'rule': string;
    /**
     *
     * @type {string}
     * @memberof HostAckInput
     */
    'system_uuid': string;
    /**
     *
     * @type {string}
     * @memberof HostAckInput
     */
    'justification'?: string;
}
/**
 * Just modify the justification on a Host Ack.
 * @export
 * @interface HostAckJustification
 */
export interface HostAckJustification {
    /**
     *
     * @type {number}
     * @memberof HostAckJustification
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof HostAckJustification
     */
    'justification'?: string;
}
/**
 *
 * @export
 * @interface JustificationCount
 */
export interface JustificationCount {
    /**
     *
     * @type {string}
     * @memberof JustificationCount
     */
    'justification': string;
    /**
     *
     * @type {number}
     * @memberof JustificationCount
     */
    'count': number;
}
/**
 * Pairings of C.R.C rule URL and its KCS solution number (node_id)
 * @export
 * @interface Kcs
 */
export interface Kcs {
    /**
     * Rule URL on C.R.C.
     * @type {string}
     * @memberof Kcs
     */
    'rule_url': string;
    /**
     * KCS solution number
     * @type {string}
     * @memberof Kcs
     */
    'node_id': string;
}
/**
 * The response from adding or deleting multiple acks on a rule.  For backward compatibility we include the count, and then list the impacted systems.
 * @export
 * @interface MultiAckResponse
 */
export interface MultiAckResponse {
    /**
     *
     * @type {number}
     * @memberof MultiAckResponse
     */
    'count': number;
    /**
     *
     * @type {Array<string>}
     * @memberof MultiAckResponse
     */
    'host_ids': Array<string>;
}
/**
 * Add acks to multiple hosts for a single rule.
 * @export
 * @interface MultiHostAck
 */
export interface MultiHostAck {
    /**
     *
     * @type {Array<string>}
     * @memberof MultiHostAck
     */
    'systems': Array<string>;
    /**
     *
     * @type {string}
     * @memberof MultiHostAck
     */
    'justification': string;
}
/**
 * Delete acks from multiple hosts for a single rule.
 * @export
 * @interface MultiHostUnAck
 */
export interface MultiHostUnAck {
    /**
     *
     * @type {Array<string>}
     * @memberof MultiHostUnAck
     */
    'systems': Array<string>;
}
/**
 * A specific org id for a Red Hat customer.
 * @export
 * @interface OrgId
 */
export interface OrgId {
    /**
     *
     * @type {string}
     * @memberof OrgId
     */
    'org_id': string;
}
/**
 *
 * @export
 * @interface PaginatedAckList
 */
export interface PaginatedAckList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedAckList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedAckList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<Ack>}
     * @memberof PaginatedAckList
     */
    'data'?: Array<Ack>;
}
/**
 *
 * @export
 * @interface PaginatedAckListLinks
 */
export interface PaginatedAckListLinks {
    /**
     *
     * @type {string}
     * @memberof PaginatedAckListLinks
     */
    'first'?: string | null;
    /**
     *
     * @type {string}
     * @memberof PaginatedAckListLinks
     */
    'previous'?: string | null;
    /**
     *
     * @type {string}
     * @memberof PaginatedAckListLinks
     */
    'next'?: string | null;
    /**
     *
     * @type {string}
     * @memberof PaginatedAckListLinks
     */
    'last'?: string | null;
}
/**
 *
 * @export
 * @interface PaginatedAckListMeta
 */
export interface PaginatedAckListMeta {
    /**
     *
     * @type {number}
     * @memberof PaginatedAckListMeta
     */
    'count': number;
}
/**
 *
 * @export
 * @interface PaginatedAllRuleRatingsList
 */
export interface PaginatedAllRuleRatingsList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedAllRuleRatingsList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedAllRuleRatingsList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<AllRuleRatings>}
     * @memberof PaginatedAllRuleRatingsList
     */
    'data'?: Array<AllRuleRatings>;
}
/**
 *
 * @export
 * @interface PaginatedHostAckList
 */
export interface PaginatedHostAckList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedHostAckList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedHostAckList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<HostAck>}
     * @memberof PaginatedHostAckList
     */
    'data'?: Array<HostAck>;
}
/**
 *
 * @export
 * @interface PaginatedJustificationCountList
 */
export interface PaginatedJustificationCountList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedJustificationCountList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedJustificationCountList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<JustificationCount>}
     * @memberof PaginatedJustificationCountList
     */
    'data'?: Array<JustificationCount>;
}
/**
 *
 * @export
 * @interface PaginatedOrgIdList
 */
export interface PaginatedOrgIdList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedOrgIdList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedOrgIdList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<OrgId>}
     * @memberof PaginatedOrgIdList
     */
    'data'?: Array<OrgId>;
}
/**
 *
 * @export
 * @interface PaginatedPathwayList
 */
export interface PaginatedPathwayList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedPathwayList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedPathwayList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<Pathway>}
     * @memberof PaginatedPathwayList
     */
    'data'?: Array<Pathway>;
}
/**
 *
 * @export
 * @interface PaginatedRuleForAccountList
 */
export interface PaginatedRuleForAccountList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedRuleForAccountList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedRuleForAccountList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<RuleForAccount>}
     * @memberof PaginatedRuleForAccountList
     */
    'data'?: Array<RuleForAccount>;
}
/**
 *
 * @export
 * @interface PaginatedRuleRatingList
 */
export interface PaginatedRuleRatingList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedRuleRatingList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedRuleRatingList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<RuleRating>}
     * @memberof PaginatedRuleRatingList
     */
    'data'?: Array<RuleRating>;
}
/**
 *
 * @export
 * @interface PaginatedRuleRatingStatsList
 */
export interface PaginatedRuleRatingStatsList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedRuleRatingStatsList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedRuleRatingStatsList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<RuleRatingStats>}
     * @memberof PaginatedRuleRatingStatsList
     */
    'data'?: Array<RuleRatingStats>;
}
/**
 *
 * @export
 * @interface PaginatedSubscriptionExcludedAccountList
 */
export interface PaginatedSubscriptionExcludedAccountList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedSubscriptionExcludedAccountList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedSubscriptionExcludedAccountList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<SubscriptionExcludedAccount>}
     * @memberof PaginatedSubscriptionExcludedAccountList
     */
    'data'?: Array<SubscriptionExcludedAccount>;
}
/**
 *
 * @export
 * @interface PaginatedSystemList
 */
export interface PaginatedSystemList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedSystemList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedSystemList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<System>}
     * @memberof PaginatedSystemList
     */
    'data'?: Array<System>;
}
/**
 *
 * @export
 * @interface PaginatedSystemsDetailList
 */
export interface PaginatedSystemsDetailList {
    /**
     *
     * @type {PaginatedAckListMeta}
     * @memberof PaginatedSystemsDetailList
     */
    'meta'?: PaginatedAckListMeta;
    /**
     *
     * @type {PaginatedAckListLinks}
     * @memberof PaginatedSystemsDetailList
     */
    'links'?: PaginatedAckListLinks;
    /**
     *
     * @type {Array<SystemsDetail>}
     * @memberof PaginatedSystemsDetailList
     */
    'data'?: Array<SystemsDetail>;
}
/**
 * Create or edit topics.
 * @export
 * @interface PatchedTopicEdit
 */
export interface PatchedTopicEdit {
    /**
     *
     * @type {string}
     * @memberof PatchedTopicEdit
     */
    'name'?: string;
    /**
     * Rule topic slug
     * @type {string}
     * @memberof PatchedTopicEdit
     */
    'slug'?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedTopicEdit
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedTopicEdit
     */
    'tag'?: string;
    /**
     *
     * @type {boolean}
     * @memberof PatchedTopicEdit
     */
    'featured'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PatchedTopicEdit
     */
    'enabled'?: boolean;
}
/**
 * Serializer specifically for listing all Pathways currently in the system
 * @export
 * @interface Pathway
 */
export interface Pathway {
    /**
     *
     * @type {string}
     * @memberof Pathway
     */
    'slug': string;
    /**
     *
     * @type {string}
     * @memberof Pathway
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Pathway
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof Pathway
     */
    'component': string;
    /**
     *
     * @type {ResolutionRisk}
     * @memberof Pathway
     */
    'resolution_risk': ResolutionRisk;
    /**
     *
     * @type {string}
     * @memberof Pathway
     */
    'publish_date': string;
    /**
     *
     * @type {boolean}
     * @memberof Pathway
     */
    'has_playbook': boolean;
    /**
     *
     * @type {number}
     * @memberof Pathway
     */
    'impacted_systems_count': number;
    /**
     *
     * @type {boolean}
     * @memberof Pathway
     */
    'reboot_required': boolean;
    /**
     *
     * @type {boolean}
     * @memberof Pathway
     */
    'has_incident': boolean;
    /**
     *
     * @type {Array<RuleCategory>}
     * @memberof Pathway
     */
    'categories': Array<RuleCategory>;
    /**
     *
     * @type {number}
     * @memberof Pathway
     */
    'recommendation_level': number;
    /**
     *
     * @type {number}
     * @memberof Pathway
     */
    'incident_count': number;
    /**
     *
     * @type {number}
     * @memberof Pathway
     */
    'critical_risk_count': number;
    /**
     *
     * @type {number}
     * @memberof Pathway
     */
    'high_risk_count': number;
    /**
     *
     * @type {number}
     * @memberof Pathway
     */
    'medium_risk_count': number;
    /**
     *
     * @type {number}
     * @memberof Pathway
     */
    'low_risk_count': number;
}
/**
 * Serializer specifically for handling CREATE and UPDATE views for Pathways
 * @export
 * @interface PathwayInput
 */
export interface PathwayInput {
    /**
     *
     * @type {string}
     * @memberof PathwayInput
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof PathwayInput
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof PathwayInput
     */
    'component': string;
    /**
     *
     * @type {string}
     * @memberof PathwayInput
     */
    'resolution_risk': string;
    /**
     *
     * @type {string}
     * @memberof PathwayInput
     */
    'publish_date': string;
}
/**
 * User preferences - separated from account settings.
 * @export
 * @interface PreferencesInput
 */
export interface PreferencesInput {
    /**
     *
     * @type {boolean}
     * @memberof PreferencesInput
     */
    'is_subscribed': boolean;
}
/**
 * The actual rule fields with the report data for a particular system rendered into them, in a flat structure that\'s easier to use.
 * @export
 * @interface RenderedReport
 */
export interface RenderedReport {
    /**
     *
     * @type {string}
     * @memberof RenderedReport
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof RenderedReport
     */
    'summary': string;
    /**
     *
     * @type {string}
     * @memberof RenderedReport
     */
    'generic': string;
    /**
     *
     * @type {string}
     * @memberof RenderedReport
     */
    'reason': string;
    /**
     *
     * @type {string}
     * @memberof RenderedReport
     */
    'more_info'?: string;
    /**
     *
     * @type {string}
     * @memberof RenderedReport
     */
    'resolution': string;
}
/**
 *
 * @export
 * @interface Report
 */
export interface Report {
    /**
     *
     * @type {Rule}
     * @memberof Report
     */
    'rule': Rule;
    /**
     *
     * @type {any}
     * @memberof Report
     */
    'details': any;
    /**
     *
     * @type {Resolution}
     * @memberof Report
     */
    'resolution': Resolution;
    /**
     *
     * @type {string}
     * @memberof Report
     */
    'impacted_date': string;
}
/**
 * Report information for export.  Based on CurrentReport with fields from Rule and Host pulled through for convenience.
 * @export
 * @interface ReportExport
 */
export interface ReportExport {
    /**
     *
     * @type {string}
     * @memberof ReportExport
     */
    'rule_id': string;
    /**
     *
     * @type {string}
     * @memberof ReportExport
     */
    'host_id': string;
    /**
     *
     * @type {string}
     * @memberof ReportExport
     */
    'reports_url': string;
    /**
     *
     * @type {string}
     * @memberof ReportExport
     */
    'report_time': string;
    /**
     *
     * @type {any}
     * @memberof ReportExport
     */
    'details': any;
    /**
     *
     * @type {string}
     * @memberof ReportExport
     */
    'impacted_date': string | null;
}
/**
 *
 * @export
 * @interface Resolution
 */
export interface Resolution {
    /**
     *
     * @type {number}
     * @memberof Resolution
     */
    'system_type': number;
    /**
     *
     * @type {string}
     * @memberof Resolution
     */
    'resolution': string;
    /**
     *
     * @type {ResolutionRisk}
     * @memberof Resolution
     */
    'resolution_risk': ResolutionRisk;
    /**
     *
     * @type {boolean}
     * @memberof Resolution
     */
    'has_playbook': boolean;
}
/**
 *
 * @export
 * @interface ResolutionRisk
 */
export interface ResolutionRisk {
    /**
     *
     * @type {string}
     * @memberof ResolutionRisk
     */
    'name'?: string;
    /**
     *
     * @type {number}
     * @memberof ResolutionRisk
     */
    'risk'?: number;
}
/**
 * The standard rule information.  Used for models and relations that don\'t know the account and therefore can\'t know the acks or impacted systems.
 * @export
 * @interface Rule
 */
export interface Rule {
    /**
     * Rule ID from Insights
     * @type {string}
     * @memberof Rule
     */
    'rule_id': string;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'updated_at': string;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'deleted_at'?: string;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'description': string;
    /**
     *
     * @type {boolean}
     * @memberof Rule
     */
    'active'?: boolean;
    /**
     *
     * @type {RuleCategory}
     * @memberof Rule
     */
    'category': RuleCategory;
    /**
     *
     * @type {RuleImpact}
     * @memberof Rule
     */
    'impact': RuleImpact;
    /**
     *
     * @type {number}
     * @memberof Rule
     */
    'likelihood'?: number;
    /**
     * KCS solution number
     * @type {string}
     * @memberof Rule
     */
    'node_id'?: string;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'tags': string;
    /**
     *
     * @type {boolean}
     * @memberof Rule
     */
    'reboot_required'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'publish_date'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'summary': string;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'generic': string;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'reason': string;
    /**
     *
     * @type {string}
     * @memberof Rule
     */
    'more_info'?: string;
    /**
     *
     * @type {Array<Resolution>}
     * @memberof Rule
     */
    'resolution_set': Array<Resolution>;
    /**
     *
     * @type {number}
     * @memberof Rule
     */
    'total_risk'?: number;
}
/**
 *
 * @export
 * @interface RuleCategory
 */
export interface RuleCategory {
    /**
     *
     * @type {number}
     * @memberof RuleCategory
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof RuleCategory
     */
    'name': string;
}
/**
 * Rule information for export.
 * @export
 * @interface RuleExport
 */
export interface RuleExport {
    /**
     * Rule ID from Insights
     * @type {string}
     * @memberof RuleExport
     */
    'rule_id': string;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'updated_at': string;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'deleted_at': string | null;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'description': string;
    /**
     *
     * @type {boolean}
     * @memberof RuleExport
     */
    'active'?: boolean;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'category': string;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'impact': string;
    /**
     *
     * @type {number}
     * @memberof RuleExport
     */
    'likelihood'?: number;
    /**
     * KCS solution number
     * @type {string}
     * @memberof RuleExport
     */
    'node_id'?: string;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'tags': string;
    /**
     *
     * @type {number}
     * @memberof RuleExport
     */
    'playbook_count': number;
    /**
     *
     * @type {boolean}
     * @memberof RuleExport
     */
    'reboot_required'?: boolean;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'publish_date'?: string | null;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'summary': string;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'generic': string;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'reason': string;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'more_info'?: string;
    /**
     *
     * @type {number}
     * @memberof RuleExport
     */
    'impacted_systems_count': number;
    /**
     *
     * @type {string}
     * @memberof RuleExport
     */
    'rule_status': string;
    /**
     *
     * @type {Array<Resolution>}
     * @memberof RuleExport
     */
    'resolution_set': Array<Resolution>;
    /**
     *
     * @type {number}
     * @memberof RuleExport
     */
    'total_risk'?: number;
    /**
     *
     * @type {number}
     * @memberof RuleExport
     */
    'hosts_acked_count': number;
    /**
     *
     * @type {number}
     * @memberof RuleExport
     */
    'rating': number;
    /**
     *
     * @type {boolean}
     * @memberof RuleExport
     */
    'reports_shown': boolean;
}
/**
 * Rule information when we know the account, and therefore can calculate the number of impacted systems and the reports_shown/rule_status flags. We have to declare those explicitly here because they\'re not part of the model.
 * @export
 * @interface RuleForAccount
 */
export interface RuleForAccount {
    /**
     * Rule ID from Insights
     * @type {string}
     * @memberof RuleForAccount
     */
    'rule_id': string;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'created_at': string;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'updated_at': string;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'deleted_at'?: string;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'description': string;
    /**
     *
     * @type {boolean}
     * @memberof RuleForAccount
     */
    'active'?: boolean;
    /**
     *
     * @type {RuleCategory}
     * @memberof RuleForAccount
     */
    'category': RuleCategory;
    /**
     *
     * @type {RuleImpact}
     * @memberof RuleForAccount
     */
    'impact': RuleImpact;
    /**
     *
     * @type {number}
     * @memberof RuleForAccount
     */
    'likelihood'?: number;
    /**
     * KCS solution number
     * @type {string}
     * @memberof RuleForAccount
     */
    'node_id'?: string;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'tags': string;
    /**
     *
     * @type {number}
     * @memberof RuleForAccount
     */
    'playbook_count': number;
    /**
     *
     * @type {boolean}
     * @memberof RuleForAccount
     */
    'reboot_required'?: boolean;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'publish_date'?: string | null;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'summary': string;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'generic': string;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'reason': string;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'more_info'?: string;
    /**
     *
     * @type {number}
     * @memberof RuleForAccount
     */
    'impacted_systems_count': number;
    /**
     *
     * @type {boolean}
     * @memberof RuleForAccount
     */
    'reports_shown': boolean;
    /**
     *
     * @type {string}
     * @memberof RuleForAccount
     */
    'rule_status': string;
    /**
     *
     * @type {Array<Resolution>}
     * @memberof RuleForAccount
     */
    'resolution_set': Array<Resolution>;
    /**
     *
     * @type {number}
     * @memberof RuleForAccount
     */
    'total_risk'?: number;
    /**
     *
     * @type {number}
     * @memberof RuleForAccount
     */
    'hosts_acked_count': number;
    /**
     *
     * @type {number}
     * @memberof RuleForAccount
     */
    'rating': number;
    /**
     *
     * @type {RulePathway}
     * @memberof RuleForAccount
     */
    'pathway'?: RulePathway;
}
/**
 *
 * @export
 * @interface RuleImpact
 */
export interface RuleImpact {
    /**
     *
     * @type {string}
     * @memberof RuleImpact
     */
    'name'?: string;
    /**
     *
     * @type {number}
     * @memberof RuleImpact
     */
    'impact'?: number;
}
/**
 *
 * @export
 * @interface RulePathway
 */
export interface RulePathway {
    /**
     *
     * @type {string}
     * @memberof RulePathway
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RulePathway
     */
    'component': string;
    /**
     *
     * @type {ResolutionRisk}
     * @memberof RulePathway
     */
    'resolution_risk': ResolutionRisk;
}
/**
 * Rule ratings list the rating (-1, 0 or +1) for one or more rules.  The rule is listed by its Insights Rule ID.
 * @export
 * @interface RuleRating
 */
export interface RuleRating {
    /**
     * Rule ID from Insights
     * @type {string}
     * @memberof RuleRating
     */
    'rule': string;
    /**
     * * `-1` - Dislike * `0` - Neutral * `1` - Like
     * @type {number}
     * @memberof RuleRating
     */
    'rating': RuleRatingRatingEnum;
}

export const RuleRatingRatingEnum = {
    NUMBER_MINUS_1: -1,
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;

export type RuleRatingRatingEnum = typeof RuleRatingRatingEnum[keyof typeof RuleRatingRatingEnum];

/**
 * Output of statistics view of rule ratings - rule ID and totals of ratings.
 * @export
 * @interface RuleRatingStats
 */
export interface RuleRatingStats {
    /**
     *
     * @type {string}
     * @memberof RuleRatingStats
     */
    'rule': string;
    /**
     *
     * @type {number}
     * @memberof RuleRatingStats
     */
    'total_ratings': number;
    /**
     *
     * @type {number}
     * @memberof RuleRatingStats
     */
    'total_positive': number;
    /**
     *
     * @type {number}
     * @memberof RuleRatingStats
     */
    'total_negative': number;
}
/**
 * List of systems with current reports for each rule.
 * @export
 * @interface RuleSystemsExport
 */
export interface RuleSystemsExport {
    /**
     *
     * @type {{ [key: string]: Array<string>; }}
     * @memberof RuleSystemsExport
     */
    'rules': { [key: string]: Array<string>; };
}
/**
 * Rule usage statistics for rule developers.
 * @export
 * @interface RuleUsageStats
 */
export interface RuleUsageStats {
    /**
     *
     * @type {string}
     * @memberof RuleUsageStats
     */
    'rule_id': string;
    /**
     *
     * @type {string}
     * @memberof RuleUsageStats
     */
    'description': string;
    /**
     *
     * @type {boolean}
     * @memberof RuleUsageStats
     */
    'active': boolean;
    /**
     *
     * @type {number}
     * @memberof RuleUsageStats
     */
    'systems_hit': number;
    /**
     *
     * @type {number}
     * @memberof RuleUsageStats
     */
    'accounts_hit': number;
    /**
     *
     * @type {number}
     * @memberof RuleUsageStats
     */
    'accounts_acked': number;
}
/**
 * Outputs the description of the settings in a Data-Driven Forms format.
 * @export
 * @interface SettingDDF
 */
export interface SettingDDF {
    /**
     *
     * @type {string}
     * @memberof SettingDDF
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof SettingDDF
     */
    'label'?: string;
    /**
     *
     * @type {string}
     * @memberof SettingDDF
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof SettingDDF
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof SettingDDF
     */
    'helperText'?: string;
    /**
     *
     * @type {string}
     * @memberof SettingDDF
     */
    'component': string;
    /**
     *
     * @type {boolean}
     * @memberof SettingDDF
     */
    'isRequired': boolean;
    /**
     *
     * @type {boolean}
     * @memberof SettingDDF
     */
    'initialValue': boolean;
    /**
     *
     * @type {boolean}
     * @memberof SettingDDF
     */
    'isDisabled': boolean;
}
/**
 * Combining the DDF fields into one \'fields\' object.
 * @export
 * @interface SettingsDDF
 */
export interface SettingsDDF {
    /**
     *
     * @type {Array<SettingDDF>}
     * @memberof SettingsDDF
     */
    'fields': Array<SettingDDF>;
}
/**
 * Advisor rule or report frequency statisics.
 * @export
 * @interface Stats
 */
export interface Stats {
    /**
     *
     * @type {number}
     * @memberof Stats
     */
    'total': number;
    /**
     *
     * @type {{ [key: string]: number; }}
     * @memberof Stats
     */
    'total_risk': { [key: string]: number; };
    /**
     *
     * @type {{ [key: string]: number; }}
     * @memberof Stats
     */
    'category': { [key: string]: number; };
}
/**
 *
 * @export
 * @interface SubscriptionExcludedAccount
 */
export interface SubscriptionExcludedAccount {
    /**
     *
     * @type {string}
     * @memberof SubscriptionExcludedAccount
     */
    'org_id': string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionExcludedAccount
     */
    'account'?: string;
}
/**
 *
 * @export
 * @interface System
 */
export interface System {
    /**
     *
     * @type {string}
     * @memberof System
     */
    'system_uuid': string;
    /**
     *
     * @type {string}
     * @memberof System
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof System
     */
    'last_seen': string;
    /**
     *
     * @type {string}
     * @memberof System
     */
    'stale_at': string;
    /**
     *
     * @type {number}
     * @memberof System
     */
    'hits': number;
    /**
     *
     * @type {number}
     * @memberof System
     */
    'critical_hits': number;
    /**
     *
     * @type {number}
     * @memberof System
     */
    'important_hits': number;
    /**
     *
     * @type {number}
     * @memberof System
     */
    'moderate_hits': number;
    /**
     *
     * @type {number}
     * @memberof System
     */
    'low_hits': number;
    /**
     *
     * @type {number}
     * @memberof System
     */
    'incident_hits': number;
    /**
     *
     * @type {number}
     * @memberof System
     */
    'all_pathway_hits': number;
    /**
     *
     * @type {number}
     * @memberof System
     */
    'pathway_filter_hits': number;
    /**
     *
     * @type {string}
     * @memberof System
     */
    'rhel_version': string;
    /**
     *
     * @type {string}
     * @memberof System
     */
    'group_name': string | null;
}
/**
 * RHN-based system types classified by role and product code.
 * @export
 * @interface SystemType
 */
export interface SystemType {
    /**
     *
     * @type {number}
     * @memberof SystemType
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof SystemType
     */
    'role': string;
    /**
     *
     * @type {string}
     * @memberof SystemType
     */
    'product_code': string;
}
/**
 *
 * @export
 * @interface SystemsDetail
 */
export interface SystemsDetail {
    /**
     *
     * @type {string}
     * @memberof SystemsDetail
     */
    'system_uuid': string;
    /**
     *
     * @type {string}
     * @memberof SystemsDetail
     */
    'display_name': string;
    /**
     *
     * @type {string}
     * @memberof SystemsDetail
     */
    'last_seen': string;
    /**
     *
     * @type {string}
     * @memberof SystemsDetail
     */
    'stale_at': string;
    /**
     *
     * @type {number}
     * @memberof SystemsDetail
     */
    'hits': number;
    /**
     *
     * @type {number}
     * @memberof SystemsDetail
     */
    'critical_hits': number;
    /**
     *
     * @type {number}
     * @memberof SystemsDetail
     */
    'important_hits': number;
    /**
     *
     * @type {number}
     * @memberof SystemsDetail
     */
    'moderate_hits': number;
    /**
     *
     * @type {number}
     * @memberof SystemsDetail
     */
    'low_hits': number;
    /**
     *
     * @type {number}
     * @memberof SystemsDetail
     */
    'incident_hits': number;
    /**
     *
     * @type {number}
     * @memberof SystemsDetail
     */
    'all_pathway_hits': number;
    /**
     *
     * @type {number}
     * @memberof SystemsDetail
     */
    'pathway_filter_hits': number;
    /**
     *
     * @type {string}
     * @memberof SystemsDetail
     */
    'rhel_version': string;
    /**
     *
     * @type {string}
     * @memberof SystemsDetail
     */
    'impacted_date': string;
}
/**
 * The list of Inventory Host IDs that are (currently) affected by a given rule.
 * @export
 * @interface SystemsForRule
 */
export interface SystemsForRule {
    /**
     *
     * @type {Array<string>}
     * @memberof SystemsForRule
     */
    'host_ids': Array<string>;
}
/**
 * Topics group rules by a tag shared by all the rules.
 * @export
 * @interface Topic
 */
export interface Topic {
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    'name': string;
    /**
     * Rule topic slug
     * @type {string}
     * @memberof Topic
     */
    'slug': string;
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof Topic
     */
    'tag': string;
    /**
     *
     * @type {boolean}
     * @memberof Topic
     */
    'featured'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Topic
     */
    'enabled'?: boolean;
    /**
     *
     * @type {number}
     * @memberof Topic
     */
    'impacted_systems_count': number;
}
/**
 * Create or edit topics.
 * @export
 * @interface TopicEdit
 */
export interface TopicEdit {
    /**
     *
     * @type {string}
     * @memberof TopicEdit
     */
    'name': string;
    /**
     * Rule topic slug
     * @type {string}
     * @memberof TopicEdit
     */
    'slug': string;
    /**
     *
     * @type {string}
     * @memberof TopicEdit
     */
    'description': string;
    /**
     *
     * @type {string}
     * @memberof TopicEdit
     */
    'tag': string;
    /**
     *
     * @type {boolean}
     * @memberof TopicEdit
     */
    'featured'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TopicEdit
     */
    'enabled'?: boolean;
}
/**
 * An approximation of the number of unique hits per day.
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     *
     * @type {number}
     * @memberof Usage
     */
    'unique_hits': number;
}
/**
 *
 * @export
 * @interface WeeklyReportSubscription
 */
export interface WeeklyReportSubscription {
    /**
     *
     * @type {boolean}
     * @memberof WeeklyReportSubscription
     */
    'is_subscribed': boolean;
}
