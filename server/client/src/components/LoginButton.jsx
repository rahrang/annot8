// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';

export default class LoginButton extends React.Component {
  render() {
    return (
      <div className={css(styles.loginContainer)}>
        <Link to="/auth/google" target="blank" className={css(styles.link)}>
          Sign In
        </Link>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    borderRadius: '8px' // do I need to specify a height/width?
  },

  link: {
    backgroundColor: '#F5F5F5',
    color: '#3F7BA9',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1em',
    fontWeight: 'bold',
    letterSpacing: '0.035em',
    padding: '5px 10px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    ':hover': {
      color: '#333'
    }
  }
});
