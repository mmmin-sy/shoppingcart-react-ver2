import { PUSH_PRODUCT_TO_CART, INCREMENT_ITEM_QUANTITY, EMPTY_CART, SET_CHECKOUT_STATUS } from '../constants/ActionTypes'

const initialState = {
    cartItems: [],
    checkoutStatus: null
}

const cart = (state = initialState, action) => { //initialState.items이 그룹은 iteams 만 다룬다.
    switch(action.type) {
        case PUSH_PRODUCT_TO_CART:
            return { ...state, cartItems:[...state.cartItems, {
                id: action.product.id,
                title: action.product.title,
                price: action.product.price,
                quantity : 1
            }] }
            //cartItems가 변경되야 UI 에서도 그려준다.. state를 리턴하지않고, 
            // cartItems가 변경되는걸 알려주려고, ...state.cartItems는 기존 배열 내용들,
            // action.product를 추가. 
        
        case INCREMENT_ITEM_QUANTITY:
            state.cartItems.find(i => i.id === action.id).quantity++
            return { ...state, cartItems:[...state.cartItems]}
        case EMPTY_CART:
            return { ...state, cartItems:[]}
        case SET_CHECKOUT_STATUS:
            return { ...state, checkoutStatus: action.result}
        default:
            return state
    }
}

export default cart