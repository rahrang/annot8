// React
import React from "react";

// NPM Modules
import { connect } from "react-redux";
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";

// Local Components
import CommentBar from "./CommentBar.jsx";
import TimestampBar from "./TimestampBar.jsx";
import { CommentActions } from "../../actions/comment-actions.js";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "timestamps"
    };
  }

  componentWillReceiveProps(nextProps) {
    let { commentsReducer } = this.props;
    if (
      !_.isEqual(
        commentsReducer.video_comments,
        nextProps.commentsReducer.video_comments
      )
    ) {
      if (_.isEmpty(nextProps.commentsReducer.timestamp_comments)) {
        this.setState({ view: "timestamps" });
      } else {
        this.setState({ view: "comments" });
      }
    }
  }

  changeView = newView => {
    if (this.noComments()) {
      this.setState({ view: "comments" });
    } else {
      this.setState({ view: newView });
    }
  };

  noComments = () => {
    let { commentsReducer } = this.props;
    return _.isEmpty(commentsReducer.video_comments);
  };

  render() {
    let {
      authReducer,
      videoId,
      getTime,
      getDuration,
      pauseVideo,
      commentsReducer,
      fetchTimestampComments
    } = this.props;
    let { view } = this.state;
    return (
      <div className={css(styles.sideBarContainer)}>
        {view === "comments" ? (
          <CommentBar
            videoId={videoId}
            changeView={this.changeView}
            getDuration={getDuration}
            pauseVideo={pauseVideo}
            noComments={this.noComments}
            comments={commentsReducer.timestamp_comments} // comments made at the timestamp
            user={authReducer.user}
          />
        ) : (
          <TimestampBar
            videoId={videoId}
            changeView={this.changeView}
            getTime={getTime}
            getDuration={getDuration}
            comments={commentsReducer.video_comments} // comments made at distinct timestamps throughout video
            fetchTimestampComments={fetchTimestampComments}
          />
        )}
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

export default connect(mapStateToProps, CommentActions)(SideBar);

const styles = StyleSheet.create({
  sideBarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    borderLeft: "3px solid #3F7BA9",
    minHeight: "calc(100vh - 110px)",
    width: "500px",
    "@media (min-width: 600px)": {
      width: "200px"
    },
    "@media (min-width: 900px)": {
      width: "415px"
    },
    "@media (min-width: 1200px)": {
      width: "500px"
    }
  }
});
