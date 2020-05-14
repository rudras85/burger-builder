import React from 'react';

import classes from './index.css';

export default (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
)