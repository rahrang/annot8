// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";

import CommentBar from "./CommentBar.jsx";
import StatusBar from "./StatusBar.jsx";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "comments"
    };
  }

  componentDidMount() {
    // query the database for comments/timestamps
  }

  componentWillReceiveProps(nextProps) {
    let { videoId } = this.props;
    if (videoId !== nextProps.videoId) {
      // query the database for comments/timestamps
    }
  }

  changeView = newView => {
    this.setState({ view: newView });
  };

  render() {
    let { videoId } = this.props;
    let { view } = this.state;
    return (
      <div className={css(styles.sideBarContainer)}>
        {view === "comments" ? (
          <CommentBar videoId={videoId} changeView={this.changeView} />
        ) : (
          <StatusBar videoId={videoId} changeView={this.changeView} />
        )}
      </div>
    );
  }
}

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
