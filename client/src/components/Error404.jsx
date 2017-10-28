import React from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";

export default class Error404 extends React.Component {
  componentDidMount() {
    this.error404 = setTimeout(
      function() {
        this.props.history.replace("/");
      }.bind(this),
      2000
    );
  }

  render() {
    document.title = "Error - Annot8";

    return (
      <div className={css(styles.errorContainer)}>
        <p className={css(styles.errorMsg)}>Sorry, this page does not exist.</p>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0"
  },

  errorMsg: {
    color: "#333",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "2em",
    fontWeight: "500",
    textAlign: "center",
    padding: "10px"
  }
});
