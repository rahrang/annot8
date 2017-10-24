// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';
import YouTube from 'react-youtube';

// Local Components
import SideBar from './SideBar.jsx';

export default class YouTubePlayer extends React.Component {
  render() {
    let videoId = this.props.match.params.videoId;
    let opts = {
      height: '500',
      width: '800',
      playerVars: {
        autoplay: 1,
        cc_load_policy: 0,
        // color: 'white',
        modestbranding: 1, // removes the YouTube icon in the controls bar
        iv_load_policy: 3
      }
    };

    return (
      <div className={css(styles.pageContainer, styles.fadeIn)}>
        <div className={css(styles.sideBarContainer)}>
          <SideBar videoId={videoId} />
        </div>
        <div className={css(styles.playerContainer)}>
          <YouTube
            videoId={videoId}
            className={css(styles.player)}
            opts={opts}
          />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'center',
    minHeight: '100%'
  },

  playerContainer: {
    display: 'flex',
    flex: '0.65',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center'
  },

  player: {
    border: '3px solid #3F7BA9',
    margin: '20px'
  },

  sideBarContainer: {
    display: 'flex',
    flex: '0.35',
    height: '100%'
  }
});
