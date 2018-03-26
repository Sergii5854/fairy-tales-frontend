import React from 'react';
import './styles.styl';
import logo from './logo.png'

const Header = ({title, subTitle,background}) => {

    return (
        <header className="header" style={{background:`${background}`}}>
            <a href="/">
                <img
                    className="Brand"
                    src={logo}
                    alt="logo"/>
            </a>
        <h1 >{title}</h1>
        <h3>{subTitle}</h3>
        </header>

    );

};

export default Header;
