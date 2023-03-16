/* eslint-disable require-jsdoc */
import * as React from 'react';
import {FormControl, Input, Button} from '@mui/joy';
import PropTypes from 'prop-types';

function Form({addItem}) {
  const [title, setTitle] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Input
          sx={{'--Input-decorator-childHeight': '45px'}}
          placeholder="Add a new task"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              type="submit"
              sx={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
            >
              Add
            </Button>
          }
        />
      </FormControl>
    </form>
  );
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
