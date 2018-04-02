import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.styl';
import logo from './logo.png'

const Sidebar = () => {
    return(

        <ul id="menu-links"
                className={`sidebar__ul `}>
                <img
                  src={logo}
                  alt="logo"
                />
                <li>
                    <NavLink to="/fairytales">Всі казки</NavLink>
                </li>
                {/*<li>*/}
                    {/*<NavLink to="/beloved">Улюблені</NavLink>*/}
                {/*</li>*/}
                <li>
                    <NavLink to="/audio-fairy-tales">Аудіо казки</NavLink>
                </li>
                <li>
                    <NavLink to="/folk">Народні</NavLink>
                </li>
                <li>
                    <NavLink to="/author">Авторські</NavLink>
                </li>
                <li>
                    <NavLink to="/lullabies">Колискові</NavLink>
                </li>
                <li>
                    <NavLink to="/recent-uploaded">Останні завантаженні</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/registration">Registration</NavLink>
                </li>
                <li>
                    <NavLink to="/fairytales-admin">Admin</NavLink>
                </li>
            </ul>
    )
}

export default Sidebar;
