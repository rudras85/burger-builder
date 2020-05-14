import React from 'react';

import classes from './index.css';
import Aux from '../../../hoc/_aux';
import Backdrop from '../Backdrop';

export default (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.closeModal} />
        <div 
            className={classes.Modal}
            style={{ 
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux>
    
)