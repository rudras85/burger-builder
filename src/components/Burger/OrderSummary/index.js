import React from 'react';

import Aux from '../../../hoc/_aux';

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
            <p>Continue to checkout?</p>
        </Aux>
    )
}