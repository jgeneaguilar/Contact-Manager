import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton 
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import PersonAdd from '@material-ui/icons/PersonAdd';

// Serve as the Navigation bar and for branding
const NavBar = ({ branding }) => {

  const toggleDialog = dispatch => {
    dispatch({
      type: 'ADD_DIALOG'
    });
  }

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;

        return (
          <div style={styles.root}>
            <AppBar position='static'>
              <Toolbar>
                <Typography variant='h6' color='inherit' style={styles.grow}>
                  {branding}
                </Typography>
                <IconButton color='inherit'>
                  <Home />
                </IconButton>
                <IconButton 
                  color='inherit'
                  onClick={() => toggleDialog(dispatch)}
                >
                  <PersonAdd />
                </IconButton>
              </Toolbar>
            </AppBar>
          </div>
        )}}
    </Consumer>
  );
};

NavBar.defaultProps = {
  branding: 'My App'
}

NavBar.propTypes = {
  branding: PropTypes.string.isRequired
}

// Place the two icon buttons to the right
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

export default NavBar;
