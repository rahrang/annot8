// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";
import { Link } from "react-router-dom";

export default class LoginButton extends React.Component {
  render() {
    return (
      <div id="login-container">
        <a href="/auth/google" className={css(styles.link)}>
          Sign In
        </a>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    backgroundColor: "#F5F5F5",
    border: "none",
    boxShadow: "2px 2px 1px #333",
    color: "#3F7BA9",
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
  }
});
