import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, addProductToCart } from '../actions'

class ProductList extends Component {

    constructor(props){
        super(props)
        this.state ={
            isLoading: false,
            productIndex: 1
        }

    }
    componentDidMount(){
        this.setState({
            isLoading: true
        })

        this.props.fetchProducts()
        .then(() => {
            this.setState({
                isLoading: false
            })

        }
        )

    }

    render(){
        return (
            <div>
                <h1>Product List</h1>
                {
                    this.state.isLoading && <img src="https://i.imgur.com/JfPpwOA.gif" />
                }
                <ul>
                    {
                        this.props.products.map( m => <li key={m.id}>{m.title} - {m.price} - {m.inventory}
                            <button disabled={m.inventory > 0 ? false : true} onClick={()=>{this.props.addProductToCart(this.props.cartItems, m)}}>Add to Cart</button>
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
//값을 가져오는것
export default connect((state) => ({
    products: state.products.items,
    cartItems: state.cart.cartItems
}),{ fetchProducts,  addProductToCart } //위에 import에도 써야함 
)(ProductList);