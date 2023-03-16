import {createActions} from 'redux-actions';

export default createActions({
  SET_TODO_LIST: (todoList) => ({todoList}),
  SET_FILTER: (filter) => ({filter}),
});
