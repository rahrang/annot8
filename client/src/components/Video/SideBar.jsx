// React
import React from "react";

// NPM Modules
import { connect } from "react-redux";
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";

// Local Components
import CommentBar from "./CommentBar.jsx";
import StatusBar from "./StatusBar.jsx";
import { CommentActions } from "../../actions/comment-actions.js";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "status"
    };
  }

  componentDidMount() {
    if (this.noComments()) {
      this.setState({ view: "comments" });
    } else {
      this.setState({ view: "status" });
    }
  }

  componentWillReceiveProps(nextProps) {
    let { commentsReducer } = this.props;
    if (
      !_.isEqual(
        commentsReducer.video_comments,
        nextProps.commentsReducer.video_comments
      )
    ) {
      if (_.isEmpty(nextProps.commentsReducer.video_comments)) {
        this.setState({ view: "comments" });
      } else {
        this.setState({ view: "status" });
      }
    }
  }

  changeView = newView => {
    let { commentsReducer } = this.props;
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
      videoId,
      getTime,
      getDuration,
      commentsReducer,
      authReducer,
      fetchTimestampComments
    } = this.props;
    let { view } = this.state;
    return (
      <div className={css(styles.sideBarContainer)}>
        {view === "comments" ? (
          <CommentBar
            videoId={videoId}
            changeView={this.changeView}
            getTime={getTime}
            getDuration={getDuration}
            comments={commentsReducer.timestamp_comments}
            currentUser={authReducer.user}
          />
        ) : (
          <StatusBar
            videoId={videoId}
            changeView={this.changeView}
            getDuration={getDuration}
            comments={commentsReducer.video_comments}
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
    borderRight: "3px solid #3F7BA9",
    height: "calc(100vh - 95px)",
    width: "500px"

    // TODO: add media queries on width
  }
});
