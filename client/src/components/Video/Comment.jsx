// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";

export default class Comment extends React.Component {
  render() {
    let {
      id,
      text,
      timestamp,
      datePosted,
      user,
      isResolved,
      isCurrentUser
    } = this.props;
    return (
      <div
        className={css(
          styles.commentContainer,
          isCurrentUser ? styles.alignRight : styles.alignLeft
        )}
      >
        <p className={css(styles.comment)}>{text}</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "5px 15px",
    maxWidth: "100%",
    height: "100%"
    // width: "200px",
  },

  alignRight: {
    alignItems: "flex-start"
  },

  alignLeft: {
    alignItems: "flex-end"
  }
});
