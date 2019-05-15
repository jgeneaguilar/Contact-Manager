import React from 'react';
import PropTypes from 'prop-types';
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton 
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import PersonAdd from '@material-ui/icons/PersonAdd';

// Serve as the Navigation bar and for branding
const Header = ({ branding }) => {
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
          <IconButton color='inherit'>
            <PersonAdd />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
}

Header.propTypes = {
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

export default Header;
