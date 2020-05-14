import React from 'react';

import classes from './index.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

export default (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <NavigationItems />
    </header>
);