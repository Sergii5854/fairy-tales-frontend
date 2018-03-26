// @flow

import {CALL_API, get} from '../../api';
import {
    GET_USAGE_STATISTICS_REQUEST,
    GET_USAGE_STATISTICS_SUCCESS,
    GET_USAGE_STATISTICS_FAILURE
} from './constants';

const LIMIT = 1000;

export const getUsageStatistics = () => (dispatch, getState) => {
    const {loaded, pending} = getState().usageStatistics;

    if (loaded || pending) {
        return null;
    }

    return dispatch({
        [CALL_API]: {
            types: [
                GET_USAGE_STATISTICS_REQUEST,
                GET_USAGE_STATISTICS_SUCCESS,
                GET_USAGE_STATISTICS_FAILURE
            ],
            endpoint: () => get('usage-statistics', {l: LIMIT})
        }
    });
};