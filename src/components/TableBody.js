import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import { 
  TableBody,
  TableRow,
  TableCell,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const Contact = ({ 
  contact: { id, name, email, phone, jobTitle, department }}) => {

  const deleteHandler = (id, dispatch) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    });
  }

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row' style={{ border: 0 }} >{name}</TableCell>
              <TableCell style={{ border: 0 }} align='right'>{email}</TableCell>
              <TableCell style={{ border: 0 }} align='right'>{phone}</TableCell>
              <TableCell style={{ border: 0 }} align='right'>{jobTitle}</TableCell>
              <TableCell style={{ border: 0 }} align='right'>{department}</TableCell>
              <TableCell style={{ border: 0 }} align='right'>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteHandler(id, dispatch)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        )
      }}
    </Consumer>
  )
};


Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;

/** Notes to Self
 * Modify TableCell to apply style to every instance
 * ??? = table data disappear when onClick is not a callback function
 */
