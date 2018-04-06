import React from 'react';
import './styles.styl';
import logo from './logo.png'

const Header = ({title, subTitle,background}) => {
    const toggle = () => {
        var element = document.getElementById("menu-links");
        element.classList.toggle("open");
        document.getElementById("logo").classList.toggle("hidden");
        document.getElementById("menu").classList.toggle("open");
    };

    return (
        <header className="header" style={{background:`${background}`}}>
    <div id="nav-icon1" className="sidebar nav-wrapper">

        <div id="menu"
    onClick={() => toggle()}
    >
    <span></span>
    <span></span>
    <span></span>
    </div>
    </div>
    <div className="title-wrapper">
            <h2 className="title" >{title}</h2>
            <h3>{subTitle}</h3>
        </div>
        <a href= "/"><img
    id = "logo" 
    src={logo}
    alt="logo"
        /></a>
        </header>

    );

};

export default Header;
