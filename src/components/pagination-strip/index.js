// @flow

import React from 'react';
import Pagination from '../pagination';

type Props = {
    totalCount: number,
    currentPage: number,
    pageSize: number,
    onChange: (currentPage: number, pageSize: number) => void
};

export const SIZES = [5, 10, 25, 50, 100, 250];

const PaginationStrip = ({totalCount, currentPage, pageSize, onChange}: Props) => (
    <div>
        <select onChange={event => onChange(1, +event.target.value)} value={pageSize}>
            {SIZES.map(size => <option key={size} value={size}>{size}</option>)}
        </select>
        <div style={{float: 'right'}}>
            <Pagination
                totalPages={Math.ceil(totalCount / pageSize)}
                currentPage={currentPage}
                onChange={to => onChange(to, pageSize)}
            />
        </div>
    </div>
);

PaginationStrip.defaultProps = {
    pageSize: 10,
    onChange: () => undefined
};

export default PaginationStrip;