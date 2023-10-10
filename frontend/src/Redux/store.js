import {legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../Redux/reducer/authReducer';
import userReducer from '../Redux/reducer/userReducer';
import applicationReducer from '../Redux/reducer/applicationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  application: applicationReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
