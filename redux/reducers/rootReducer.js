import { combineReducers } from 'redux';
import contractReducer from './contractReducer';
import modalReducer from './modalReducer';
import orderReducer from './orderReducer';
import socketReducer from './socketReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	contractReducer,
	modalReducer,
	orderReducer,
	userReducer,
	socketReducer
});

export default rootReducer;