import React from 'react';
import Pagination from '../pagination';
import './styles.styl';


export const SIZES = [5, 10, 25, 50, 100];

const PaginationStrip = ({totalCount, currentPage, pageSize, onChange}) => (
    <div className="pagination__strip-wrap ">
        <select className="pagination__strip "  onChange={event => onChange(1, +event.target.value)} value={pageSize}>
            {SIZES.map(size => <option key={size} value={size}>{size}</option>)}
        </select>
        <div className = "pagination-wrapper">
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