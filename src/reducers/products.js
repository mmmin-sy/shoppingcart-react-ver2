import { SET_PRODUCT, DECREMENT_PRODUCT_INVENTORY } from '../constants/ActionTypes'

const initialState = {
    items: []
}

const products = (state = initialState, action) => { //initialState.items이 그룹은 iteams 만 다룬다.
    
    switch(action.type) {
        case SET_PRODUCT:
            return { items: action.products }
        case DECREMENT_PRODUCT_INVENTORY:
            state.items.find(i => i.id === action.product.id).inventory--
            return { ...state, items:[...state.items]}
        default:
            return state
    }
}

export default products