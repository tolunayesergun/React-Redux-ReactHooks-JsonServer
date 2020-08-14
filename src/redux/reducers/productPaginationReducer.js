import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function productPaginationReducer(state=initialState.currentPage,action){
    switch (action.type) {
        case actionTypes.PAGINATION_PRODUCT_SUCCESS:
            return action.payload
        default:
            return state;
    }
}