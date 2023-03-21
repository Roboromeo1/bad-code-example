/* eslint-disable no-undef */
import React from 'react';
import {render, screen} from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  const item = {
    id: 1,
    title: 'Buy groceries',
    completed: false,
  };
  const toggleComplete = jest.fn();
  const deleteTodo = jest.fn();

  beforeEach(() => {
    render(
        <table>
          <tbody>
            <Item item={item} toggleComplete={toggleComplete}
              deleteTodo={deleteTodo} />
          </tbody>
        </table>,
    );
  });

  it('should render the item title', () => {
    const titleElement = screen.getByText(item.title);
    expect(titleElement).toBeTruthy();
  });

  it('should toggle item completion when checkbox is clicked', () => {
    const checkbox = screen.getByRole('checkbox');
    checkbox.click();
    expect(toggleComplete).toHaveBeenCalledWith(item.id);
  });

  it('should call deleteTodo when delete link is clicked', () => {
    const deleteLink = screen.getByText('Delete');
    deleteLink.click();
    expect(deleteTodo).toHaveBeenCalledWith(item.id);
  });
});
