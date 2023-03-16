import {createStore, combineReducers} from 'redux';
import {devToolsEnhancer} from '@redux-devtools/extension';
import todoReducer from 'src/redux/reducer';

const rootReducer = combineReducers({
  todoList: todoReducer,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
