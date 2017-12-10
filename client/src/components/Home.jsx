// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// React Router
import { withRouter } from 'react-router';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

// Local Components
import Input from './Input.jsx';

class Home extends React.Component {
  render() {
    document.title = 'Annot8';
    let { history } = this.props;
    return (
      <div className={css(styles.homeContainer, styles.fadeIn)}>
        <h2 className={css(styles.header)}>Welcome to Annot8!</h2>
        <Input
          mainInput={true}
          history={history}
          placeholder="Please enter a YouTube link!"
        />
        <div className={css(styles.bottomContainer)}>
          <div className={css(styles.container)}>
            <p className={css(styles.text)}>
              <strong>Download</strong> our Chrome Extension!
            </p>
            <a
              className={css(styles.link)}
              href="http://bit.ly/annot8-ext"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={css(styles.img)}
                src="extension-image.png"
                alt="Annot8 Chrome extension"
              />
            </a>
          </div>
          <div className={css(styles.container)}>
            <h3 className={css(styles.instrText)}>Instructions</h3>
            <ol className={css(styles.text)}>
              <li>
                <a className={css(styles.link)} href="/auth/google">
                  Sign in
                </a>{' '}
                to Annot8 with your bMail Google Account.
              </li>
              <li>
                Download our{' '}
                <a
                  className={css(styles.link)}
                  href="http://bit.ly/annot8-ext"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome Extension
                </a>!
              </li>
              <li>Navigate to the YouTube Video you'd like to Annot8.</li>
              <li>
                Click on the Annot8 extension in your toolbar, or copy/paste the
                YouTube URL into the search input on this page.
              </li>
              <li>Annot8! :D</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { authReducer: state.authReducer };
};

export default withRouter(connect(mapStateToProps, null)(Home));

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh'
  },

  header: {
    color: '#333',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '3em',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '40px 0'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    margin: '20px'
  },

  link: {
    color: '#3F7BA9',
    textDecoration: 'none',
    ':hover': {
      color: '#FFAB40'
    }
  },

  img: {
    border: '2px solid #3F7BA9',
    height: '250px',
    width: '250px',
    ':hover': {
      border: '2px solid #FFAB40',
      opacity: '.75'
    }
  },

  text: {
    color: '#666',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    fontWeight: 'bold',
    padding: '0 5px'
  },

  instrText: {
    borderBottom: '2px solid #3F7BA9',
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.25em',
    margin: '0'
  },

  fadeIn: {
    animationName: fadeIn,
    animationDuration: '1s'
  }
});
