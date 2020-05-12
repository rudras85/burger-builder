import React from 'react';

import classes from './index.css';
import Ingredient from './Ingredients';


const burger = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <Ingredient key={key+i} type={key} />
            });
        }).reduce((arr, ele) => { return arr.concat(ele); }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    )
}

export default burger;