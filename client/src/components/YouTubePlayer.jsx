// React
import React from "react";

// NPM Modules
import { connect } from "react-redux";
import { css, StyleSheet } from "aphrodite";
import YouTube from "react-youtube";

// Local Components
import SideBar from "./SideBar.jsx";
import { CommentActions } from "../actions/comment-actions.js";

class YouTubePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: "",
      player: {}
    };

    this.onReady = this.onReady.bind(this);
  }

  componentDidMount() {
    let videoId = this.props.match.params.videoId;
    this.setState({ videoId });
    this.props.fetchVideoComments(videoId);
  }

  componentWillReceiveProps(nextProps) {
    let videoId = this.props.match.params.videoId;
    let nextVideoId = nextProps.match.params.videoId;
    if (videoId !== nextVideoId) {
      this.setState({ videoId: nextVideoId });
      this.props.fetchVideoComments(nextVideoId);
    }
  }

  onReady = event => {
    console.log(
      `YouTube Player object for videoId:${this.state
        .videoId}" has been saved to state.`
    );
    this.setState({
      player: event.target
    });
  };

  getTime = () => {
    let { player } = this.state;
    player.pauseVideo();
    return Math.round(player.getCurrentTime()); // whole seconds (i.e. 76, 12, 104)
  };

  render() {
    let { videoId, player } = this.state;
    return (
      <div className={css(styles.pageContainer, styles.fadeIn)}>
        <div className={css(styles.sideBarContainer)}>
          <SideBar videoId={videoId} getTime={this.getTime} />
        </div>
        <div className={css(styles.playerContainer)}>
          <YouTube
            id="youtube-player"
            videoId={videoId}
            className={css(styles.player)}
            opts={opts}
            onReady={this.onReady}
          />
        </div>
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

export default connect(mapStateToProps, CommentActions)(YouTubePlayer);

const opts = {
  height: "500",
  width: "800",
  playerVars: {
    autoplay: 1,
    cc_load_policy: 0,
    // color: 'white',
    modestbranding: 1, // removes the YouTube icon in the controls bar
    iv_load_policy: 3
  }
};

const styles = StyleSheet.create({
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "100%"
  },

  playerContainer: {
    display: "flex",
    flex: "0.65",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center"
  },

  player: {
    border: "3px solid #3F7BA9",
    margin: "20px"
  },

  sideBarContainer: {
    display: "flex",
    flex: "0.35",
    height: "100%"
  }
});
