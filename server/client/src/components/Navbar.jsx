// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

import Input from './Input.jsx';

export default class Navbar extends React.Component {
  render() {
    let { history } = this.props;
    return (
      <div id="navbar-container" className={css(styles.fadeIn)}>
        <div className={css(styles.headerContainer)}>
          <Link to="/" className={css(styles.headerLink)}>
            <h1 className={css(styles.header)}>Annot8</h1>
          </Link>
          <div className={css(styles.container)}>
            <Link to="/auth/google" target="blank" className={css(styles.link)}>
              Login with Google
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#3F7BA9',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0'
  },

  headerLink: {
    color: '#F5F5F5',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    ':hover': {
      color: '#333'
    }
  },

  header: {
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.25em',
    letterSpacing: '0.0625em',
    margin: 0,
    padding: '0 0 0 10px',
    textTransform: 'uppercase'
  },

  container: {
    padding: '0 20px 0 0'
  },

  link: {
    color: '#F5F5F5',
    fontSize: '1em',
    textDecoration: 'none',
    // textTransform: 'uppercase',
    ':hover': {
      color: '#333'
    }
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
