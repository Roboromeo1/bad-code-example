/* eslint-disable no-undef */
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterSegment from './FilterSegment';

describe('FilterSegment', () => {
  const onFilterChange = jest.fn();
  const currentFilter = 'All';

  it('should render correctly', () => {
    const {getByLabelText} = render(
        <FilterSegment onFilterChange={onFilterChange}
          currentFilter={currentFilter} />,
    );
    expect(getByLabelText('Completed')).toBeInTheDocument();
    expect(getByLabelText('In progress')).toBeInTheDocument();
    expect(getByLabelText('All')).toBeInTheDocument();
  });

  it('should call onFilterChange when a radio button is clicked', () => {
    const {getByLabelText} = render(
        <FilterSegment onFilterChange={onFilterChange}
          currentFilter={currentFilter} />,
    );
    fireEvent.click(getByLabelText('In progress'));
    expect(onFilterChange).toHaveBeenCalledWith('In progress');
  });
});
