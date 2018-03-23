import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.styl';

const Sidebar = () => {
    return(
        <nav role="navigation">
        <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
            <ul id="menu" className="sidebar__ul">
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
            </ul>
    </div>
    </nav>
    )
}

export default Sidebar;