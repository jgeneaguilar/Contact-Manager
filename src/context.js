import React, { Component } from 'react';
import contactURL from './store/url';
import axios from 'axios';

const ContactContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload
        )
      };
    case 'TOGGLE_DIALOG':
      return {
        openDialog: !state.openDialog
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [
          ...state.contacts,
          action.payload
        ]
      }
    default:
      return state;
  }
};

export class ContactData extends Component {
  constructor(props) {
    super(props);

    this.api = axios.create({
      baseURL: contactURL,
      //timeout: 10000,
      headers: {'Content-Type': 'application/json'}
    });

  }
  state = {
    contacts: [],
    openDialog: false,
    dispatch: action => this.setState(
      state => reducer(state, action)
    )
  };

  componentDidMount() {
    this.api
      .get('/contacts')
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
          contacts: [
            ...response.data
          ]
        });
      })
      .catch(error => {
        console.log(error);
      });
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

/**
 * This is structured in a way that it can be used as a reusable component
 * action will return an object
 * action.type = a capitalized string of what it does
 * action.payload =  data that you want to send along with the action, (e.g.      params for the function)
 * dispatch was added to the state. This can be accessed by any consumers (value={this.state})
 */


