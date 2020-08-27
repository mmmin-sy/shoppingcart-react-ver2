import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

//여기 내부에서 쓰는거면 export안써도되는데 이건 외부에서 쓰이니까 export써야함 
export const fetchProducts = () => dispatch => {
    return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          dispatch({
              type: types.SET_PRODUCT,
              products
          })
          resolve()
        })
    })
}

export const addProductToCart = (cartItems, product) => dispatch => {
    //if (rootGetters['products/productIsInStock'](product)) {
        const exist = cartItems.find(item => item.id === product.id)
        if (!exist) {
            dispatch({
                type: types.PUSH_PRODUCT_TO_CART,
                product
            })
        } else {
            dispatch({
                type: types.INCREMENT_ITEM_QUANTITY,
                id: exist.id
            })
        }
        dispatch({
            type: types.DECREMENT_PRODUCT_INVENTORY,
            product
        }) 
    //}
}

export const checkout = (cartItems) => dispatch => {
    shop.buyProducts(
        cartItems,
        () => {
            dispatch({
                type: types.EMPTY_CART
            })
            dispatch({
                type: types.SET_CHECKOUT_STATUS,
                result: 'success'
            })
        },
        () => {
            dispatch({
                type: types.SET_CHECKOUT_STATUS,
                result: 'fail'
            })
        }   
    )
}