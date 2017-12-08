// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

const Footer = props => {
  const renderExternalLinks = () => {
    return (
      <div className={css(styles.linkContainer)}>
        {EXTERNAL_LINK_INFO.map((link, index) => {
          switch (link.useAnchor) {
            case true:
              return (
                <div key={`link_${index}`}>
                  <a
                    className={css(styles.link)}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                  {index !== EXTERNAL_LINK_INFO.length - 1 && ' |'}
                </div>
              );
            default:
              return (
                <div key={`link_${index}`}>
                  <Link
                    className={css(styles.link)}
                    to={link.to}
                    target="_self"
                  >
                    {link.text}
                  </Link>
                  {index !== EXTERNAL_LINK_INFO.length - 1 && ' |'}
                </div>
              );
          }
        })}
      </div>
    );
  };

  return (
    <div className={css(styles.footerContainer, styles.fadeIn)}>
      <div className="external-link-container">{renderExternalLinks()}</div>
      <div className={css(styles.creditContainer)}>
        <a
          className={css(styles.link)}
          href="http://rahrang.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rahul Rangnekar
        </a>
        &
        <a
          className={css(styles.link)}
          href="https://linkedin.com/in/ya-anhsiung/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ya-An Hsiung
        </a>
      </div>
    </div>
  );
};

export default Footer;

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
      color: '#FFAB40'
    }
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});

const EXTERNAL_LINK_INFO = [
  {
    to: '/about',
    text: 'About',
    useAnchor: false
  },
  {
    to: 'http://bit.ly/annot8-ext',
    text: 'Chrome Extension',
    useAnchor: true
  },
  {
    to: 'https://github.com/rahrang/annot8',
    text: 'GitHub',
    useAnchor: true
  },
  {
    to: 'https://goo.gl/forms/d1XjnotjgKXKvptM2',
    text: 'Feedback',
    useAnchor: true
  }
];
