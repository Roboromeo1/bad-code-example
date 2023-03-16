import * as React from "react";
import { Sheet, Table } from "@mui/joy";

import Item from "src/components/Item";
import PropTypes from "prop-types";

function ListView({ todos, filter, toggleComplete, deleteTodo }) {
  let visibleTodos = [];

  switch (filter) {
    case "Completed": {
      visibleTodos = todos.filter((item) => item.completed);
      break;
    }
    case "In progress": {
      visibleTodos = todos.filter((item) => !item.completed);
      break;
    }
    default:
      visibleTodos = todos;
  }

  return (
    <Sheet
      variant="outlined"
      sx={{
        width: "100%",
        flex: 1,
        overflow: "auto",
        minHeight: 0
      }}
    >
      <Table stickyHeader hoverRow>
        <tbody>
          {visibleTodos.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </tbody>
      </Table>
    </Sheet>
  );
}

ListView.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default ListView;
