// @flow

import {combineReducers} from 'redux';

import usageStatistics from '../routes/usage-statistics/reducers';
import sortUsageStatistics from '../routes/usage-statistics/table/reducers';

export default combineReducers({
    usageStatistics,
    sortUsageStatistics
});
