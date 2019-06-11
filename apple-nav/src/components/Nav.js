import React from 'react';
import SubNav from './SubNav';

const Nav = props => {
    return (
        <div>
            <p>{props.navItem.subnav.map(item => <SubNav subNav={item}/>)}</p>
        </div>
    );
}

export default Nav;