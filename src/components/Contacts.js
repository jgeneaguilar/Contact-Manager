import React, { Component } from 'react';
import Header from './TableHeader';
import Contact from './TableBody';
import { Table } from '@material-ui/core';


const mockData = [
  {
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'jdcruz@gmail.com',
    phone: '0917-000-0000',
    jobTitle: 'Unit Manager',
    department: 'Pediatrics Ward'
  },
  {
    id: 2,
    name: 'Annie Batungbakal',
    email: 'discoqueen@gmail.com',
    phone: '0919-000-0000',
    jobTitle: 'Staff Nurse',
    department: 'Pediatrics Ward'
  },
  {
    id: 3,
    name: 'Maria Clara',
    email: 'ibarra\'sgirl@gmail.com',
    phone: '0943-000-0000',
    jobTitle: 'Nursing Aide',
    department: 'Female Ward'
  },
]


class Contacts extends Component {
  state = {
    contacts: [
      ...mockData
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <Table>
        <Header />
        {contacts.map(contact => (
          <Contact 
            key={contact.id}
            contact={contact}
          />
        ))}
      </Table>
    );
  }
}


export default Contacts;
