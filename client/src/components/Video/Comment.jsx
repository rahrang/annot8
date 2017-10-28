// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";

// Local Components
const helpers = require("./helpers.js");

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
        <p className={css(styles.text)}>{text}</p>
        <div className={css(styles.secondRow)}>
          <p className={css(styles.userName)}>{user}</p>
          <p className={css(styles.time)}>
            {helpers.calculateTimeElapsed(datePosted)}
          </p>
        </div>
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
    fontFamily: "Open Sans, sans-serif",
    maxWidth: "100%",
    height: "100%",
    padding: "5px 15px"
    // width: "200px",
  },

  alignRight: {
    alignItems: "flex-start"
  },

  alignLeft: {
    alignItems: "flex-end"
  },

  text: {
    color: "#333",
    fontSize: "1em",
    margin: "1px 0"
  },

  secondRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "1px 0"
  },

  userName: {
    color: "#3F7BA9",
    fontSize: "0.5em",
    fontWeight: "bold",
    margin: "0 1px"
  },

  time: {
    color: "#333",
    fontSize: "0.5em",
    fontWeight: "bold",
    margin: "0 1px"
  }
});
