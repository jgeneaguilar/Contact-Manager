import React, { Component } from 'react';
import Header from './TableHeader';
import Contact from './TableBody';
import { Table } from '@material-ui/core';
import { Consumer } from '../context';



class Contacts extends Component {
 
  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => 
        contact.id !== id
      )
    })
  }
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
                  key={contact.id}
                  contact={contact}
                  deleteHandler={this.deleteContact}
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
