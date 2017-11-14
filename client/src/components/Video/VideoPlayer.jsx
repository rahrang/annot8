// React
import React from 'react';

// NPM Modules
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import YouTube from 'react-youtube';

// Local Components
import SideBar from './SideBar.jsx';
import { CommentActions } from '../../actions/comment-actions.js';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
      player: {}
    };
    this.onReady = this.onReady.bind(this);
  }

  componentDidMount() {
    let videoId = this.props.match.params.videoId;
    this.timestamp = this.props.match.params.timestamp || 0;
    this.setState({ videoId });
    this.props.fetchVideoComments(videoId);
  }

  componentWillReceiveProps(nextProps) {
    let videoId = this.props.match.params.videoId;
    let nextVideoId = nextProps.match.params.videoId;

    // if the video switches
    if (!_.isEqual(videoId, nextVideoId)) {
      this.setState({ videoId: nextVideoId });
      this.timestamp = nextProps.match.params.timestamp || 0;
      this.props.fetchVideoComments(nextVideoId);
    }

    let commentReducer = this.props;
    let nextCommentReducer = nextProps;
    // if a new comment is made
    if (!_.isEqual(commentReducer, nextCommentReducer)) {
      this.props.fetchVideoComments(videoId);
    }
  }

  onReady = event => {
    this.setState({ player: event.target });
  };

  // use this when creating new threads
  getTime = () => {
    let { player } = this.state;
    this.pauseVideo();
    return Math.floor(player.getCurrentTime()); // whole seconds (i.e. 76, 12, 104)
  };

  pauseVideo = () => {
    let { player } = this.state;
    player.pauseVideo();
  };

  getDuration = () => {
    let { player } = this.state;
    return !_.isEmpty(player) ? player.getDuration() : 0;
  };

  setPlayerOpts = () => {
    let playerVars = {
      autoplay: 1,
      cc_load_policy: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      start: this.timestamp
    };
    let screenWidth = window.screen.width;
    // let width = screenWidth * 0.5;
    // let height = screenWidth * 0.33;
    // let opts = { height, width, playerVars };
    let opts = { playerVars };
    return opts;
  };

  render() {
    let { videoId } = this.state;

    const opts = {
      height: '450',
      width: '720',
      playerVars: {
        autoplay: 1,
        cc_load_policy: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        start: this.timestamp
      }
    };

    return (
      <div className={css(styles.videoPlayerContainer, styles.fadeIn)}>
        <div className={css(styles.playerContainer)}>
          <YouTube
            id="video-player"
            videoId={videoId}
            className={css(styles.player)}
            // opts={this.setPlayerOpts()}
            opts={opts}
            onReady={this.onReady}
          />
        </div>
        <SideBar
          videoId={videoId}
          getTime={this.getTime}
          getDuration={this.getDuration}
          pauseVideo={this.pauseVideo}
        />
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

export default connect(mapStateToProps, CommentActions)(VideoPlayer);

const styles = StyleSheet.create({
  videoPlayerContainer: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    minHeight: 'calc(100vh - 110px)'
  },

  playerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  player: {
    border: '3px solid #3F7BA9',
    margin: '20px 40px'
  }
});
