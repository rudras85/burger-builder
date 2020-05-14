import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

import classes from './index.css';

export default (props) => {

    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}