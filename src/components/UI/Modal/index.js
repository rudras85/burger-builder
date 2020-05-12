import React from 'react';

import classes from './index.css';

export default (props) => (
    <div 
        className={classes.Modal}
        style={{ 
            transform: props.show ? 'translate(0)' : 'translateY(-100vh)',
            opacity: props.sow ? '1' : '0'
        }}
    >
        {props.children}
    </div>
)