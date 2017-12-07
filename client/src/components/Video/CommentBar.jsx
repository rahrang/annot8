// React
import React from 'react';

// NPM Modules
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite';
import * as _ from 'lodash';

// Local Components
import Comment from './Comment.jsx';
import CommentInput from './CommentInput.jsx';
import { CommentActions } from '../../actions/comment-actions.js';
import { formatTime } from '../../helpers.js';

class CommentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: -1
    };
  }

  componentDidMount() {
    let { comments } = this.props;
    if (!_.isEmpty(comments)) {
      this.setDefaultTimestamp(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    let { comments } = this.props;
    if (
      !_.isEqual(nextProps.comments, comments) &&
      !_.isEmpty(nextProps.comments)
    ) {
      this.setDefaultTimestamp(nextProps);
    }
  }

  setDefaultTimestamp = props => {
    let { comments } = props;
    let timestamp = comments[0].timestamp;
    this.setState({ timestamp });
  };

  handleSubmit = async (value, isAnonymous) => {
    let { timestamp } = this.state;
    let { videoId, user } = this.props;
    let userName = user.name;
    if (!_.isEmpty(value)) {
      await this.props.makeComment(
        videoId,
        timestamp,
        userName,
        isAnonymous,
        value
      );
    }
    this.setDefaultTimestamp(this.props);
  };

  deleteComment = (commentId, timestamp) => {
    let { videoId } = this.props;
    this.props.deleteComment(videoId, commentId, timestamp, 'video');
  };

  render() {
    let { changeView, comments, getDuration, pauseVideo, user } = this.props;
    let { timestamp } = this.state;

    let commentsToRender = null;
    if (!_.isEmpty(comments) && _.isArray(comments)) {
      commentsToRender = comments.map(c => {
        return (
          <Comment
            key={c._id}
            id={c._id}
            text={c.text}
            timestamp={c.timestamp}
            datePosted={c.datePosted}
            user={c.isAnonymous ? 'Anonymous' : c.userName}
            isResolved={c.isResolved}
            isCurrentUser={_.isEqual(c._user, user._id)}
            deleteComment={this.deleteComment}
          />
        );
      });
    }

    return (
      <div className={css(styles.commentBarContainer)}>
        <div className={css(styles.headerContainer)}>
          {!this.props.noComments() && (
            <div
              className={css(styles.backButton)}
              onClick={() => changeView('timestamps')}
            >
              <i
                className={css(styles.icon) + ' fa fa-chevron-left'}
                aria-hidden="true"
              />
              All Comments
            </div>
          )}
          <p className={css(styles.header)}>
            Comments at {formatTime(timestamp)}
          </p>
        </div>
        <div className={css(styles.bodyContainer)}>{commentsToRender}</div>
        <div className={css(styles.commentInputContainer)}>
          <CommentInput
            user={user}
            handleSubmit={this.handleSubmit}
            onFocus={pauseVideo}
            getDuration={getDuration}
            timestamp={timestamp === -1 ? 0 : timestamp}
            view="comments"
          />
        </div>
      </div>
    );
  }
}

export default connect(null, CommentActions)(CommentBar);

const styles = StyleSheet.create({
  commentBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '10px 0'
  },

  headerContainer: {
    backgroundColor: '#F5F5F5',
    borderBottom: '3px solid #3F7BA9',
    color: '#333',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Fjalla One, sans-serif',
    fontSize: '1.25em',
    padding: '3px 0',
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%'
  },

  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: 'none',
    color: '#3F7BA9',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.75em',
    position: 'absolute',
    left: '10px',
    margin: '0',
    padding: '0 10px'
  },

  icon: {
    margin: '0 2.5px'
  },

  header: {
    margin: 0,
    padding: 0
  },

  bodyContainer: {
    height: '325px',
    width: '100%',
    overflowY: 'scroll'
  },

  commentInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
