// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

export default class TimestampItem extends React.Component {
  render() {
    let { timestamp, time, timeElapsed, text, changeView } = this.props;
    return (
      <div
        className={css(styles.timestampItemContainer, styles.fadeIn)}
        onClick={() => changeView(timestamp)}
      >
        <p className={css(styles.timestamp)}>{time}</p>
        <p className={css(styles.timeElapsed)}>{timeElapsed}</p>
        <p className={css(styles.description)}>{text}</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  timestampItemContainer: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'flex-start',
    height: '40px',
    padding: '3px 10px',
    ':hover': {
      backgroundColor: '#E6E6E6'
    }
  },

  timestamp: {
    color: '#3F7BA9',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1em',
    padding: '0 7.5px',
    letterSpacing: '0.025em'
  },

  timeElapsed: {
    color: '#333',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.9em',
    padding: '0 7.5px',
    width: '110px',
    '@media(max-width: 600px)': {
      display: 'none'
    }
  },

  description: {
    color: '#666',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.9em',
    padding: '0 0 0 7.5px',
    width: '300px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
});
