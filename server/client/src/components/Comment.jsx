// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

export default class Comment extends React.Component {
  render() {
    let { me } = this.props;
    return (
      <div
        className={css(
          styles.commentContainer,
          me ? styles.alignRight : styles.alignLeft
        )}
      >
        <p className={css(styles.comment)}>This is the comment message</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  commentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '5px 15px',
    maxWidth: '100%',
    height: '100%'
  },

  alignRight: {
    alignItems: 'flex-start'
  },

  alignLeft: {
    alignItems: 'flex-end'
  }
});
