import React from 'react';
import NavList from './NavList';
import { Link } from 'react-router-dom';

const NavWrapper = props => {
    return (
        <div>
            <Link to="/">NavWrapper</Link>
            {props.appleNav.map(item => <Link key={item.name} to={`${props.match.url}${item.name}`}><NavList navItem={item} key={item.name} /></Link>)}
        </div>
    );
}

export default NavWrapper;