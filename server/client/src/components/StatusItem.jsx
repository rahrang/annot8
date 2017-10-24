// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

export default class StatusItem extends React.Component {
  render() {
    let { timeStamp, text, changeView } = this.props;
    return (
      <div
        className={css(styles.statusItemContainer, styles.fadeIn)}
        onClick={() => changeView('posts')}
      >
        <p className={css(styles.timeStamp)}>{timeStamp}</p>
        <p className={css(styles.description)}>{text}</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  statusItemContainer: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    width: '100%',
    padding: '3px 0 0',
    ':hover': {
      backgroundColor: '#E6E6E6'
    }
  },

  timeStamp: {
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1em',
    letterSpacing: '0.025em'
  },

  description: {
    color: '#666',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.9em',
    padding: '0 0 0 10px'
  }
});
