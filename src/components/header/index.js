import React from 'react';
import './styles.styl';

const Header = ({title, subTitle,background}) => {

    console.dir(title);
    return (
        <header className="header" style={{background:`${background}`}}>
        <h1 >{title}</h1>
        <h3>{subTitle}</h3>
        </header>

    );

};

export default Header;
