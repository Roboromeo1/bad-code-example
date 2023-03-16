import {handleActions} from 'redux-actions';
import actions from 'src/redux/actions';

const initialState = {
  filter: 'All',
  todos: [
    {
      id: 0,
      title: 'This is an example todo item',
      completed: false,
    },
    {
      id: 1,
      title: 'This is another todo item',
      completed: true,
    },
  ],
};

const reducer = handleActions(
    {
      [actions.setTodoList]: (state, {payload: {todoList}}) => {
        return {...state, todos: todoList};
      },
      [actions.setFilter]: (state, {payload: {filter}}) => {
        return {...state, filter};
      },
    },
    initialState,
);

export default reducer;
