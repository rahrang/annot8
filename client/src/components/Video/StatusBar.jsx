// React
import React from "react";

// NPM Modules
import { connect } from "react-redux";
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";

// Local Components
import StatusItem from "./StatusItem.jsx";
import CommentInput from "./CommentInput.jsx";
import { CommentActions } from "../../actions/comment-actions.js";
const helpers = require("../../helpers.js");

class StatusBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: -1
    };
  }

  changeView = async timestamp => {
    let { videoId, fetchTimestampComments } = this.props;
    await fetchTimestampComments(videoId, timestamp);
    this.props.changeView("comments");
  };

  onInputFocus = () => {
    let { getTime } = this.props;
    let timestamp = getTime();
    this.setState({ timestamp });
  };

  handleSubmit = async (value, isAnonymous, timestamp) => {
    let { videoId, authReducer } = this.props;
    let userName = authReducer.user.name;
    if (!_.isEmpty(value) || timestamp !== -1) {
      await this.props.makeComment(
        videoId,
        timestamp,
        userName,
        isAnonymous,
        value
      );
    }
    this.setState({ timestamp: -1 });
  };

  render() {
    let { comments, getDuration, authReducer } = this.props;
    let { timestamp } = this.state;

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
        <div className={css(styles.commentInputContainer)}>
          <CommentInput
            user={authReducer.user}
            handleSubmit={this.handleSubmit}
            onFocus={this.onInputFocus}
            getDuration={getDuration}
            view="status"
            setTimestamp={this.setTimestamp}
            timestamp={timestamp}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    commentsReducer: state.commentsReducer
  };
}

export default connect(mapStateToProps, CommentActions)(StatusBar);

const styles = StyleSheet.create({
  statusBarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: "480px",
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
    overflowY: "scroll"
  },

  commentInputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "75px"
  }
});
