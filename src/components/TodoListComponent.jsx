import * as React from "react";
import Form from "src/components/Form";
import FilterSegment from "src/components/FilterSegment";
import ListView from "src/components/ListView";
import PropTypes from "prop-types";

function TodoListComponent(params) {
  const {
    addItem,
    todos,
    toggleComplete,
    deleteTodo,
    onFilterChange,
    currentFilter
  } = params;
  return (
    <>
      <Form addItem={addItem} />
      <FilterSegment
        onFilterChange={onFilterChange}
        currentFilter={currentFilter}
      />
      <ListView
        todos={todos}
        filter={currentFilter}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

TodoListComponent.propTypes = {
  addItem: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
};

export default TodoListComponent;
