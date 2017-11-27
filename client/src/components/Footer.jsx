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
        <div className={css(styles.linkContainer)}>
          {LINK_INFO.map((link, index) => {
            return (
              <div key={`link_${index}`}>
                <Link
                  className={css(styles.link)}
                  to={link.to}
                  target={link.target}
                >
                  {link.text}
                </Link>
                {index !== 2 && ' |'}
              </div>
            );
          })}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.85em',
    letterSpacing: '0.025em',
    padding: '10px 20px',
    textAlign: 'center',
    '@media(max-width: 520px)': {
      justifyContent: 'center'
    }
  },

  linkContainer: {
    display: 'flex',
    flexDirection: 'row'
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

const LINK_INFO = [
  {
    to: '/about',
    target: '_self',
    text: 'About'
  },
  {
    to: 'https://github.com/rahrang/annot8',
    target: '_blank',
    text: 'GitHub'
  },
  {
    to: 'https://goo.gl/forms/d1XjnotjgKXKvptM2',
    target: '_blank',
    text: 'Feedback'
  }
];
