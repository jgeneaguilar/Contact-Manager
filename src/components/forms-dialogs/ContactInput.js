import React, { Component } from 'react';
import { ContactContext, Consumer } from '../../context';
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

// This is a fully uncontrolled component with a key

class ContactInput extends Component {
  static contextType = ContactContext;

  state = {
    ...this.context.currentContact
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleClose = dispatch => {
    dispatch({
      type: 'ADD_DIALOG'
    })
  }

  resetFields = (dispatch) => {
    this.setState({
      _id: '',
      name: '',
      email: '',
      phone: '',
      jobTitle: '',
      department: ''
    })
    dispatch({
      type: 'RESET_FIELDS',
    });
  }
  
  submitContact = (dispatch, isReset) => {
    const { _id, name, email, phone, jobTitle, department } = this.state,
          { editMode } = this.context;

    const newContact = {
      name,
      email,
      phone,
      jobTitle,
      department
    };

    if (editMode) {
      axios
        .put(`${contactURL}/contacts/${_id}`, newContact)
        .then(response => dispatch({
          type: 'UPDATE_CONTACT',
          payload: response.data
        }));
    } else {
      axios
        .post(`${contactURL}/contacts/`, newContact)
        .then(response => dispatch({
          type: 'ADD_CONTACT',
          payload: response.data
        }));
    }
    
    if (isReset) {
      this.resetFields(dispatch);
      this.handleClose(dispatch);
    } else {
      this.resetFields(dispatch);
    }
  }

  render() {
    const { name, email, phone, jobTitle, department } = this.state,
          { title, subTitle, isAdd } = this.props;

    return (
      <Consumer>
        {value => {
          const { openDialog, dispatch } = value;
          
          return (
            <Dialog
              open={openDialog}
              onClose={() => this.handleClose(dispatch)}
            >
              <DialogTitle>{title}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {subTitle}
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
                  onClick={() => this.resetFields(dispatch, true)}
                >
                  Cancel
                </Button>
                {isAdd ? (
                  <Button
                    variant='contained'
                    size='small'
                    onClick={() => this.submitContact(dispatch, false)}
                  >
                    Add Another
                  </Button>
                ) : null}
                <Button
                  variant='contained'
                  size='small'
                  onClick={() => this.submitContact(dispatch, true)}
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

export default ContactInput;