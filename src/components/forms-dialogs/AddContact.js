import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
                <Button>Add Another</Button>
                <Button>Save</Button>
              </DialogActions>
            </Dialog>
          )}}
      </Consumer>
    )
  }
}

export default AddContact;