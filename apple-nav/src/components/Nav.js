import React from 'react';
import SubNav from './SubNav';

const Nav = props => {
    return (
        <div>
            {props.navItem.subnav.map(item => <SubNav subNav={item} key={item} />)}
        </div>
    );
}

export default Nav;