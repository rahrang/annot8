// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';

import Post from './Post.jsx';

export default class PostBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isPublic: true,
      isQuestion: true
    }
  }

  // called when user clicks post --> send info to backend
  handleSubmit = () => {

  }

  render() {

    let posts = _.range(0, 10).map((p) => {
      return (
        <Post />
      );
    });


    return (
      <div className={css(styles.postBarContainer)}>
        <div className={css(styles.headerContainer)}>
          Posts
        </div>
        <div className={css(styles.bodyContainer)}>
          { posts }
        </div>
        <div className={css(styles.inputContainer)}>
          <form onSubmit={this.handleSubmit} className={css(styles.form)}>
            <textarea
              className={css(styles.input)}
              placeholder="Ask a question or make a comment!"
              cols={55}
              rows={2}
            />
            <button className={css(styles.button)} type="submit">
              Post
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  postBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '10px 0',
  },

  headerContainer: {
    backgroundColor: '#F5F5F5',
    borderBottom: '3px solid #3F7BA9',
    color: '#333',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.25em',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },

  bodyContainer: {
    backgroundColor: '#E6E6E6',
    width: '100%',
    // height: '800px',
    overflow: 'scroll',
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 10px',
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    border: 'none',
    color: '#333',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    margin: '5px',
    padding: '5px',
    outline: 'none',
    resize: 'none',
  },

  button: {
    border: 'none',
    backgroundColor: '#3F7BA9',
    color: '#F5F5F5',
    cursor: 'pointer',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1em',
    outline: 'none',
    padding: '3px 10px'
  },
});
