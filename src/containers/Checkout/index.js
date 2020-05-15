import React, {Component} from 'react';

import CheckoutSummary from '../../components/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1
        }
    }

    continueCheckout = () => {
        this.props.history.push("/checkout-contact-data");
    }

    cancelCheckout = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = [];
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    continueCheckout={this.continueCheckout}
                    cancelCheckout={this.cancelCheckout} />
            </div>
        );
    }    
}

export default Checkout;