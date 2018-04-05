import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.styl';
import logo from './logo.png'

const Sidebar = () => {
    const toggle_nav = () => {
        var element = document.getElementById("menu-links");
        element.classList.remove("open");
        document.getElementById("menu").classList.toggle("open");
    };
    return(

        <ul id="menu-links"
                className={`sidebar__ul `}>
                <img
                  src={logo}
                  alt="logo"
                />
                <li>
                    <NavLink to="/fairytales"   onClick={() => toggle_nav()}>Всі казки</NavLink>
                </li>
                {/*<li>*/}
                    {/*<NavLink to="/beloved">Улюблені</NavLink>*/}
                {/*</li>*/}
                <li>
                    <NavLink to="/audio-fairy-tales"  onClick={() => toggle_nav()}>Аудіо казки</NavLink>
                </li>
                <li>
                    <NavLink to="/folk"  onClick={() => toggle_nav()}>Народні</NavLink>
                </li>
                <li>
                    <NavLink to="/author"  onClick={() => toggle_nav()}>Авторські</NavLink>
                </li>
                <li>
                    <NavLink to="/lullabies"  onClick={() => toggle_nav()}>Колискові</NavLink>
                </li>
                <li>
                    <NavLink to="/recent-uploaded"  onClick={() => toggle_nav()}>Останні завантаженні</NavLink>
                </li>
                {/*
                <li>
                    <NavLink to="/login"  onClick={() => toggle_nav()}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/registration"  onClick={() => toggle_nav()}>Registration</NavLink>
                </li>*/}

                <li>
                    <NavLink to="/login"  onClick={() => toggle_nav()}>Admin</NavLink>
                </li>
            </ul>
    )
}

export default Sidebar;
