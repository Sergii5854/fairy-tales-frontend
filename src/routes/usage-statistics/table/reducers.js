// @flow

import {SORT_USAGE_STATISTICS} from './constants';

const DEFAULT_STATE = {
    sortKey: '#',
    sortOrderAsc: true
};

type Action = { type: 'SORT_USAGE_STATISTICS', sortKey: string, sortOrderAsc: boolean };

type State = {|
    sortKey: string,
    sortOrderAsc: boolean
|};

export default (state: State = DEFAULT_STATE, action: Action): State => {
    if (action.type === SORT_USAGE_STATISTICS) {
        const {sortKey, sortOrderAsc} = action;

        return {
            sortKey,
            sortOrderAsc
        };
    }

    return state;
};
