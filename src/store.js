import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import todoReducer from 'src/redux/reducer';

const rootReducer = combineReducers({
  todoList: todoReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));
export default store;
