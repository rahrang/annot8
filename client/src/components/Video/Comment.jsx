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
      // isResolved,
      isCurrentUser,
      deleteComment
    } = this.props;

    return (
      <div
        className={css(
          styles.commentContainer,
          isCurrentUser ? styles.alignRight : styles.alignLeft
        )}
      >
        {isCurrentUser && (
          <div
            className={css(styles.iconContainer)}
            onClick={() => deleteComment(id, timestamp)}
          >
            <i
              className={css(styles.icon) + "fa fa-times"}
              aria-hidden="true"
            />
          </div>
        )}
        <div className={css(styles.contentContainer)}>
          <p className={css(styles.text)}>{text}</p>
          <div
            className={css(
              styles.secondRow,
              isCurrentUser ? styles.flexEnd : styles.flexStart
            )}
          >
            <p className={css(styles.userName)}>{user}</p>
            <p className={css(styles.time)}>
              {helpers.getTimeElapsed(datePosted)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Open Sans, sans-serif",
    maxWidth: "100%",
    height: "100%",
    padding: "5px 15px"
  },

  alignRight: {
    justifyContent: "space-between",
    textAlign: "right"
  },

  alignLeft: {
    justifyContent: "flex-start",
    textAlign: "left"
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },

  iconContainer: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
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
    margin: "1px 0"
  },

  flexEnd: {
    justifyContent: "flex-end"
  },

  flexStart: {
    justifyContent: "flex-start"
  },

  userName: {
    color: "#3F7BA9",
    fontSize: "0.5em",
    fontWeight: "bold",
    margin: "0 2px"
  },

  time: {
    color: "#333",
    fontSize: "0.5em",
    fontWeight: "bold",
    margin: "0 2px"
  }
});
