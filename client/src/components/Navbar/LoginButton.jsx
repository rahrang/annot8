// React
import React from "react";

// NPM Modules
import { css, StyleSheet } from "aphrodite";

export default class LoginButton extends React.Component {
  render() {
    let { login } = this.props;
    return (
      <div className={css(styles.loginContainer)}>
        <button onClick={login} className={css(styles.link)}>
          Sign In
        </button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    borderRadius: "8px"
  },

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
