import React from 'react';

import classes from './index.css';

export default (props) => (
    <button 
        className={[classes.Button, classes[props.type]].join(' ')}
        onClick={props.clicked}
    >
        {props.children}
    </button>
)