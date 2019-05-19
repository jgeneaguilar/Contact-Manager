import React from 'react';
import PropTypes from 'prop-types';
import { 
  TableBody,
  TableRow,
  TableCell,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const Contact =({ contact: { id, name, email, phone, jobTitle, department },       deleteHandler }) => (
    <TableBody>
      <TableRow>
        <TableCell component='th' scope='row' style={{border: 0}} >{name}</TableCell>
        <TableCell style={{border: 0}} align='right'>{email}</TableCell>
        <TableCell style={{border: 0}} align='right'>{phone}</TableCell>
        <TableCell style={{border: 0}} align='right'>{jobTitle}</TableCell>
        <TableCell style={{border: 0}} align='right'>{department}</TableCell>
        <TableCell style={{border: 0}} align='right'>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => deleteHandler(id)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
);


Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteHandler: PropTypes.func.isRequired
}

export default Contact;
