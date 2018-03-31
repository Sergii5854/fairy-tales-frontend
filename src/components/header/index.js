import React from 'react';
import './styles.styl';
import logo from './logo.png'

const Header = ({title, subTitle,background}) => {

    return (
        <header className="header" style={{background:`${background}`}}>
        <div className="title-wrapper">
            <h1 >{title}</h1>
            <h3>{subTitle}</h3>
        </div>
        </header>

    );

};

export default Header;
