import React from 'react';

import classes from './index.css';

export default (props) => (
    <li className={classes.NavigationItem}>
        <a 
            href="/"
            className={props.active ? classes.active : null}
        >
            {props.children}
        </a>
    </li>
)