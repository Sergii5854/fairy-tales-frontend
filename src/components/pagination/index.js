// @flow

import React from 'react';

const Page = ({page, current, onClick}: { page: string | number, current: boolean, onClick: () => void }) => {
    return (
        <li style={{listStyleType: 'none', display: 'inline', padding: '0 5px'}}>
            {current ?
                page : (
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        onClick();
                    }}>
                        {page}
                    </a>
                )
            }
        </li>
    );
};

Page.defaultProps = {
    onClick: () => undefined
};

const Separator = () => <Page page="..." current={true}/>;

type Props = {
    totalPages: number,
    currentPage: number,
    onChange: (to: number, from: number) => void
};

const Pagination = ({totalPages, currentPage, onChange}: Props) => {
    if (totalPages > 1) {
        const arr = [];
        if (totalPages - 2 > 3) {
            if (currentPage - 1 > 1 && currentPage + 1 < totalPages) {
                arr.push(currentPage - 1, currentPage, currentPage + 1);
            }
            if (currentPage - 1 <= 1) {
                for (let i = 2; i <= 4; i++) {
                    arr.push(i);
                }
            }
            if (currentPage + 1 >= totalPages) {
                for (let i = totalPages - 3; i < totalPages; i++) {
                    arr.push(i);
                }
            }
        } else {
            for (let i = 2; i < totalPages; i++) {
                arr.push(i);
            }
        }

        return (
            <ul style={{margin: '0'}}>
                <Page
                    page={1}
                    current={1 === currentPage}
                    onClick={() => onChange(1, currentPage)}
                />
                {currentPage > 3 && totalPages > 5 ? <Separator/> : null}
                {arr.map(page => (
                    <Page
                        key={page}
                        page={page}
                        current={currentPage === page}
                        onClick={() => onChange(page, currentPage)}
                    />
                ))}
                {currentPage <= totalPages - 3 && totalPages > 5 ? <Separator/> : null}
                <Page
                    page={totalPages}
                    current={totalPages === currentPage}
                    onClick={() => onChange(totalPages, currentPage)}
                />
            </ul>
        );
    }
    return null;
};

Pagination.defaultProps = {
    currentPage: 1,
    onChange: (to: number, from: number) => undefined
};

export default Pagination;