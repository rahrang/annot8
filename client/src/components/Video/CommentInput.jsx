// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";
import * as _ from "lodash";

// Local Components
import LoginButton from "../reusable_components/LoginButton.jsx";
import CommentTextArea from "./CommentTextArea.jsx";

export default class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    };
  }

  render() {
    let { user, handleSubmit, onFocus } = this.props;

    return (
      <div id="input-container">
        {_.isEmpty(user) ? (
          <div className={css(styles.loginContainer)}>
            <p className={css(styles.loginText)}>
              Please sign in to leave a comment.
            </p>
            <LoginButton />
          </div>
        ) : (
          <CommentTextArea
            user={user}
            handleSubmit={handleSubmit}
            onFocus={onFocus}
          />
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  loginText: {
    margin: "20px 10px"
  }
});
