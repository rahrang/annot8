// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";

export default class TimestampItem extends React.Component {
  render() {
    let { timestamp, time, timeElapsed, text, changeView } = this.props;
    return (
      <div
        className={css(styles.statusItemContainer, styles.fadeIn)}
        onClick={() => changeView("comments")}
      >
        <p className={css(styles.timestamp)}>{time}</p>
        <p className={css(styles.timeElapsed)}>{timeElapsed}</p>
        <p className={css(styles.description)}>{text}</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  statusItemContainer: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "40px",
    padding: "3px 10px",
    ":hover": {
      backgroundColor: "#E6E6E6"
    }
  },

  timestamp: {
    color: "#3F7BA9",
    fontFamily: "Fjalla One, sans-serif",
    fontSize: "1em",
    letterSpacing: "0.025em"
  },

  timeElapsed: {
    color: "#333",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    padding: "0 0 0 7.5px"
  },

  description: {
    color: "#666",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "0.9em",
    padding: "0 0 0 7.5px"
  }
});
