import React from 'react';
import classes from './index.css';
import BuildControl from './BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
]

export default (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: {props.price.toFixed(2)}</p>
        {controls.map( ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.addIngredientHanlder(ctrl.type)}
                removed={() => props.removeIngredientHandler(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
    </div>
);