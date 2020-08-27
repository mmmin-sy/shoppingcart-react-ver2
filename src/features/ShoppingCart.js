import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkout } from '../actions'

class ShoppingCart extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.cartItems)
        return (
            <div>
                <h1>Shopping Cart</h1>
                <ul>
                    {
                        this.props.cartItems.map( m => 
                        <li key={m.id}>{m.title} - {m.price} - {m.quantity}</li>)
                    }
                </ul>

                <p>Total: {this.props.cartTotal}</p>
                <button onClick={()=> {this.props.checkout(this.props.cartItems)}}>Checkout</button>
                <p>{this.props.checkoutStatus}</p>
            </div>
        )
    }

}
export default connect(
    (state) => ({
    cartItems: state.cart.cartItems,
    cartTotal: state.cart.cartItems.reduce((total, cart) => total + cart.price * cart.quantity, 0),
    checkoutStatus: state.cart.checkoutStatus
}),{ checkout })(ShoppingCart);