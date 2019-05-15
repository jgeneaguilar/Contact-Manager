import React, { Component, Fragment } from 'react';
import Contact from './Contact'


const mockData = [
  {
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'jdcruz@gmail.com',
    phone: '0917-000-0000'
  },
  {
    id: 2,
    name: 'Annie Batungbakal',
    email: 'discoqueen@gmail.com',
    phone: '0919-000-0000'
  },
  {
    id: 3,
    name: 'Maria Clara',
    email: 'ibarra\'sgirl@gmail.com',
    phone: '0943-000-0000'
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
      <Fragment>
        {contacts.map(contact => (
          <Contact 
            key={contact.id}
            contact={contact}
          />
        ))}
      </Fragment>
    );
  }
}


export default Contacts;
