import React from 'react';
import Nav from './Nav';
import { Link, Route } from 'react-router-dom';

const NavWrapper = props => {
    console.log(props)
    return (
        <div>
            <p>NavWrapper</p>
            {props.appleNav.map(item => <Link to={`${props.match.url}${item.name}`}><Nav navItem={item} /></Link>)}
        </div>
    );
}

export default NavWrapper;