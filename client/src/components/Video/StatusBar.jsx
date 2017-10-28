// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";

// Local Components
import StatusItem from "./StatusItem.jsx";
const helpers = require("./helpers.js");

export default class StatusBar extends React.Component {
  changeView = async timestamp => {
    let { videoId, fetchTimestampComments } = this.props;
    await fetchTimestampComments(videoId, timestamp);
    this.props.changeView("comments");
  };

  render() {
    let { comments, getDuration } = this.props;

    let statuses = null;
    if (!_.isEmpty(comments) && _.isArray(comments)) {
      statuses = comments.map(c => {
        return (
          <StatusItem
            key={c._id}
            timestamp={c.timestamp}
            time={helpers.formatTime(c.timestamp, getDuration())}
            text={helpers.truncate(c.text)}
            timeElapsed={helpers.getTimeElapsed(c.datePosted)}
            changeView={this.changeView}
          />
        );
      });
    }

    return (
      <div className={css(styles.statusBarContainer, styles.fadeIn)}>
        <div className={css(styles.headerContainer)}>
          <p className={css(styles.header)}>Comments</p>
        </div>
        <div className={css(styles.bodyContainer)}>{statuses}</div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  statusBarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "10px 0 0"
  },

  headerContainer: {
    backgroundColor: "#F5F5F5",
    borderBottom: "3px solid #3F7BA9",
    color: "#333",
    fontFamily: "Fjalla One, sans-serif",
    fontSize: "1.25em",
    padding: "3px 0",
    textAlign: "center",
    textTransform: "uppercase",
    width: "100%"
  },

  header: {
    margin: 0,
    padding: 0
  },

  bodyContainer: {
    width: "100%",
    overflowY: "scroll",
    height: "100%"
  }
});
