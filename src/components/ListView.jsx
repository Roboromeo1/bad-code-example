/* eslint-disable max-len */
import React from 'react';
import {Grid, Sheet, Table} from '@mui/joy';
import PropTypes from 'prop-types';

import Item from 'src/components/Item';

function ListView({todos, filter, toggleComplete, deleteTodo}) {
  const visibleTodos = filter === 'Completed' ? todos.filter((item) => item.completed) :
    filter === 'In progress' ? todos.filter((item) => !item.completed) : todos;

  return (
    <Grid container sx={{height: '100%', overflow: 'auto'}}>
      <Grid item xs={12}>
        <Sheet variant="outlined">
          <Table stickyHeader hoverRow>
            <tbody>
              {visibleTodos.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              ))}
            </tbody>
          </Table>
        </Sheet>
      </Grid>
    </Grid>
  );
}

ListView.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default ListView;
