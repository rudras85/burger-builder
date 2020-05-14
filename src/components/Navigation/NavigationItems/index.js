import React from 'react';

import classes from './index.css';
import NavigationItem from './NavigationItem';

export default (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>

    </ul>
);
