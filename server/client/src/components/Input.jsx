// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      value: ''
    };
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
      this.setState({
        error: true,
        value: ''
      });
      return null;
    }
  };

  handleClick = () => {
    this.setState({ error: false });
    let videoId = this.sanitizeLink(this.refs.input.value);
    if (_.isNull(videoId)) {
      return;
    }
    this.props.history.push(`/video/${videoId}`);
  };

  render() {
    let { mainInput, placeholder } = this.props;
    let { error, value } = this.state;

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
          onChange={e => this.setState({ value: e.target.value })}
          placeholder={
            placeholder
              ? placeholder
              : 'Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          }
          type="text"
          ref="input"
          value={value}
          onKeyPress={e => this.handleKeyPress(e)}
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
    justifyContent: 'center',
    padding: '5px 0'
  },

  mainInput: {
    fontSize: '1.125em',
    height: '40px',
    width: '500px'
  },

  cornerInput: {
    fontSize: '0.9em',
    height: '25px',
    width: '400px'
  },

  input: {
    color: '#666',
    border: 'none',
    fontFamily: 'Open Sans, sans-serif',
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
    fontSize: '1.125em'
  },

  cornerButton: {
    backgroundColor: '#F5F5F5',
    color: '#3F7BA9',
    height: '35px',
    width: '100px',
    fontSize: '1em'
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Fjalla One, sans-serif',
    outline: 'none',
    textTransform: 'uppercase',
    ':hover': {
      opacity: 0.75
    }
  }
});
