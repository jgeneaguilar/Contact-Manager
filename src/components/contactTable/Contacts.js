import React, { Component } from 'react';
import Header from './TableHeader';
import Contact from './TableBody';
import { Table } from '@material-ui/core';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <Table>
              <Header />
              {contacts.map(contact => (
                <Contact
                  key={contact._id}
                  contact={contact}
                />
              ))}
            </Table>
          )
        }}
      </Consumer>
    );
  }
}

export default Contacts;
