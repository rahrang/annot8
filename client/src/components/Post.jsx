// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

export default class Post extends React.Component {
  render() {
    return (
      <div className={css(styles.postContainer)}>
        <p className={css(styles.post)}>
          This is the post message
        </p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    width: '100%',
    height: '100%',
  },
});
