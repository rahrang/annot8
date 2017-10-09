// React
import React from 'react';

// NPM Modules
import { css, StyleSheet } from 'aphrodite';

import PostBar from './PostBar.jsx';
import TimeBar from './TimeBar.jsx';

export default class SideBar extends React.Component {

  componentDidMount() {
    // query the database for posts/timestamps
  }

  componentWillReceiveProps(nextProps) {
    let { videoId } = this.props;
    if (videoId !== nextProps.videoId) {
      // query the database for posts/timestamps
    }
  }

  render() {
    let { videoId } = this.props;
    return (
      <div className={css(styles.sideBarContainer)}>
        <div className={css(styles.postContainer)}>
          <PostBar videoId={videoId} />
        </div>
        {/*
          <div className={css(styles.timeContainer)}>
            <TimeBar videoId={videoId} />
          </div>
          
        */}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  sideBarContainer: {
    // backgroundColor: '#E6E6E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    borderLeft: '3px solid #3F7BA9',
    height: '100%',
    width: '100%',
  },

  postContainer: {
    // height: '60%',
    height: '100%',
    minHeight: 'calc(100vh - 95px)',
    width: '100%',
  },

  timeContainer: {
    height: '40%',
    width: '100%',
  },
});
