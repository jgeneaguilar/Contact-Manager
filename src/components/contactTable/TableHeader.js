import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Header = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align='right'>Address</TableCell>
        <TableCell align='right'>Phone</TableCell>
        <TableCell align='right'>Job Title</TableCell>
        <TableCell align='right'>Department</TableCell>
        <TableCell align='right'></TableCell>
      </TableRow> 
    </TableHead>
  );
}
// Add 6th TableCell element with no children to provide space for buttons

export default Header;
