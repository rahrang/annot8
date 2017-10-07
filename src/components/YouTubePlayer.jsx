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

    return (
      <div className={css(styles.playerContainer, styles.fadeIn)}>
        <YouTube videoId={videoId} />
      </div>
    );
  }
}

const styles = StyleSheet.create({});
