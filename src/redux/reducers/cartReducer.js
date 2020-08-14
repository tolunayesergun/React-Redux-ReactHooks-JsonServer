import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c => c.product.id === action.payload.product.id);
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
                    }
                    return cartItem;
                })
                return newState;
            }
            else {

                return [...state, { ...action.payload }]
            }
        case actionTypes.REMOVE_FROM_CART:
            var DeletedItem = state.find(c => c.product.id === action.payload.id);
            if (DeletedItem.quantity > 1) {
                var decreaseState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.id) {
                        return Object.assign({}, DeletedItem, { quantity: DeletedItem.quantity - 1 })
                    }
                    return cartItem;
                })
                return decreaseState;
            }
            const filteredState = state.filter(c => c.product.id !== action.payload.id);
            return filteredState;

        default:
            return state;
    }
}