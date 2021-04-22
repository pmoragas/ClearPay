import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import user from './user/reducers';
import customer from './customer/reducers';
import wallet from './wallet/reducers';

const reducers = combineReducers({
	user,
	customer,
	wallet
});
const composeEnhancers = compose;
const enhancer = composeEnhancers(applyMiddleware(thunk), devToolsEnhancer());

export default createStore(reducers, enhancer);
