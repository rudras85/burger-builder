import React from 'react';

import Aux from '../../../hoc/_aux';
import Button from '../../UI/Button';

export default (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(key => {
            return <li><span style={{textTransform: "capitalize"}}>{key}</span>: {props.ingredients[key]}</li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p> <strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.cancelOrder}>Cancel</Button>
            <Button type="Success" clicked={props.continueOrder}>Continue</Button>
        </Aux>
    )
}