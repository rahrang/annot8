// React
import React from 'react';

// NPM Modules
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';
import { slide as Menu } from 'react-burger-menu';

// Local Components
import CommentBar from './CommentBar.jsx';
import TimestampBar from './TimestampBar.jsx';
import { CommentActions } from '../../actions/comment-actions.js';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true,
      view: 'timestamps'
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
        this.setState({ view: 'timestamps' });
      } else {
        this.setState({ view: 'comments' });
      }
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  changeView = newView => {
    if (this.noComments()) {
      this.setState({ view: 'comments' });
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
      videoTitle,
      getTime,
      getDuration,
      pauseVideo,
      commentsReducer,
      fetchTimestampComments
    } = this.props;
    let { view, isMenuOpen } = this.state;
    return (
      <Menu
        className={css(styles.sideBarContainer) + ' menu'}
        styles={menuStyles}
        width={400}
        isOpen={isMenuOpen}
        onStateChange={() => this.toggleMenu}
        right
        noOverlay
        disableOverlayClick
      >
        {view === 'comments' ? (
          <CommentBar
            videoId={videoId}
            videoTitle={videoTitle}
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
            videoTitle={videoTitle}
            changeView={this.changeView}
            getTime={getTime}
            getDuration={getDuration}
            comments={commentsReducer.video_comments} // comments made at distinct timestamps throughout video
            fetchTimestampComments={fetchTimestampComments}
          />
        )}
      </Menu>
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
    backgroundColor: '#F5F5F5',
    borderLeft: '3px solid #3F7BA9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    width: '500px'
  }
});

const menuStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '30px',
    height: '24px',
    right: '25px',
    top: '80px'
  },

  bmBurgerBars: {
    backgroundColor: '#3F7BA9'
  },

  bmCrossButton: {
    position: 'absolute',
    top: '10px',
    right: '25px',
    height: '30px',
    width: '30px'
  },

  bmCross: {
    backgroundColor: '#3F7BA9'
  },

  bmMenu: {
    background: '#F5F5F5',
    color: '#FFF',
    width: '500px'
  }
};
