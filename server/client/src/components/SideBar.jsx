// React
import React from "react";

// NPM Modules
import { connect } from "react-redux";
import { css, StyleSheet } from "aphrodite";

import CommentBar from "./CommentBar.jsx";
import StatusBar from "./StatusBar.jsx";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "comments"
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  changeView = newView => {
    this.setState({ view: newView });
  };

  render() {
    let { videoId, comments, getTime } = this.props;
    let { view } = this.state;
    return (
      <div className={css(styles.sideBarContainer)}>
        {view === "comments" ? (
          <CommentBar
            videoId={videoId}
            changeView={this.changeView}
            getTime={getTime}
            comments={comments}
          />
        ) : (
          <StatusBar
            videoId={videoId}
            changeView={this.changeView}
            comments={comments}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    comments: state.comments
  };
}

export default connect(mapStateToProps)(SideBar);

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
