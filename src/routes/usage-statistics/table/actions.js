// @flow

import {SORT_USAGE_STATISTICS} from './constants';

export const sortUsageStatistics = (sortKey: string, sortOrderAsc: boolean) => dispatch => dispatch({
    type: SORT_USAGE_STATISTICS,
    sortKey,
    sortOrderAsc
});