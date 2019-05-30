import React, { Component } from 'react';
import { Consumer } from '../../context';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import contactURL from '../../store/url';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleClose = dispatch => {
    dispatch({
      type: 'TOGGLE_DIALOG'
    })
  }
  
  submitContact = (dispatch) => {
    const { name, email, phone, jobTitle, department } = this.state;

    const newContact = {
      name,
      email,
      phone,
      jobTitle,
      department
    }

    axios
      .post(`${contactURL}/contacts/`, newContact)
      .then(response => dispatch({
        type: 'ADD_CONTACT',
        payload: response.data
      }));

    // Clear the fields. Need refactoring
    this.setState({
      name: '',
      email: '',
      phone: '',
      jobTitle: '',
      department: '',
    })

    // Close the dialog
    this.handleClose(dispatch);
  }

  render() {
    const { name, email, phone, jobTitle, department } = this.state;

    return (
      <Consumer>
        {value => {
          const { openDialog, dispatch } = value;
          
          return (
            <Dialog
              open={openDialog}
              onClose={() => this.handleClose(dispatch)}
            >
              <DialogTitle>Add New Contact</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please fill out the following information
                </DialogContentText>
                  <TextField 
                    autoFocus
                    required
                    label='Name'
                    name='name'
                    placeholder='Enter Name...'
                    value={name}
                    onChange={this.handleChange}
                    margin='dense'
                  />
                  <TextField 
                    type='email'
                    autoComplete='email'
                    label='Email'
                    name='email'
                    placeholder='Enter Email...'
                    value={email}
                    onChange={this.handleChange}
                    margin='dense'
                  />
                  <TextField 
                    label='Phone'
                    name='phone'
                    placeholder='Enter Phone...'
                    value={phone}
                    onChange={this.handleChange}
                    margin='dense'
                  />
                  <TextField 
                    label='Job Title'
                    name='jobTitle'
                    placeholder='Enter Job Title...'
                    value={jobTitle}
                    onChange={this.handleChange}
                    margin='dense'
                  />
                  <TextField 
                    label='Department'
                    name='department'
                    placeholder='Enter Department...'
                    value={department}
                    onChange={this.handleChange}
                    margin='dense'
                  />
              </DialogContent>
              <DialogActions>
                <Button
                  variant='contained'
                  size='small'
                  >
                  Add Another
                </Button>
                <Button
                  variant='contained'
                  size='small'
                  onClick={() => this.submitContact(dispatch)}
                >
                  <SaveIcon />
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          )}}
      </Consumer>
    )
  }
}

export default AddContact;