// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
const queryString = require('query-string');

export default class Input extends React.Component {
  componentDidMount() {
    let { altStyle } = this.props;
    if (_.isUndefined(altStyle)) {
      this.input.focus();
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  sanitizeLink = inputVal => {
    if (!_.includes(inputVal, 'youtube.com/watch?')) {
      return null;
    }
    const extract = queryString.extract(inputVal);
    const parsed = queryString.parse(extract);
    return parsed['v'];
  };

  handleClick = () => {
    let videoId = this.sanitizeLink(this.input.value);
    if (_.isNull(videoId)) {
      return;
    }
    this.props.history.push(`/video/${videoId}`);
    this.input.value = '';
  };

  render() {
    let { placeholder, altStyle } = this.props;

    return (
      <div
        className={css(
          styles.inputContainer,
          altStyle ? styles.altContainerStyle : styles.defContainerStyle
        )}
      >
        <input
          className={css(styles.input)}
          placeholder={
            placeholder
              ? placeholder
              : 'Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          }
          type="text"
          ref={input => (this.input = input)}
          onKeyPress={e => this.handleKeyPress(e)}
        />
        <button
          className={css(
            styles.button,
            altStyle ? styles.altButtonStyle : styles.defButtonStyle
          )}
          onClick={this.handleClick}
        >
          Let's Go!
        </button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: ' 5px 10px'
  },

  defContainerStyle: {
    fontSize: '2em',
    height: '80px',
    width: '1000px',
    '@media(max-width:1200px)': {
      fontSize: '1.5em',
      height: '60px',
      width: '750px'
    },
    '@media(max-width:900px)': {
      fontSize: '1em',
      height: '40px',
      width: '500px'
    },
    '@media(max-width:600px)': {
      fontSize: '1em',
      height: '40px',
      width: '380px'
    }
  },

  altContainerStyle: {
    fontSize: '1em',
    height: '40px',
    width: '700px',
    maxWidth: '90%'
  },

  input: {
    color: '#666',
    border: 'none',
    fontSize: '1.125em',
    fontFamily: 'Open Sans, sans-serif',
    outline: 'none',
    padding: '0 10px',
    height: '100%',
    width: '100%'
  },

  button: {
    border: 'none',
    borderRadius: '0',
    cursor: 'pointer',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '150px',
    outline: 'none',
    textTransform: 'uppercase',
    ':hover': {
      color: '#FFAB40'
    }
  },

  defButtonStyle: {
    backgroundColor: '#3F7BA9',
    color: '#F5F5F5'
  },

  altButtonStyle: {
    backgroundColor: '#F4F5F5',
    color: '#3F7BA9'
  }
});
