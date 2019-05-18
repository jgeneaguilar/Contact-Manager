import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';


const Contact =({ contact: { name, email, phone, jobTitle, department } }) => {

  return (
    <TableBody>
      <TableRow>
        <TableCell component='th' scope='row' style={{border: 0}} >{name}</TableCell>
        <TableCell style={{border: 0}} align='right'>{email}</TableCell>
        <TableCell style={{border: 0}} align='right'>{phone}</TableCell>
        <TableCell style={{border: 0}} align='right'>{jobTitle}</TableCell>
        <TableCell style={{border: 0}} align='right'>{department}</TableCell>
        <TableCell style={{border: 0}} align='right'></TableCell>
      </TableRow>
    </TableBody>
  );
}


Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;
