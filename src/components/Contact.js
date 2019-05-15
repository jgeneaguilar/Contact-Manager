import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  List,
  ListItem ,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Collapse,
  Divider
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore
} from '@material-ui/icons';


class Contact extends Component {
  state = {
    open: true
  };
  
  // Toggle the state
  handleClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  }

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <List style={{margin: '25px'}}>
        <ListItem button onClick={this.handleClick}>
          <ListItemAvatar>
            <Avatar     {/* Change src to contact-specific photo */}
              alt='random cat'
              src='http://placekitten.com/40/40'
            />
          </ListItemAvatar>
          <ListItemText inset primary={name} />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={this.state.open}
          timeout='auto'
          unmountOnExit
        >
          <List>
            <ListItem>
              <ListItemText inset primary={`Email: ${email}`} />
            </ListItem>
            <ListItem>
              <ListItemText inset primary={`Phone: ${phone}`} />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
      </List>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;
