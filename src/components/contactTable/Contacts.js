import React, { Component, Fragment } from 'react';
import Header from './TableHeader';
import Contact from './TableBody';
import { Table, LinearProgress } from '@material-ui/core';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { isLoading, contacts } = value;
          return (
            <Fragment>
              {/** Show the linear progress bar while waiting for the res */}
              {isLoading ? (
                <LinearProgress 
                  variant={'indeterminate'}
                />
              ) : (
                <Table>
                  <Header />
                  {contacts.map(contact => (
                    <Contact
                      key={contact._id}
                      contact={contact}
                    />
                  ))}
                </Table>
              )}
            </Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default Contacts;
