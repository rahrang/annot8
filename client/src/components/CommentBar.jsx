// React
import React from "react";

// NPM Modules
import { connect } from "react-redux";
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";

// Local Components
import Comment from "./Comment.jsx";
import { CommentActions } from "../actions/comment-actions.js";

class CommentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      isPublic: true,
      isQuestion: true,
      timestamp: -1
    };
  }

  onInputFocus = () => {
    let { getTime } = this.props;
    let timestamp = getTime();
    this.setState({ timestamp });
  };

  // called when user clicks post --> send info to backend
  handleSubmit = () => {
    console.log("called handle submit");
    let { videoId } = this.props;
    let { timestamp, inputValue } = this.state;
    if (!_.isEmpty(inputValue) && timestamp !== -1) {
      this.props.makeComment(videoId, timestamp, inputValue);
    }
  };

  render() {
    // let comments = _.range(0, 4).map(p => {
    //   return <Comment key={p} me={p % 2 === 1} />;
    // });

    let { changeView, comments, getTime } = this.props;
    let { inputValue } = this.state;

    comments = null;

    return (
      <div className={css(styles.commentBarContainer)}>
        <div className={css(styles.headerContainer)}>
          <i
            className={css(styles.icon) + " fa fa-chevron-left"}
            aria-hidden="true"
            onClick={() => changeView("status")}
          />
          <p className={css(styles.header)}>Comments</p>
        </div>
        <div className={css(styles.bodyContainer)}>{comments}</div>
        <div className={css(styles.inputContainer)}>
          <textarea
            value={inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            onFocus={this.onInputFocus}
            className={css(styles.input)}
            placeholder="Ask a question or make a comment!"
            cols={50}
            rows={3}
          />
          <button
            className={css(styles.button)}
            type="submit"
            onClick={this.handleSubmit}
          >
            Comment
          </button>
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

export default connect(mapStateToProps, CommentActions)(CommentBar);

const styles = StyleSheet.create({
  commentBarContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "10px 0"
  },

  headerContainer: {
    backgroundColor: "#F5F5F5",
    borderBottom: "3px solid #3F7BA9",
    color: "#333",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Fjalla One, sans-serif",
    fontSize: "1.25em",
    padding: "3px 0",
    position: "relative",
    textAlign: "center",
    textTransform: "uppercase",
    width: "100%"
  },

  icon: {
    color: "#3F7BA9",
    cursor: "pointer",
    fontSize: "0.9em",
    position: "absolute",
    left: "10px",
    margin: "0",
    padding: "0 10px"
  },

  header: {
    margin: 0,
    padding: 0
  },

  bodyContainer: {
    backgroundColor: "#E6E6E6",
    borderBottom: "3px solid #3F7BA9",
    width: "100%",
    overflow: "scroll"
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",
    height: "200px"
  },

  input: {
    border: "none",
    color: "#333",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "1em",
    margin: "5px",
    padding: "5px",
    outline: "none",
    resize: "none"
  },

  button: {
    border: "none",
    backgroundColor: "#3F7BA9",
    color: "#F5F5F5",
    cursor: "pointer",
    fontFamily: "Fjalla One, sans-serif",
    fontSize: "1em",
    outline: "none",
    padding: "3px 10px"
  }
});
