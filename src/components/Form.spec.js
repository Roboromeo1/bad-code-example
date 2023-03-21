/* eslint-disable no-undef */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('should call addItem prop when form is submitted with valid input', () => {
    const addItemMock = jest.fn();
    const {getByPlaceholderText, getByRole} =
    render(<Form addItem={addItemMock} />);
    const input = getByPlaceholderText('Add a new task');
    const addButton = getByRole('button', {name: 'Add'});

    fireEvent.change(input, {target: {value: 'New task'}});
    fireEvent.click(addButton);

    expect(addItemMock).toHaveBeenCalledTimes(1);
    expect(addItemMock).toHaveBeenCalledWith('New task');
  });
});
