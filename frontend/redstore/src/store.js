import {productListReducer, detailsProductsReducer} from './reducers/productReducers.js';
import {createStore,compose,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers.js';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer.js';

const initialState={
    userSignin:{
        userInfo:localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null
    },
    cart:{
    cartItems:localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems'))
    :[],
    shippingAddress: localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {},
    paymentMethod:'PayPal',
}
};

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:detailsProductsReducer,
    cart:cartReducer,
    userSignin: userSigninReducer,
    userRegister:userRegisterReducer,
})
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;