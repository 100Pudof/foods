import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import pizzasReduser from './redusers/pizzasReduser';
import filtersReduser from './redusers/filtersReduser';
import categoryReduser from './redusers/CategoryReduser';
import cartReduserCopy from './redusers/cartReduserCopy';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    filters: filtersReduser,
    pizzas: pizzasReduser,
    category: categoryReduser,
    cart: cartReduserCopy,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;