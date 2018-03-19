import React, {Component} from 'react';
import './styles.styl';

import Search from './search/'

const Header = () => {


    return (
        <header className={`header`}>
            <Search/>
        </header>
    );

};

export default Header;
