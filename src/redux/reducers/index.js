import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
import saveProductReducer from "./saveProductReducer"
import productPaginationReducer from "./productPaginationReducer"
const rootReducer = combineReducers({
changeCategoryReducer,
categoryListReducer,
productListReducer,
cartReducer,
saveProductReducer,
productPaginationReducer
})

export default rootReducer;