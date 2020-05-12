import React, { Component } from 'react';

import Aux from '../../hoc/_aux';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

const INGRENDIENT_PRICES = { salad: 0.5 , meat: 1.0, cheese: 0.5,bacon: 0.7 };

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    addIngredientHanlder = (type) => {
        const updatedIngredients = { ...this.state.ingredients }
        const updatedCount = updatedIngredients[type]+1;
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + INGRENDIENT_PRICES[type];
        const sum = Object.keys(updatedIngredients).map(item => { return updatedIngredients[item]}).reduce((sum, ele) => { return sum+ele}, 0);
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice, purchasable: sum > 0});
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients }
        const updatedCount = updatedIngredients[type]-1;
        if (updatedCount < 0) return;
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice - INGRENDIENT_PRICES[type];
        const sum = Object.keys(updatedIngredients).map(item => { return updatedIngredients[item]}).reduce((sum, ele) => { return sum+ele}, 0);
    
        this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice, purchasable: sum > 0});
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return (
            <Aux>
                <div>
                    <Burger ingredients = {this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls 
                        addIngredientHanlder={this.addIngredientHanlder}
                        removeIngredientHandler={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}/>
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder;