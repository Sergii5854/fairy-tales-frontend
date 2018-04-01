import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.styl';
import logo from './logo.png'

const Sidebar = () => {
    
    return(

        <div id="nav-icon1" className="sidebar nav-wrapper z-depth-5">
            <div id="menu" >
                <span></span>
                <span></span>
                <span></span>
            </div>
              <img
                className="Brand"
                src={logo}
                alt="logo"
              />
            <ul id="menu-liks" className="sidebar__ul">
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
            </ul>
    </div>
    )
}

export default Sidebar;
