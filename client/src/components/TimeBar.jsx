// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

export default class TimeBar extends React.Component {
  render() {
    return (
      <div className={css(styles.timeBarContainer, styles.fadeIn)}>
        <div className={css(styles.headerContainer)}>
          Time Stamps
        </div>
        <div className={css(styles.bodyContainer)}>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  timeBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  headerContainer: {
    backgroundColor: '#F5F5F5',
    borderBottom: '3px solid #3F7BA9',
    borderTop: '3px solid #3F7BA9',
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.25em',
    padding: '5px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  }
});
