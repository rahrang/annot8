// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className={css(styles.footerContainer, styles.fadeIn)}>
        <div id="link-container">
          <Link to="/about" className={css(styles.link)}>
            About
          </Link>
          |
          <Link
            to="https://github.com/rahrang/annot8"
            className={css(styles.link)}
            target="_blank"
          >
            Github
          </Link>
        </div>
        <div className={css(styles.creditContainer)}>
          Rahul Rangnekar & Ya-An Hsiung
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#3F7BA9',
    color: '#F5F5F5',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.85em',
    letterSpacing: '0.025em',
    justifyContent: 'space-between',
    padding: '10px 20px'
  },

  link: {
    color: '#F5F5F5',
    padding: '0 5px',
    textDecoration: 'none',
    ':hover': {
      color: '#333'
    }
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
