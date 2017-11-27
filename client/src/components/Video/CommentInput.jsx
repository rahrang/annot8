// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';

// Local Components
import LoginButton from '../reusable_components/LoginButton.jsx';
import CommentTextArea from './CommentTextArea.jsx';

export default class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    };
  }

  render() {
    let {
      user,
      handleSubmit,
      onFocus,
      getDuration,
      view,
      timestamp
    } = this.props;

    return (
      <div className={css(styles.inputContainer)}>
        {_.isEmpty(user) ? (
          <div className={css(styles.loginContainer)}>
            <p className={css(styles.loginText)}>
              Please sign in to leave a comment.
            </p>
            <LoginButton />
          </div>
        ) : (
          <CommentTextArea
            user={user}
            handleSubmit={handleSubmit}
            onFocus={onFocus}
            getDuration={getDuration}
            view={view}
            timestamp={timestamp}
          />
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderTop: '3px solid #3F7BA9'
  },

  loginContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginText: {
    color: '#333',
    margin: '20px 10px'
  }
});
