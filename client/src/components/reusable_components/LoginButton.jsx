// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";

export default class LoginButton extends React.Component {
  render() {
    let { defStyle } = this.props;
    return (
      <div id="login-container">
        <a
          href="/auth/google"
          className={css(
            styles.link,
            defStyle ? styles.defStyle : styles.altStyle
          )}
        >
          Sign In
        </a>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    border: "none",
    cursor: "pointer",
    fontFamily: "Fjalla One, sans-serif",
    fontSize: "1em",
    fontWeight: "bold",
    letterSpacing: "0.035em",
    padding: "5px 10px",
    textDecoration: "none",
    textTransform: "uppercase",
    ":hover": {
      color: "#333"
    }
  },

  defStyle: {
    backgroundColor: "#F5F5F5",
    boxShadow: "2px 2px 1px #333",
    color: "#3F7BA9"
  },

  altStyle: {
    backgroundColor: "#3F7BA9",
    boxShadow: "2px 2px 1px #333",
    color: "#F5F5F5"
  }
});
