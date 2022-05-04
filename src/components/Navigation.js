import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink to="About" activeClassName="nav-active">
                A propos
            </NavLink>
            /*navigation to redirect them to wikipedia*/

        </div>
    );
};

export default Navigation;