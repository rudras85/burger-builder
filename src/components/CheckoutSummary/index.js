import React from 'react';

import Burger from '../Burger';
import Button from '../UI/Button';

import classes from './index.css';

export default (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope you like it!</h1>
            <div style={{width: '100%', height:'300px', margin:'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked={props.cancelCheckout} type="Danger">Cancel</Button>
            <Button clicked={props.continueCheckout} type="Success">Continue</Button>
        </div>
    );
}