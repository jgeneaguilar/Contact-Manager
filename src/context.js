import React, { Component } from 'react';
import { mockData } from './dataStore';

const ContactContext = React.createContext();

export class ContactData extends Component {
  state = {
    contacts: [
      ...mockData
    ]
  };

  render() {
    return (
      <ContactContext.Provider value={this.state}>
        {this.props.children}
      </ContactContext.Provider>
    );
  }
}

export const Consumer = ContactContext.Consumer; // Consumer will be imported rather than ContactContext.Consumer

// This is structured in a way that it can be used as a reusable component
