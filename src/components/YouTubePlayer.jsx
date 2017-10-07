// React
import React from 'react';

// NPM Modules
import { Link } from 'react-router-dom';
import { css, StyleSheet } from 'aphrodite';
import { fadeIn } from 'react-animations';

import YouTube from 'react-youtube';

export default class YouTubePlayer extends React.Component {
  render() {
    let videoId = this.props.match.params.videoId;
    let opts = {
      height: '500',
      width: '800',
      playerVars: {
        cc_load_policy: 0,
        // color: 'white',
        modestbranding: 1, // removes the YouTube icon in the controls bar
        iv_load_policy: 3
      }
    };

    return (
      <div className={css(styles.mainContainer, styles.fadeIn)}>
        <div className={css(styles.playerContainer)}>
          <YouTube
            videoId={videoId}
            className={css(styles.player)}
            opts={opts}
          />
        </div>
        <div className={css(styles.sidebarContainer)} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'center'
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

  sidebarContainer: {
    display: 'flex',
    flex: '0.35'
  }
});
