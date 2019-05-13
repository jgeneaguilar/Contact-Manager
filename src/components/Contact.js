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
  
  handleClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  }

  render() {
    const { name, email, phone } = this.props;
    
    return (
      <List>
        <ListItem button onClick={this.handleClick}>
          <ListItemAvatar>
            <Avatar 
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
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}

export default Contact;
