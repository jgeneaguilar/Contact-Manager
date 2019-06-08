import React, { Fragment } from 'react';
import {
  TextField,
} from '@material-ui/core';

const FormFields = ({
  name, email, phone, jobTitle, department, handleChange
}) => {
  return (
    <Fragment>
      <TextField
        autoFocus
        required
        label='Name'
        name='name'
        placeholder='Enter Name...'
        value={name}
        onChange={handleChange}
        margin='dense'
      />
      <TextField
        type='email'
        autoComplete='email'
        label='Email'
        name='email'
        placeholder='Enter Email...'
        value={email}
        onChange={handleChange}
        margin='dense'
      />
      <TextField
        label='Phone'
        name='phone'
        placeholder='Enter Phone...'
        value={phone}
        onChange={handleChange}
        margin='dense'
      />
      <TextField
        label='Job Title'
        name='jobTitle'
        placeholder='Enter Job Title...'
        value={jobTitle}
        onChange={handleChange}
        margin='dense'
      />
      <TextField
        label='Department'
        name='department'
        placeholder='Enter Department...'
        value={department}
        onChange={handleChange}
        margin='dense'
      />
    </Fragment>
  );
};

export default FormFields;

