// @flow

import React, {Component} from 'react';

import css_colors from './css_colors';
import {connect} from 'react-redux';
import {getUsageStatistics} from '../actions';
import type {StatItem} from "../typedef";

type Props = {
    data: Array<StatItem>,
    getUsageStatistics: () => void
};

type State = {
    list: Array<{
        value: number,
        percentage: number,
        description: string
    }>
};

const OTHER_THRESHOLD = 1;

const grabProps = ({data}: Props) => {
    const mappedData = data
        .map(({screenWidth, screenHeight}) => `${screenWidth}x${screenHeight}`)
        .reduce((memo, resolution) => {
            const found = memo.find(i => i.resolution === resolution) || {resolution, count: 0};
            return [...memo.filter(i => i.resolution !== resolution), {
                resolution,
                count: found.count + 1
            }];
        }, []);

    const total = mappedData.reduce((memo, item) => memo + item.count, 0);

    let list = mappedData
        .map(({count, resolution}) => ({
            value: count,
            percentage: count / total * 100,
            description: resolution
        }))
        .sort((a, b) => b.percentage - a.percentage);

    const lessThanThreshold = list.filter(item => item.percentage < OTHER_THRESHOLD);

    if (lessThanThreshold.length > 1) {
        list = list.filter(item => item.percentage >= OTHER_THRESHOLD);

        list.push(lessThanThreshold.reduce((memo, item) => {
            memo.value += item.value;
            memo.percentage += item.percentage;
            return memo;
        }, {
            value: 0,
            percentage: 0,
            description: 'Other'
        }));
    }
    return {list};
};

class Chart extends Component<Props, State> {
    canvas: ?HTMLCanvasElement;

    constructor(props: Props) {
        super(props);

        this.state = {
            ...grabProps(props)
        };
    }

    componentDidMount() {
        this.props.getUsageStatistics();
        this.draw();
    }

    componentWillReceiveProps(newProps: Props) {
        if (newProps.data !== this.props.data) {
            this.setState(grabProps(newProps));
        }
    }

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return this.state.list !== nextState.list;
    }

    render() {
        return (
            <canvas
                style={{width: '750px', height: '500px'}}
                width={1500}
                height={1000}
                ref={canvas => this.canvas = canvas}
            />
        )
    }

    componentDidUpdate() {
        this.draw();
    }

    draw() {
        const {list} = this.state;

        if (this.canvas && list.length) {
            const ctx = this.canvas.getContext('2d');
            ctx.scale(2, 2);

            let startAngle = 0, colors = css_colors.slice();
            list.forEach((item, index, list) => {
                // sector
                ctx.beginPath();
                ctx.fillStyle = colors.splice(Math.round(Math.random() * (colors.length - 1)), 1)[0];
                ctx.moveTo(250, 250);
                ctx.arc(250, 250, 200, startAngle, startAngle -= item.percentage * Math.PI / 50, true);
                ctx.lineTo(250, 250);
                ctx.fill();

                // legend
                const lHeight = 500 / list.length;
                ctx.fillRect(500, lHeight * index + (lHeight - 15) / 2, 15, 15);
                ctx.fillStyle = '#000';
                ctx.fillText(
                    item.description + ' (' + item.percentage.toFixed(2) + '%)',
                    520,
                    lHeight * index + (lHeight - 15) / 2 + 10
                );
            });
        }
    }
}


export default connect(state => ({data: state.usageStatistics.data}), {getUsageStatistics})(Chart);