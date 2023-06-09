import * as React from 'react';
import {Box, Grid} from '@mui/joy';
import actions from 'src/redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import TodoListComponent from 'src/components/TodoListComponent';

let idGenerator = 1;

function TodoList() {
  const todos = useSelector((state) => state.todoList.todos);
  const filter = useSelector((state) => state.todoList.filter);
  const dispatch = useDispatch();

  const addItem = (title) => {
    idGenerator++;
    const newItem = {
      id: idGenerator,
      title,
      completed: false,
    };
    const newTodos = [...todos, newItem];
    dispatch(actions.setTodoList(newTodos));
  };

  const toggleComplete = (id) => {
    const itemIndex = todos.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      return;
    }
    const item = todos[itemIndex];
    const updatedItem = {...item, completed: !item.completed};
    const newTodos = [...todos];
    newTodos.splice(itemIndex, 1, updatedItem);
    dispatch(actions.setTodoList(newTodos));
  };

  const deleteTodo = (id) => {
    const itemIndex = todos.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      return;
    }
    const newTodos = [...todos];
    newTodos.splice(itemIndex, 1);
    dispatch(actions.setTodoList(newTodos));
  };

  const onFilterChange = (filter) => {
    console.log(filter);
    dispatch(actions.setFilter(filter));
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <Box sx={{flex: '0 0 auto'}}>
        <TodoListComponent
          addItem={addItem}
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          onFilterChange={onFilterChange}
          currentFilter={filter}
        />
      </Box>
      <Box sx={{flex: '1 1 auto'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{bgcolor: 'primary.main', height: '100%'}}></Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{bgcolor: 'secondary.main', height: '100%'}}></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default TodoList;
