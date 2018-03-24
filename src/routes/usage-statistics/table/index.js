// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import DataTable from '../../../components/data-table';
import {getUsageStatistics} from '../actions';

import type {Data} from '../../../components/data-table';
import type {StatItem} from '../typedef';
import {sortUsageStatistics} from './actions';

type OwnProps = {};

type StateProps = {
    data: Array<StatItem>,
    sortKey: string,
    sortOrderAsc: boolean
};

type DispatchProps = {
    getUsageStatistics: () => void,
    sortUsageStatistics: (sortKey: string, sortOrderAsc: boolean) => void
};

type Props = OwnProps & StateProps & DispatchProps;

type State = {
    list: Data
};

const grabProps = (props: Props) => ({
    list: props.data.map((item, index) => ({
        '#': index + 1,
        'User Agent': item.userAgent,
        DPR: item.devicePixelRation,
        'Screen Width': item.screenWidth,
        'Screen Height': item.screenHeight,
        'Client Width': item.clientWidth,
        'Client Height': item.clientHeight,
        'Window Width': item.windowWidth,
        'Window Height': item.windowHeight,
        'Session Start Date': item.sessionStartDate,
        'Session End Date': item.sessionEndDate
    }))
});

class UsageStatisticsTable extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            ...grabProps(props)
        };
    }

    componentDidMount() {
        this.props.getUsageStatistics();
    }

    componentWillReceiveProps(newProps: Props) {
        if (newProps.data !== this.props.data) {
            this.setState(grabProps(newProps));
        }
    }

    render() {
        const {list} = this.state;
        const {sortKey, sortOrderAsc, sortUsageStatistics} = this.props;

        if (list.length === 0) {
            return 'Loading...';
        }

        return (
            <DataTable
                data={list}
                {...{sortKey, sortOrderAsc}}
                onSort={sortUsageStatistics}
            />
        )
    }
}

export default connect(state => ({
    data: state.usageStatistics.data,
    ...state.sortUsageStatistics
}), {
    getUsageStatistics,
    sortUsageStatistics
})(UsageStatisticsTable);