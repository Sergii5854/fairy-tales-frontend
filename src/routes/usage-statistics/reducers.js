// @flow

import {
    GET_USAGE_STATISTICS_REQUEST,
    GET_USAGE_STATISTICS_SUCCESS,
    GET_USAGE_STATISTICS_FAILURE
} from './constants';
import type {UsageStatisticsState} from './typedef';
import type {StatItem} from './typedef';

const DEFAULT_STATE: UsageStatisticsState = {
    pending: false,
    loaded: false,
    data: []
};

type Action =
    | { type: 'GET_USAGE_STATISTICS_REQUEST' }
    | { type: 'GET_USAGE_STATISTICS_SUCCESS', response: Array<StatItem> }
    | { type: 'GET_USAGE_STATISTICS_FAILURE', error: string };

export default (state: UsageStatisticsState = DEFAULT_STATE, action: Action): UsageStatisticsState => {
    if (action.type === GET_USAGE_STATISTICS_REQUEST) {
        return {
            ...state,
            pending: true
        };
    }

    if (action.type === GET_USAGE_STATISTICS_SUCCESS) {
        return {
            ...state,
            data: action.response,
            pending: false,
            loaded: true
        };
    }

    if (action.type === GET_USAGE_STATISTICS_FAILURE) {
        return {
            ...state,
            data: [],
            pending: false,
            loaded: false
        };
    }

    return state;
};
