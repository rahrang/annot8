// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';
import * as _ from 'lodash';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  sanitizeLink = inputVal => {
    if (_.includes(inputVal, 'youtube.com/watch?v=')) {
      let splitArr = inputVal.split('watch?v=');
      return splitArr[1];
    } else {
      return inputVal;
    }
  };

  handleClick = () => {
    let videoId = this.sanitizeLink(this.refs.input.value);
    this.props.history.push(`/video/${videoId}`);
  };

  render() {
    let { mainInput } = this.props;

    return (
      <div
        className={css(
          mainInput ? styles.mainInput : styles.cornerInput,
          styles.inputContainer,
          styles.fadeIn
        )}
      >
        <input
          className={css(styles.input)}
          placeholder="Enter a YouTube link to begin!"
          type="text"
          ref="input"
        />
        <button
          className={css(
            styles.button,
            mainInput ? styles.mainButton : styles.cornerButton
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
    justifyContent: 'center'
  },

  mainInput: {
    height: '40px',
    width: '500px'
  },

  cornerInput: {
    height: '30px',
    width: '100px'
  },

  input: {
    color: '#666',
    border: 'none',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    outline: 'none',
    padding: '5px 10px',
    height: '100%',
    width: '100%'
  },

  mainButton: {
    backgroundColor: '#3F7BA9',
    color: '#F5F5F5',
    height: '50px',
    width: '150px',
    fontSize: '1em',
    textTransform: 'uppercase'
  },

  cornerButton: {
    backgroundColor: '#F5F5F5',
    color: '#3F7BA9',
    height: '40px',
    fontSize: '0.85em'
  },

  button: {
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Open Sans, sans-serif',
    outline: 'none',
    ':hover': {
      opacity: 0.5
    }
  }
});
